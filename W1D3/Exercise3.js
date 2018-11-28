const EventEmitter = require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
        setInterval(()=>{this.emit('go');}, 1000);
    }
}


const gm = new Gym();
gm.on('go', ()={
    console.log("The Athlete is Working Out!");
});
    