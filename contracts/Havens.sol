pragma solidity ^0.6.3;

// import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract AcctCont {
    function isDevAuthorized(address, address) public returns (bool) {}
}

contract Havens is Ownable {

    AcctCont ac;
    
    // The address of the Natural Rights Server Testing
    address public naturalRightsAddress;

    // The address of the Account Contract
    address public accountContractAddress;

    constructor(address acctContAddr) public {
        ac = AcctCont(acctContAddr);
    }

    /// @dev Access modifier for NR-only functionality
    modifier onlyNR() {
        require(msg.sender == naturalRightsAddress);
        _;
    }

    struct havenStruct {
        address acctAddr; // Haven owner
        string havenName; // Haven name
        bool isPrivate; // Haven private bool
        uint listPointer;
    }
    
    struct havenNameTransfer {
        string fromHaven;
        string initExpectedHavenName;
        uint listPointer;
        // bool paymentMade
    }

    mapping (uint256 => havenStruct) haven; // natural rights Haven ID hash to public identifiers
    mapping (uint256 => address) havenOwner; // natural rights Haven ID hash to Loom Account address of owner
    mapping (uint256 => uint256) havenName; // maps haven name hash to natural rights haven id hash
    
    mapping (address => uint256[]) havensOwned; // maps Loom Account address to owned Haven natural rights ids 
    
    uint256[] public havenList; // public Haven index
    mapping (uint256 => havenNameTransfer) havenNameTransferQueue; // Queues Haven Name transfer from initiator (value) to comfirmer (key)
    uint256[] public havenNameTransferList; // List of Haven name confirmers
    
    
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
    
    // Only Natural Rights server may add havens
    function addHaven(string memory _naturalRightsId, address _acctAddr) public onlyNR returns(bool success) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        havenOwner[naturalRightsIdHash] = _acctAddr;
        return true;
    }
    
    // Is haven added by NR
    function isHavenOwned(string memory _naturalRightsId) public view returns(bool isIndeed) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        if(havenOwner[naturalRightsIdHash] != address(0)) {
            return true;
        }
        return false;
    }
    
    // Is haven active
    function isHavenSet(string memory _naturalRightsId) public view returns(bool isIndeed) {
        if(havenList.length == 0) return false;
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        return (havenList[haven[naturalRightsIdHash].listPointer] == naturalRightsIdHash);
    }
    
    // Loom address of Haven
    function havenOwnerAddress(string memory _naturalRightsId) public view returns(address loomAddress) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        return havenOwner[naturalRightsIdHash];
    }

    // Number of active havens
    function getHavenCount() public view returns(uint havenCount) {
        return havenList.length;
    }
    
    function isHavenName(string memory _havenName) public view returns(bool isIndeed) {
        uint256 havenNameHash = uint256(keccak256(bytes(_havenName)));
        if(havenName[havenNameHash] != 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function getHavenName(string memory _naturalRightsId) public view returns(string memory) {
        if(isHavenSet(_naturalRightsId) == true) {
            uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
            return haven[naturalRightsIdHash].havenName;
        } 
        revert('Natural Rights Haven Id does not match a Haven Name');
    }
    
    // Is msg.sender authorized to sign for the account?
    function isDevAuthorized(address _acctAddr) public returns(bool isIndeed) {
        return ac.isDevAuthorized(_acctAddr, msg.sender);
    }
    
    // Is msg.sender authorized to sign for the Haven?
    function isDevHavenAuthorized(string memory _naturalRightsId) public returns(bool isIndeed) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        return ac.isDevAuthorized(havenOwner[naturalRightsIdHash], msg.sender);
    }
    
    // haven initializes the public havens structs to become active
    function initHaven(string memory _naturalRightsId, string memory _havenName, bool _isPrivate) public returns(bool success) {
        require(isHavenOwned(_naturalRightsId), "Haven Natural Rights Id is not Owned by Loom Account");
        require(isDevHavenAuthorized(_naturalRightsId), "msg.sender not authorized for Haven");
        require(!isHavenSet(_naturalRightsId), "Haven has already been set");
        require(!isHavenName(_havenName), "Haven name already taken");
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        address havenOwnerAcctAddr = havenOwner[naturalRightsIdHash];
        uint256 havenNameHash = uint256(keccak256(bytes(_havenName)));
        
        // Set Storage Values
        haven[naturalRightsIdHash].havenName = _havenName;
        haven[naturalRightsIdHash].acctAddr = havenOwnerAcctAddr;
        haven[naturalRightsIdHash].isPrivate = _isPrivate;
        haven[naturalRightsIdHash].listPointer = havenList.length;
        havenList.push(naturalRightsIdHash);
        havenName[havenNameHash] = naturalRightsIdHash;
        return true;
    }

    // update existing Haven name with new unique name
    function updateHavenName(string memory _naturalRightsId, string memory _newHavenName) public returns(bool success) {
        require(isHavenSet(_naturalRightsId), 'Haven has not been set by user');
        require(isDevHavenAuthorized(_naturalRightsId), 'msg.sender not authorized for Haven');
        require(!isHavenName(_newHavenName), 'Haven name already taken');
        uint256 havenNameHash = uint256(keccak256(bytes(_newHavenName)));
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        uint256 oldHavenNameHash = uint256(keccak256(bytes(haven[naturalRightsIdHash].havenName)));
        delete haven[naturalRightsIdHash].havenName;
        haven[naturalRightsIdHash].havenName = _newHavenName;
        delete havenName[oldHavenNameHash];
        havenName[havenNameHash] = naturalRightsIdHash;
        return true;
    }

    function initTransferHavenName(string memory _fromHaven, string memory _toHaven, string memory _expectedHavenName) public returns(bool success) {
        require(isHavenSet(_fromHaven) && isHavenSet(_toHaven), 'One or both Havens do not exist');
        require(isDevHavenAuthorized(_fromHaven), 'msg.sender not authorized for Haven');
        require(uint256(keccak256(bytes(getHavenName(_toHaven)))) == uint256(keccak256(bytes(_expectedHavenName))), 'Expected Haven name not equal to toHaven name');
        uint256 fromHavenHash = uint256(keccak256(bytes(_fromHaven)));
        uint256 toHavenHash = uint256(keccak256(bytes(_toHaven)));
        havenNameTransferQueue[toHavenHash].fromHaven = _fromHaven;
        havenNameTransferQueue[toHavenHash].listPointer = havenNameTransferList.length;
        havenNameTransferList.push(fromHavenHash);
        return true;
    }

    function confirmTransferHavenName(string memory _toHaven, string memory _expectedHavenName) public returns(bool success) {
        
        require(isDevHavenAuthorized(_toHaven), 'msg.sender not authorized for Haven');
        string memory fromHaven = havenNameTransferQueue[uint256(keccak256(bytes(_toHaven)))].fromHaven;
        require(isHavenSet(fromHaven) && isHavenSet(_toHaven), 'One or both Havens do not exist');
        uint256 toHavenHash = uint256(keccak256(bytes(_toHaven)));
        uint256 fromHavenHash = uint256(keccak256(bytes(fromHaven)));
        require(keccak256(bytes(haven[fromHavenHash].havenName)) == keccak256(bytes(_expectedHavenName)), 'Havenname mismatch: confirmer expectedHavenName does not match initiator havenName');
        require(keccak256(bytes(havenNameTransferQueue[toHavenHash].initExpectedHavenName)) == keccak256(bytes(haven[toHavenHash].havenName)), 'Havenname mismatch: confirmer havenName does not match initiators expected havenName');
        uint256 expectedHavenNameHash = uint256(keccak256(bytes(_expectedHavenName)));
        uint256 confirmHavenNameHash = uint256(keccak256(bytes(haven[toHavenHash].havenName)));
        havenName[expectedHavenNameHash] = fromHavenHash;
        havenName[confirmHavenNameHash] = toHavenHash;
        haven[fromHavenHash].havenName = haven[toHavenHash].havenName;
        haven[toHavenHash].havenName = _expectedHavenName;
        // Remove the havenName transfer queue and row in list
        uint rowToDelete = havenNameTransferQueue[toHavenHash].listPointer;
        delete havenNameTransferQueue[toHavenHash];
        uint256 keyToMove = havenNameTransferList[havenNameTransferList.length-1];
        havenNameTransferList[rowToDelete] = keyToMove;
        havenNameTransferQueue[keyToMove].listPointer = rowToDelete;
        havenNameTransferList.pop();
        return true;
    }

    // deletes the haven from the havenList and also deletes the havenName. havenPriv and NR account mapping left for recovery
    function deleteHaven(string memory _naturalRightsId) public returns(bool success) {
        require(isDevHavenAuthorized(_naturalRightsId), 'msg.sender not authorized for Haven');
        require(isHavenSet(_naturalRightsId), 'Haven does not exist');
        uint256 havenHash = uint256(keccak256(bytes(_naturalRightsId)));
        uint rowToDelete = haven[havenHash].listPointer;
        uint256 keyToMove = havenList[havenList.length-1];
        havenList[rowToDelete] = keyToMove;
        haven[keyToMove].listPointer = rowToDelete;
        havenList.pop();
        uint256 havenNameHash = uint256(keccak256(bytes(haven[havenHash].havenName)));
        delete havenName[havenNameHash];
        delete haven[havenHash].havenName; 
        return true;
    }
}
