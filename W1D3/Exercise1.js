const dns = require('dns');
const {promisify} = require('util');

dns.resolve4('www.mum.edu', (err, addresses) =>{
    console.log(addresses);
});


const asyncResolve = promisify(dns.resolve4);

asyncResolve('www.mum.edu')
    .then((addresses) =>{
        console.log(addresses);
    }).catch((err) => { console.log(err); });


async function main(){
    try{
        console.log(await asyncResolve('www.mum.edu'));
    }
    catch(err){
        console.log(err);
    }
}

main();
console.log('done');
