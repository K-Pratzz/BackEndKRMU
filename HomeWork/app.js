
const express = require('express');
const app = express();
const userRouter = require('./router/userRouter');

app.use(express.json());
app.use('/users',userRouter);


app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});