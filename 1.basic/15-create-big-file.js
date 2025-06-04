const {writeFileSync, readFileSync} = require('fs');
const events = require('events');
const eventemitter = new events.EventEmitter();


for(let i = 0; i < 10000; i++){
    writeFileSync('./content/bigText.txt', `Hello ${i} \n`, {flag: 'a'})
}


eventemitter.on('read', (path) => {
    const data = readFileSync(path, 'utf-8');
    console.log(data);
});

eventemitter.emit('read', './content/bigText.txt');