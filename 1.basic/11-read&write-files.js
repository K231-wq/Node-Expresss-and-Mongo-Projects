const { readFile, writeFile, read } = require('fs');
console.log("Start!");
readFile('./content/text.txt', 'utf-8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);
    
    readFile('./content/seconds.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;

        writeFile('./content/newFile2.txt', `New Text : ${first} + ${second} \n`, {flag: 'a'}, (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Success");
        })
    });

})