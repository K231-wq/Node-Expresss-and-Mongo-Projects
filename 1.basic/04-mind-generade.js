const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(data);
//         })
//     });
// };

const start = async () => {
    try{
        const first = await readFile('./content/text.txt');
        const second = await readFile('./content/seconds.txt');
        await writeFile('./content/result-readFile.txt',
            `This is amazing : ${first} + ${second} \n`,
            {flag: 'a'});
        console.log(first);
        console.log(second);

    }catch(error){
        console.log(error);
    }

}

start();