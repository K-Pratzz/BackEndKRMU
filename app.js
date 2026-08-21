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

// const http=require('http');
// const server= http.createServer((req,res)=>{
//   if (req.url==='/' ){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<h1 style="color: blue;">Hello from the home page</h1>');
//     res.end();
//   }else{
//     res.writeHead(404,{'Content-Type':'text/html'});
//     res.write('<h1 style="color: red;">Page Not Found</h1>');
//     res.end(); //this will end the response and send it to the client  and stops the cycle
//   }
// });
// require('dotenv').config();
// const Port=process.env.PORT || 3000;

// server.listen(Port,()=>{
//   console.log(`http://localhost:${Port}`);
// });

// const express = require('express');
// const app = express();

// app.use(express.urlencoded()); //when we submit a form, the data is sent in the request body. This middleware parses the incoming request body and makes it available under req.body

// app.get('/', (req, res) => {
//   res.send(`
//     <h1 style="color: blue;">Hello from the home page</h1>
//     <form action="/submit" method="POST">
//       <input type="text" name="name" placeholder="Enter your name" required>
//       <input type="submit" value="Submit">
//     </form>
//   `);
// });

// app.post('/submit', (req, res) => {
//   console.log(req.body); 
//   res.send(`Data submitted successfully! Welcome, ${req.body.name}`);
// });

// app.listen(4000, () => {
//   console.log(`Server is running on http://localhost:4000`);

// const express = require('express');
// const app = express();
// const packages = require('./data/tour.js');

// app.get('/packages', (req, res) => {
//   const des = req.query.des;
//   console.log('Destination query parameter:', des); // Log the value of the 'des' query parameter
//   if (des) {
//     const filteredPackages = packages.filter(pkg => pkg.destination.toLowerCase() === des.toLowerCase());
//     res.json(filteredPackages);
//   }
//   res.json(packages);
// });

// app.get('/packages/1', (req, res) => {
//   res.send('This is the package with ID 1');
// });

// app.get('/packages/:id', (req, res) => {
//   const id = req.params.id; //for example, if the request is /packages/1, then id will be '1'
//   const package = packages.find(pkg => pkg.id === parseInt(id)); //selects the first apperarance only
//   if (package) {
//     res.json(package);
//   } else {
//     res.status(404).json({ message: 'Package not found' });
//   }   
// });


// app.listen(4000, () => {
//   console.log(`Server is running on http://localhost:4000`);
// });


const express = require('express');
const app = express();
const tourRouter = require('./router/tourRouter');

app.use(express.json());

app.use('/tours', tourRouter);
app.use('/users',userRouter);


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});