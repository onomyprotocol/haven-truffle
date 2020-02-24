pragma solidity ^0.5.3;

// import "@openzeppelin/contracts/ownership/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/ownership/Ownable.sol";

contract AcctCont {
    function isDevAuthorized(address, address) public returns (bool) {}
}

contract ERC20Token {
  function allowance(address, address) public view returns (uint256);
  function balanceOf(address) public view returns (uint256);
  function transferFrom(address, address, uint) public returns (bool);
}

contract WalletContract is Ownable {

    AcctCont ac; // Haven Account Contract (ac)
    ERC20Token kc; // Kudos contract (kc)
    uint256 contKudosBal; // Kudos held by contract
    
    // The address of the Natural Rights Server Testing
    address public naturalRightsAddress;

    // The address of the Account Contract
    address public accountContractAddress;
    
    // The address of the Kudos Contract
    address public kudosContractAddress;

    /// @dev Access modifier for NR-only functionality
    modifier onlyNR() {
        require(msg.sender == naturalRightsAddress);
        _;
    }

    struct walletStruct {
        uint256 kudosBalance; // Kudos balance
    }

    mapping (address => walletStruct) wallet; // natural rights Haven ID hash to public identifiers

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
    
    // Only contract owner may change Kudos Contract Address
    function addKudosContract(address _newKudosContAddr) public onlyOwner returns(bool success) {
        require(_newKudosContAddr != address(0));
        kc = ERC20Token(_newKudosContAddr);
        return true;
    }

    // Is msg.sender authorized to sign for the account?
    function isDevAuthorized(address _acctAddr) public returns(bool isIndeed) {
        return ac.isDevAuthorized(_acctAddr, msg.sender);
    }
    
    //
    function newWallet(address _acctAddr) public onlyNR returns(bool success) {
        wallet[_acctAddr] = walletStruct(0);
        return true;
    }
    
    // haven initializes the wallet structs to become active
    function addKudos(address _acctAddr, uint256 value) public returns(bool success) {
        require(isDevAuthorized(_acctAddr), "msg.sender not authorized for account");
        require(kc.balanceOf(_acctAddr) >= value, "not enough tokens in sender's balance");
        require(kc.allowance(_acctAddr, address(this)) >= value, "sender has not enough allowance");
        
        kc.transferFrom(_acctAddr, address(this), value);
        
        wallet[_acctAddr].kudosBalance += value;
        contKudosBal += value;
        return true;
    }
    
    function getContractBalance() public view returns(uint256 value) {
        return contKudosBal;
    }
}
