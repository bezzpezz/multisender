// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiSender is Ownable {
    using SafeERC20 for IERC20;
    constructor() {}

    uint16 public arrayLimit = 200;

    event MultisendToken(uint256 total, address tokenAddress);
    event ClaimedToken(address token, address owner, uint256 balance);

    function batchSendERC20(
        address _token,
        address[] memory _targets,
        uint256[] memory _amounts
    ) public returns (bool success) {
        require(
            _targets.length == _amounts.length,
            "The length of params are not equal."
        );
        IERC20 token = IERC20(_token);
        uint256 total = 0;
        for (uint256 i = 0; i < _targets.length; i++) {
            token.safeTransferFrom(msg.sender, _targets[i], _amounts[i]);
            total += _amounts[i];
        }
        emit MultisendToken(total, _token);
        return true;
    }

    function checkSufficient(
        address _token,
        address[] memory _targets,
        uint256[] memory _amount
    ) public view returns (bool success) {
        IERC20 token = IERC20(_token);
        uint256 tokenBalance = token.balanceOf(msg.sender);

        for (uint256 j = 0; j < _targets.length; j++) {
            tokenBalance = tokenBalance - _amount[j];
        }
        return true;
    }

    function batchSendEther(
        address payable[] memory _targets,
        uint256[] memory _amounts
    ) public payable {
        require(
            _targets.length == _amounts.length,
            "The length of params are not equal."
        );

        uint256 total = 0;
        for (uint256 i = 0; i < _targets.length; i++) {
            total += _amounts[i];
        }
        require(msg.value >= total, "Insufficent fund");

        for (uint256 i = 0; i < _targets.length; i++) {
            (bool sent, ) = _targets[i].call{value: _amounts[i]}("");
            require(sent, "transfer eth failed");
            total += _amounts[i];
        }

        // emit MultisendToken(total, address(0));
    }

    function claimTokens(address _token) public onlyOwner {
        uint256 balance = 0x0;
        address _owner = this.owner();
        if (_token == address(0x0)) {
            balance = address(this).balance;
            (bool sent, ) = _owner.call{value: balance}("");
            require(sent, "transfer eth failed");
            emit ClaimedToken(address(0x0), _owner, balance);
            return;
        }

        IERC20 erc20token = IERC20(_token);
        balance = erc20token.balanceOf(address(this));
        erc20token.transfer(_owner, balance);
        emit ClaimedToken(_token, _owner, balance);
    }
}
