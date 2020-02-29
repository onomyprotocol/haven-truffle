pragma solidity ^0.6.3;

// import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract AcctCont {
    function isDevAuthorized(address, address) public returns (bool) {}
}

contract AcctCont {
    function getAcctBal(address) public view returns(uint256 value) {}
}

contract Havens is Ownable {

    AcctCont ac;
    WalletCont wc;
    
    // The address of the Natural Rights Server Testing
    address public naturalRightsAddress;

    // The address of the Account Contract
    address public accountContractAddress;

    constructor(address acctContAddr, address havenContAddr, address walletContAddr) public {
        ac = AcctCont(acctContAddr);
        wc = WalletCont(walletContAddr)
    }

    /// @dev Access modifier for NR-only functionality
    modifier onlyNR() {
        require(msg.sender == naturalRightsAddress);
        _;
    }

    struct documentStruct {
        bytes32 parentNrId; // Parent Nr ID
        address acctAddr; // document owner
        uint timestamp;
        uint256 kudosEarned
    }

    mapping (bytes32 => documentStruct) document; // natural rights Haven ID hash to document 
    
    // Only contract owner may change Natural Rights Server
    function setNaturalRightsServer(address _newNaturalRights) public onlyOwner returns(bool success) {
        require(_newNaturalRights != address(0));
        naturalRightsAddress = _newNaturalRights;
        return true;
    }

    // Only contract owner may change Account Contract Address
    function setAccountContract(address _newAcctContAddr) public onlyOwner returns(bool success) {
        require(_newAcctContAddr != address(0));
        ac = AcctCont(_newAcctContAddr);
        return true;
    }
    
    // Add document event
    event AddDocument(
        bytes32 naturalRightsId
        bytes32 parentNrId
        uint timestamp
    );

    // Add document
    function addDocument(bytes32 memory _naturalRightsId, bytes32 memory _parentNrId, address _acctAddr) public returns(bool success) {
        require(document[_naturalRightsId].naturalRightsId == 0)
        require(document[_parentNrId].naturalRightsId != 0)
        document[_naturalRightsId].parentNrId = _parentNrId;
        document[_naturalRightsId].acctAddr = _acctAddr;
        document[_naturalRightsId].timestamp = now;
        emit AddDocument(_naturalRightsId, _parentNrId, now)
        return true;
    }

    // Document Rake
    function documentRake() private {

    }

    // Parent rake
    function parentRake(bytes32 _naturalRightsId, value) private {


    }

    // Tip document event
    event TipDocument(
        bytes32 naturalRightsId
        bytes32 parentNrId
        uint256 kudosEarned
    );

    // Tip Document
    function tipDocument(bytes32 memory _naturalRightsId, address _acctAddr, uint256 memory value) {
        require(ac.isDevAuthorized(_acctAddr), "msg.sender not authorized for account");
        require(wc.getAcctBal(_acctAddr)>=value, "account balance too low");
        if(document[_naturalRightsId].parentNrId = 0) {
            document[_naturalRightsId].kudosEarned += value;
            wc.transferKudos(_acctAdr, document[_naturalRightsId].acctAddr, value)
            event TipDocument(document[_naturalRightsId].kudosEarned, bytes32(0), value)
        } else {
            memory uint256 netValue = value*.9;
            memory uint256 rake = value*.1;
            document[_naturalRightsId].kudosEarned += netValue;
            wc.transferKudos(_acctAdr, document[_naturalRightsId].acctAddr, netValue);
            ParentRake(document[_naturalRightsId].parentNrId, rake);
            event TipDocument(document[_naturalRightsId].kudosEarned, document[_naturalRightsId].parentNrId, netValue)
        }
    }
}
