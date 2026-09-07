const express=require('express');
const app=express();
const morgan=require('morgan');
const notesRouter=require('./routes/nr.js');

app.use('/api',notesRouter);

//app.use(morgan("dev"));//this will log all the information about requests to the console in this format: [HTTP method] [URL] [status code] [response time] provides infor in short form
app.use(morgan("combined"));//this will log all the information about requests to the console in this format: [remote address] - [remote user] [date] "[HTTP method] [URL] [HTTP version]" [status code] [response time] "[referrer]" "[user agent]" provides infor in long form

app.get('/',(req,res)=>{
  res.send('Home page');
});

app.get('/about',(req,res)=>{
  res.send('About page');
});

app.use(express.urlencoded({extended:true})); //when nested format extended true else false {nam:{first: 'John', last: 'Doe'}} or {name: 'John Doe' } 

app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

