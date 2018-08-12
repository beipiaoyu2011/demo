const fs = require('fs')
const path = require('path')
const file = 'package.json';
fs.access(file, fs.constants.F_OK, err => {
    console.log(`${file} ${err ? '不存在' : '存在'}`);
})

const file2 = path.resolve(__dirname, '../tmp/world.txt');

fs.access(file2, fs.constants.F_OK | fs.constants.W_OK, err => {
    if (err) {
        console.error(`${file2} ${err.code == 'ENOENT' ? '不存在' : '只可读'}`)
    } else {
        console.log(`${file2} 存在且可写`);

    }
})
fs.open(file2, 'r', (err, fd) => {
    if (err) {
        if (err.code == 'ENOENT') {
            console.error('文件不存在');
            return;
        }
        throw err;
    }
    fs.fstat(fd, (err,stat) => {
        if(err) throw err;
        console.log(stat);
    })
})

fs.readFile(file2, 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data);
    
})