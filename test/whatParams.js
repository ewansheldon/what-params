var Eth = require('web3-eth');

describe('what params', async () => {
    //
    // change these:
    const DATA = "0x5ca2fc530000000000000000000000002a450bbf694F0437911dcc73D96591Ee14e6B38600000000000000000000000000000000000000000000000000000000619d808000000000000000000000000000000000000000000001a784379d99db42000000000000000000000000000000000000000000000000000000000000000000016d0000000000000000000000000000000000000000000000000000000000000000";
    const ARG_TYPES = "address,uint256,uint256,uint16,uint16";
    //
    //

    it('gets the param values', async () => {
        const eth = await new Eth();
        const params = await eth.abi.decodeParameters(ARG_TYPES.split(','), DATA.substring(10));
        console.log(params);
    });
});