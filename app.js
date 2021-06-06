// const area = require("./circle");

// console.log(area(4));

// const fs = require('fs');

// let text = fs.readFileSync('./files/input.txt', 'utf-8');
// console.log(text); 

// let outputText = `Output Text: ${text}`; 

// fs.writeFileSync('./files/output.txt', outputText); 

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('event1', () => {        // emitter.on() ---> defines an event
//     console.log('Event 1 Called!')
// })

// emitter.emit('event1')          // emitter.emit() ---> calls an event

const MyEvent = require('./myEvent'); 

const myEvent = new MyEvent(); 

myEvent.on('event1', () => {
    console.log("Event-1 under MyEvent Called!")
})

myEvent.function1();
myEvent.function2();