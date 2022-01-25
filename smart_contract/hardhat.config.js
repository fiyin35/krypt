require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.4',
    networks: {
      ropsten: {
        url: 'https://eth-ropsten.alchemyapi.io/v2/L2cDm5oGi8W25ECMIYbobWx5bVo7N1gj',
        accounts: ['5f89598348f346c705c163002d8e92e219f799c9d45ff4e68afa4492ecfed93f']
      }

    }
}