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
        bytes32 parentNrId; // Parent Nr ID
        address acctAddr; // document Nr owner
        uint timestamp; // timestamp of document
        uint256 kudosEarned; // kudosEarned by document
    }

    mapping (bytes32 => documentStruct) document; // natural rights Haven ID hash to document

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
    
    // Add document event
    event AddDocument(
        bytes32 naturalRightsId,
        bytes32 parentNrId,
        uint timestamp
    );

    // Add document
    function addDocument(bytes32 _naturalRightsId, bytes32 _parentNrId, address _acctAddr) public returns(bool success) {
        require(document[_naturalRightsId].acctAddr == address(0), "document not empty");
        document[_naturalRightsId].parentNrId = _parentNrId;
        document[_naturalRightsId].acctAddr = _acctAddr;
        document[_naturalRightsId].timestamp = now;
        emit AddDocument(_naturalRightsId, _parentNrId, now);
        return true;
    }

    // Tip document event
    event TipDocument(
        bytes32 naturalRightsId,
        uint256 value
    );

    // Tip Document
    function tipDocument(bytes32 _naturalRightsId, address _acctAddr, uint256 value) public returns(bool success) {
        require(ac.isDevAuthorized(_acctAddr, msg.sender), "msg.sender not authorized for account");
        require(wc.getAcctBal(_acctAddr)>=value, "account balance too low");
        if(document[_naturalRightsId].parentNrId == 0) {
            document[_naturalRightsId].kudosEarned += value;
            wc.transferKudosDoc(_acctAddr, document[_naturalRightsId].acctAddr, value);
            emit TipDocument(_naturalRightsId, value);
        } else {
            uint256 netValue = value * 9 / 10;
            uint256 rake = value * 1 / 10;
            document[_naturalRightsId].kudosEarned += netValue;
            wc.transferKudosDoc(_acctAddr, document[_naturalRightsId].acctAddr, netValue);
            tipDocument(document[_naturalRightsId].parentNrId, _acctAddr, rake);
            emit TipDocument(_naturalRightsId, netValue);
        }
        return true;
    }
}
