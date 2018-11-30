const rxjs = require('rxjs');
const os = require('os');


const checkSystem = function(){
    console.log('Checking your system...');
    const obs = rxjs.Observable.create(o => {
        var success = 0;

        if(os.totalmem() < 4 * 1024 * 1024 * 1024)
        {
            o.error('The system needs at least 4GB of memory');
        }
        else
            success++;

        if(os.cpus().length < 2)
        {
            o.error('The system needs at least 2 cores');
        }
        else
            success++;

        if(success > 1)
            o.next('System check complete!');
        //o.next(os.totalmem() > 4 * 1024 * 1024 * 1024);
        //o.next(os.cpus().length > 2);
    });


    obs.subscribe(input => { console.log(input)}, err => { console.log(err) });
}


checkSystem();