const EventEmitter = require('events');

class MyEvent extends EventEmitter {
    function1 = () => {
        this.emit('event1');
    }

    function2 = () => {
        this.on('event2', () => {
            console.log("Event-2 in function2 Called!") 
        });
        this.emit('event2');
    }
}

module.exports = MyEvent; 