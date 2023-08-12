const fs = require('fs');

// Asynchronous
fs.readFile('file.txt','utf-8',(err, data)=>{
    console.log(data)
})
const t1 = performance.now();

// Synchronous
const txt = fs.readFileSync('file2.txt','utf-8',)
console.log(txt)
const t2 = performance.now();

console.log(t2-t1) //time