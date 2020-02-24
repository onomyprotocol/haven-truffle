pragma solidity ^0.5.3;

import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";
// import "@openzeppelin/contracts/ownership/Ownable.sol";

contract AccountContract is Ownable {

    // The address of the Natural Rights Server Testing
    address public naturalRightsAddress;

    /// @dev Access modifier for NR-only functionality
    modifier onlyNR() {
        require(msg.sender == naturalRightsAddress);
        _;
    }

    struct privUserStruct {
        string cryptPubKey;
        string encCryptPrivKey;
        string encSignPrivKey;
        bool recordExists;
    }
    struct pubUserStruct {
        string naturalRightsId;
        string userName;
        uint listPointer;
    }
    
    struct userNameTransfer {
        address initiator;
        string initExpectedUserName;
        uint listPointer;
        // bool paymentMade
    }

    mapping (address => privUserStruct) userPriv; // private account backup
    mapping (address => pubUserStruct) userPub; // Loom address to public identifiers
    mapping (address => address[]) delegatedSigner; // delegated signers for account address
    address[] public userList; // user index
    mapping (uint256 => address) userNameOwner; // maps userName to Loom address
    mapping (address => userNameTransfer) userNameTransferQueue; // Queues userName transfer from initiator (value) to comfirmer (key)
    address[] public userNameTransferList; // List of username confirmers
    mapping (uint256 => address) naturalRightsOwner; // maps NR ID to Loom address
    
    // Only contract owner may change Natural Rights Server
    function setNaturalRightsServer(address _newNaturalRights) public onlyOwner returns(bool success) {
        require(_newNaturalRights != address(0), "Address 0 entered");
        naturalRightsAddress = _newNaturalRights;
        return true;
    }
    
    // Only Natural Rights server may add users
    function addUser(string memory _naturalRightsId, address _loomAddr) public onlyNR returns(bool success) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        naturalRightsOwner[naturalRightsIdHash] = _loomAddr;
        return true;
    }
    
    // Is user added by NR
    function isHavenUser(string memory _naturalRightsId) public view returns(bool isIndeed) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        if(naturalRightsOwner[naturalRightsIdHash] != address(0)) {
            return true;
        }
        return false;
    }
    
    // Is user active
    function isUserPub(address _loomAddr) public view returns(bool isIndeed) {
        if(userList.length == 0) return false;
        return (userList[userPub[_loomAddr].listPointer] == _loomAddr);
    }

    // Is user priv stored for account
    function isUserPriv() public view returns(bool isIndeed) {
        return(userPriv[msg.sender].recordExists);
    }
    
    // Loom address of Haven User
    function havenUserAddress(string memory _naturalRightsId) public view returns(address loomAddress) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        return naturalRightsOwner[naturalRightsIdHash];
    }

    // Number of active users
    function getUserCount() public view returns(uint userCount) {
        return userList.length;
    }
    
    function isUserName(string memory _userName) public view returns(bool isIndeed) {
        uint256 userNameHash = uint256(keccak256(bytes(_userName)));
        if(userNameOwner[userNameHash] != address(0)) {
            return true;
        } else {
            return false;
        }
    }
    
    function getUserName(string memory _naturalRightsId) public view returns(string memory) {
        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
        address loomAcctAddr = naturalRightsOwner[naturalRightsIdHash];
        if(loomAcctAddr != address(0)) {
            string memory loomUserName = userPub[loomAcctAddr].userName;
            return loomUserName;
        }
            revert('Natural Rights account Id does not match a User Name');
    }
    
    // Is msg.sender authorized to sign for the account?
    function isAuthorized(address _acctAddr) public view returns(bool isIndeed) {
        if(_acctAddr == msg.sender) {
            return true;
        }
        for(uint i = 0; i<delegatedSigner[_acctAddr].length; i++) {
            if(delegatedSigner[_acctAddr][i] == msg.sender) {
                return true;
            }
        }
        return false;
    }

    // Is address authorized to sign for the account address?  Used for delegate checks on external contracts.
    function isDevAuthorized(address _acctAddr, address _devAddr) external view returns(bool isIndeed) {
        if(_acctAddr == _devAddr) {
            return true;
        }
        for(uint i = 0; i<delegatedSigner[_acctAddr].length; i++) {
            if(delegatedSigner[_acctAddr][i] == _devAddr) {
                return true;
            }
        }
        return false;
    }
    
    // Add delegate signer for account 
    function addDelegate(address _acctAddr, address _deviceAddr) public returns(bool Success) {
        if(isAuthorized(_acctAddr) == true) {
            delegatedSigner[_acctAddr].push(_deviceAddr);
            return true;
        } else {
            revert('Msg.sender is not authorized on this account');
        }
    }
    
    // Remove delegate signer for account
    function removeDelegate(address _acctAddr, address _deviceAddr) public returns(bool Success) {
        if(isAuthorized(_acctAddr) == true) {
            uint delegateIndex;
            for(uint i = 0; i<delegatedSigner[_acctAddr].length; i++) {
                if(delegatedSigner[_acctAddr][i] == _deviceAddr) {
                    delegateIndex = i;
                }
            }
            uint delegateLength = delegatedSigner[_acctAddr].length;
            if (delegateLength > 1) {
                delegatedSigner[_acctAddr][delegateIndex] = delegatedSigner[_acctAddr][delegateLength-1];
            }
            delegatedSigner[_acctAddr].length--;
            return true;
        } else {
            revert('Msg.sender is not authorized on this account');
        }
    }
    
    // List delegate signers for account
    function listDelegates(address _acctAddr) public view returns(address[] memory) {
        address[] memory addrArray = delegatedSigner[_acctAddr];
        return addrArray;
    }
    
    function setUserName(address _acctAddr, string memory _userName) private {
        uint256 userNameHash = uint256(keccak256(bytes(_userName)));
        userNameOwner[userNameHash] = msg.sender;
        userPub[_acctAddr].userName = _userName;
    }
    
    // user initializes the public users structs to become active
    function initUserPub(address _acctAddr, string memory _naturalRightsId, string memory _userName) public returns(bool success) {
        if(isAuthorized(_acctAddr) == true) {
            if(isHavenUser(_naturalRightsId)) {
                if(isUserPub(_acctAddr)) {
                    revert ("User is already registered");
                } else {
                    uint256 userNameHash = uint256(keccak256(bytes(_userName)));
                    if(userNameOwner[userNameHash] != address(0)) {
                        revert ("Username already taken");
                    } else {
                        uint256 naturalRightsIdHash = uint256(keccak256(bytes(_naturalRightsId)));
                        if(naturalRightsOwner[naturalRightsIdHash] == _acctAddr) {
                            userPub[_acctAddr].naturalRightsId = _naturalRightsId;
                            userPub[_acctAddr].listPointer = userList.push(_acctAddr) - 1;
                            setUserName(_acctAddr, _userName);
                            return true;
                        } else {
                            revert("Natural Rights ID is not mapped to msg.sender");
                        }
                    }
                }
            } else {
                revert("Natural Rights account does not exist");
            }
        }
    }

    // user initializes the private users structs to become active
    function initUserPriv(string memory _naturalRightsId, string memory _cryptPubKey, string memory _encCryptPrivKey, string memory _encSignPrivKey) public returns(bool success) {
        if(isHavenUser(_naturalRightsId)) {
            if(isUserPub(msg.sender)) {
                userPriv[msg.sender].cryptPubKey = _cryptPubKey;
                userPriv[msg.sender].encCryptPrivKey = _encCryptPrivKey;
                userPriv[msg.sender].encSignPrivKey = _encSignPrivKey;
                userPriv[msg.sender].recordExists = true;
            } else {
                revert ("Loom account is not registered");
            }
        } else {
            revert("Natural Rights account does not exist");
        }
        return true;
    }

    function updateUserPriv(string memory _cryptPubKey, string memory _encCryptPrivKey, string memory _encSignPrivKey) public returns(bool success) {
        if(!isUserPub(msg.sender)) {
            revert('User does not exist');
        }
        userPriv[msg.sender].cryptPubKey = _cryptPubKey;
        userPriv[msg.sender].encCryptPrivKey = _encCryptPrivKey;
        userPriv[msg.sender].encSignPrivKey = _encSignPrivKey;
        return true;
    }

    function updateUserName(string memory _newUserName) public returns(bool success) {
        if(!isUserPub(msg.sender)) {
            revert('User does not exist');
        }
        uint256 userNameHash = uint256(keccak256(bytes(_newUserName)));
        if(userNameOwner[userNameHash] != address(0)) {
            revert ("Username already taken");
        } else {
        uint256 oldUserNameHash = uint256(keccak256(bytes(userPub[msg.sender].userName)));
        delete userNameOwner[oldUserNameHash];
        setUserName(msg.sender, _newUserName);
        return true;
        }
    }

    function initTransferUsername(address confirmAddr, string memory expectedUserName) public returns(bool success) {
        if(!isUserPub(msg.sender)) {
            revert('Initiating User does not exist');
        }
        if(!isUserPub(confirmAddr)) {
            revert('Confirming User does not exist');
        }
        if(keccak256(bytes(userPub[confirmAddr].userName)) == keccak256(bytes(expectedUserName))) {
            userNameTransferQueue[confirmAddr].initiator = msg.sender;
            userNameTransferQueue[confirmAddr].listPointer = userNameTransferList.push(confirmAddr) - 1;
        }
        return true;
    }

    function confirmTransferUsername(string memory expectedUserName) public returns(bool success) {
        address initiator = userNameTransferQueue[msg.sender].initiator;
        if(!isUserPub(initiator)) {
            revert('Initiating User does not exist');
        }
        if(!isUserPub(msg.sender)) {
            revert('Confirming User does not exist');
        }
        if(keccak256(bytes(userPub[initiator].userName)) == keccak256(bytes(expectedUserName))) {
            if(keccak256(bytes(userNameTransferQueue[msg.sender].initExpectedUserName)) == keccak256(bytes(userPub[msg.sender].userName))) {
                uint256 expectedUserNameHash = uint256(keccak256(bytes(expectedUserName)));
                uint256 confirmUserNameHash = uint256(keccak256(bytes(userPub[msg.sender].userName)));
                userNameOwner[expectedUserNameHash] = initiator;
                userNameOwner[confirmUserNameHash] = msg.sender;
                userPub[initiator].userName = userPub[msg.sender].userName;
                userPub[msg.sender].userName = expectedUserName;
                // Remove the userName transfer queue and row in list
                delete userNameTransferQueue[msg.sender];
                uint rowToDelete = userNameTransferQueue[msg.sender].listPointer;
                address keyToMove = userNameTransferList[userNameTransferList.length-1];
                userNameTransferList[rowToDelete] = keyToMove;
                userNameTransferQueue[keyToMove].listPointer = rowToDelete;
                userNameTransferList.length--;
                return true;
            } else {
                revert('Username mismatch: confirmer userName does not match initiators expected userName');
            }
        } else {
            revert('Username mismatch: confirmer expectedUserName does not match initiator userName ');
        }
    }

    // deletes the user from the userList and also deletes the userName. userPriv and NR account mapping left for recovery
    function deleteUser() public returns(bool success) {
        if(!isUserPub(msg.sender)) {
            revert('User does not exist');
        }
        uint rowToDelete = userPub[msg.sender].listPointer;
        address keyToMove = userList[userList.length-1];
        userList[rowToDelete] = keyToMove;
        userPub[keyToMove].listPointer = rowToDelete;
        userList.length--;
        uint256 userNameHash = uint256(keccak256(bytes(userPub[msg.sender].userName)));
        delete userNameOwner[userNameHash];
        delete userPub[msg.sender].userName; 
        return true;
    }

    // Used to recover the natural rights encrypted private keys
    function recoverUserPriv() public view returns(string memory, string memory, string memory) {
        if(!isUserPub(msg.sender)) {
            revert('User does not exist');
        }
        string memory cryptPubKey = userPriv[msg.sender].cryptPubKey;
        string memory encCryptPrivKey = userPriv[msg.sender].encCryptPrivKey;
        string memory encSignPrivKey = userPriv[msg.sender].encSignPrivKey;
        return (cryptPubKey, encCryptPrivKey, encSignPrivKey);
    }

    // Used to recover the user public identifiers
    function recoverUserPub() public view returns(string memory, string memory) {
        if(!isUserPub(msg.sender)) {
            revert('User does not exist');
        }
        string memory naturalRightsId =  userPub[msg.sender].naturalRightsId;
        string memory userName = userPub[msg.sender].userName;
        return (naturalRightsId, userName);
    }
    
    // Reactivate previously deleted user
    function restoreUser(string memory userName) public returns(bool success) {
        if(isUserPub(msg.sender)) {
            revert('User exists');
        }
        setUserName(msg.sender, userName);
        userPub[msg.sender].listPointer = userList.push(msg.sender) - 1;
        return true;
    }
}
