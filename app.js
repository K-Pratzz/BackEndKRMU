//const cities = require('./data/mydata');
//console.log(cities);

//import chalk from 'chalk';
//console.log(chalk.blue('Hello world!'));

// const os=require('os');
// const userInfo=os.userInfo();
// const platform=os.platform();
// const architecture=os.arch();
// const uptime=os.uptime();

// console.log('User Info:', userInfo);
// console.log('Platform:', platform);
// console.log('Architecture:', architecture);
// console.log('Uptime:', uptime, 'seconds');

// const fs = require('fs');
// fs.writeFileSync('data/mydata.txt', 'Hello, this is a sample text file.');
// fs.appendFileSync('data/mydata.txt', '\nThis is an appended line.');

// const path = require('path');
// const filePath = path.join(__dirname, 'data', 'mydata.txt'); //__dirname is a global variable that gives the current directory path
// console.log('File Path:', filePath);

// const process = require('process');
// console.log(process.argv);

// require('dotenv').config(); // config provides initial configuration from .env file it means that it will read the .env file and set the environment variables accordingly
// console.log('PORT:', process.env.PORT);

const http=require('http');
const server= http.createServer((req,res)=>{
  if (req.url==='/' ){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1 style="color: blue;">Hello from the home page</h1>');
    res.end();
  }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.write('<h1 style="color: red;">Page Not Found</h1>');
    res.end(); //this will end the response and send it to the client  and stops the cycle
  }
});
require('dotenv').config();
const Port=process.env.PORT || 3000;

server.listen(Port,()=>{
  console.log(`http://localhost:${Port}`);
});