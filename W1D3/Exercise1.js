const dns = require('dns');
const {promisify} = require('util');

dns.resolve4('www.mum.edu', (err, addresses) =>{
    console.log(addresses);
});


const asyncResolve = promisify(dns.resolve4);

asyncResolve('www.mum.edu')
    .then((err, addresses) =>{
        console.log(addresses);
    }).catch((err) => { console.log(err)});
