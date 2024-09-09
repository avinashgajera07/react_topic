const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull', () => {
    console.log('Please turn of motor!');

    setTimeout(() => {
        console.log('Please turn of motor! Its is gentle remider');
    }, 3000);
});
myEmitter.emit('Waterfull');