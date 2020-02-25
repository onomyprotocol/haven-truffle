pragma solidity ^0.6.3;

// import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Kudos is ERC20 {
    // Transfer Gateway contract address
    // address public gateway;

    string public name = "KudosToken";
    string public symbol = "KDST";
    uint8 public decimals = 18;

    // one billion in initial supply
    uint256 public constant INITIAL_SUPPLY = 500000000;

    constructor () public {
        uint256 totalSupply = INITIAL_SUPPLY * (10 ** uint256(decimals));
        _mint(msg.sender, totalSupply);
    }

    /**
    constructor (address _gateway) public {
        gateway = _gateway;
    }
    */

    // Used by the DAppChain Gateway to mint tokens that have been deposited to the Ethereum Gateway
    /**
    function mintToGateway(uint256 _amount) public {
        require(msg.sender == gateway, "only the gateway is allowed to mint");
        _mint(gateway, _amount);
    }
    */
}
