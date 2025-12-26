const EventEmitter = require('events');

class MyEvents extends EventEmitter {
    sendMessage(message) {
        console.log(`Sending message: ${message}`);
        this.emit('messageReceived', message);
    }
}

const myEvents = new MyEvents();

myEvents.on('messageReceived', (msg) => {
    console.log(`Message received: ${msg}`);
});

//trigger the event
myEvents.sendMessage('Hello, World!');