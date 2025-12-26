const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// Simulate an error event
myEmitter.emit('error', new Error('Something went wrong!'));
