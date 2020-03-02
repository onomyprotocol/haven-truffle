pragma solidity ^0.6.3;

// import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

interface AcctCont {
    function isDevAuthorized(address, address) external returns (bool);
}

interface WalletCont {
    function getAcctBal(address) external returns(uint256 value);
    function transferKudosDoc(address, address, uint256) external returns(bool success);
}

contract Documents is Ownable {

    AcctCont ac;
    WalletCont wc;

    // The address of the Account Contract
    address public accountContractAddress;

    // The address of the Wallet Contract
    address public walletContractAddress;

    constructor(address acctContAddr, address walletContAddr) public {
        ac = AcctCont(acctContAddr);
        wc = WalletCont(walletContAddr);
    }

    struct documentStruct {
        string naturalRightsId; // Document Natural Rights Id
        string parentNrId; // Parent Nr ID
        address acctAddr; // document Nr owner
        uint timestamp; // timestamp of document
        uint256 kudosEarned; // kudosEarned by document
    }

    mapping (uint256 => documentStruct) document; // natural rights Haven ID hash to document

    // Only contract owner may change Account Contract Address
    function setAccountContract(address _newAcctContAddr) public onlyOwner returns(bool success) {
        require(_newAcctContAddr != address(0), "address must not equal 0");
        ac = AcctCont(_newAcctContAddr);
        return true;
    }

    // Only contract owner may change Account Contract Address
    function setWalletContract(address _newAcctContAddr) public onlyOwner returns(bool success) {
        require(_newAcctContAddr != address(0),"address must not equal 0");
        ac = AcctCont(_newAcctContAddr);
        return true;
    }

    // Is msg.sender authorized to sign for the account?
    function isDevAuthorized(address _acctAddr) public returns(bool isIndeed) {
        return ac.isDevAuthorized(_acctAddr, msg.sender);
    }
    
    // Add document event
    event AddDocument(
        string naturalRightsId,
        string parentNrId,
        uint timestamp
    );

    // Add document
    function addDocument(string memory _naturalRightsId, string memory _parentNrId, address _acctAddr) public returns(bool success) {
        require(isDevAuthorized(_acctAddr), "msg.sender not authorized for account");
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        require(document[naturalRightsIdHash].acctAddr == address(0), "document already exists");
        document[naturalRightsIdHash].parentNrId = _parentNrId;
        document[naturalRightsIdHash].acctAddr = _acctAddr;
        document[naturalRightsIdHash].timestamp = now;
        document[naturalRightsIdHash].kudosEarned = uint256(0);
        emit AddDocument(_naturalRightsId, _parentNrId, now);
        return true;
    }

    // Tip document event
    event TipDocument(
        string naturalRightsId,
        uint256 value
    );

    // Tip Document
    function tipDocument(string memory _naturalRightsId, address _acctAddr, uint256 value) public returns(bool success) {
        require(isDevAuthorized(_acctAddr), "msg.sender not authorized for account");
        require(wc.getAcctBal(_acctAddr)>=value, "account balance too low");
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        require(document[naturalRightsIdHash].acctAddr != address(0), "document does not have owner");
        string memory top = 'top';
        if(keccak256(abi.encodePacked(document[naturalRightsIdHash].parentNrId)) == keccak256(abi.encodePacked((top)))) {
            document[naturalRightsIdHash].kudosEarned += value;
            wc.transferKudosDoc(_acctAddr, document[naturalRightsIdHash].acctAddr, value);
            emit TipDocument(_naturalRightsId, value);
        } else {
            uint256 netValue = value * 9 / 10;
            uint256 rake = value * 1 / 10;
            document[naturalRightsIdHash].kudosEarned += netValue;
            wc.transferKudosDoc(_acctAddr, document[naturalRightsIdHash].acctAddr, netValue);
            tipDocument(document[naturalRightsIdHash].parentNrId, _acctAddr, rake);
            emit TipDocument(_naturalRightsId, netValue);
        }
        return true;
    }

    // Get document earnings
    function getKudosEarned(string memory _naturalRightsId) public view returns(uint256 value) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        require(document[naturalRightsIdHash].acctAddr != address(0), "document does not have owner");
        return document[naturalRightsIdHash].kudosEarned;
    }
}
