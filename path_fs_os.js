const path = require('path');

console.log('Название файла: ', path.basename(__filename));
console.log('Имя директории: ', path.dirname(__filename));
console.log('Расширение файла: ', path.extname(__filename));


const fs = require('fs');

fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) {
        throw err
    }
    console.log("Folder created");
})

const filePath = path.join(__dirname, 'test', 'test.txt')

fs.writeFile(filePath, 'Hi', err => {
    if (err) {
        throw err
    }
    console.log("File created");
})

fs.appendFile(filePath, '\nHi again', err => {
    if (err) {
        throw err
    }
    console.log("Appended to file");
})

const os = require('os');

console.log('Os: ', os.platform())
console.log('Os: ', os.arch())
console.log('Os: ', os.cpus())