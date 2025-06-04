const { error } = require('console');
const {createReadStream} = require('fs');

 const stream = createReadStream('./content/bigText.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8'
});

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (error) => {
    console.log(error);
})