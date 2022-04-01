//this is basic commands
// console.log("Hello Aryan");
// let a = 20;
// let b = 30;
// let c = a+b;
// console.log(c);



//this is basic api
// const http = require('http');
// const data = require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);





//below opeartions related to files crud methodology
// const fs = require("fs")
// const path = require("path");
// const dirPath = path.join(__dirname,"files-operations");
// const filePath = `${dirPath}/test.txt`;
// fs.writeFileSync(filePath,"this is test file");
// fs.readFile(filePath, "utf8",(err, data) => {
//     console.log(data);
// });
// fs.appendFile(filePath," and created by aryan",(err)=>{
//     if(!err) console.log("file is updated");
// });
// fs.unlinkSync(filePath);
// for (i = 1; i <= 5; i++) {
//     fs.writeFileSync(dirPath+`/file${i}.txt`,`this is file ${i}`); 
// }
// fs.readdir(dirPath,(err, data)=>{
//     console.log(data);
// })
// fs.readdir(dirPath,(err, data)=>{
//     data.forEach((item)=>{
//         console.log(item);
//     })
// })



//how to setup ejs (template engine)
const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const user = {
        name: 'Aryan Biswari',
        email: 'aryanbiswari14@gmail.com',
        city: 'gwalior'
    }
    res.render('index.ejs',{user});
})

app.get('/profile', (req, res) => {
    res.render('profile');
})


app.listen(5000);