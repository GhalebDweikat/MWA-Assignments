const dns = require('dns');


dns.resolve4('www.mum.edu', (err, addresses) =>{
    console.log(addresses);
});