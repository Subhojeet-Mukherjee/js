const EventEmitter = require('events');

const myEmitter = new EventEmitter();

//attach an event listener

const listener = ()=> {
    console.log(`The start event has been triggered! `);
}

myEmitter.on('start', listener);

//emit
myEmitter.emit('start');

myEmitter.removeListener('start', listener);

myEmitter.emit('start');

// console.log(myEmitter.listeners('start'));