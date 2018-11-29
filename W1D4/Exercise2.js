const rxjs = require('rxjs');
const os = require('os');


const checkSystem = function(){
    console.log('Checking your system...');
    const obs = rxjs.Observable.create(o => {
        o.next(os.totalmem() > 4 * 1024 * 1024 * 1024);
        o.next(os.cpus().length > 2);
    });


    obs.subscribe(input => { console.log(input)});
}


checkSystem();