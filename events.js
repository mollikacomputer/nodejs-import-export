const events= require('events');
const eventEmitter= new events.EventEmitter();


// creating an event

const chitkarDibo=()=>{
    console.log('oi beta koi tui?? ami daraia asi!!');
}

// assign the handler into an event

eventEmitter.on('scream', chitkarDibo).chitkarDibo

eventEmitter.emit('scream')