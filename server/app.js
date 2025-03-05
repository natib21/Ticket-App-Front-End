const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoute')
const ticketRouter = require('./routes/ticketRoute')
const cors = require('cors');
const AppError = require('./utils/AppError');
const globalErrorHandler = require("./controller/errorController")
dotenv.config({ path: './config.env' });

const app = express()
app.use(cors())
app.use(express.json());


app.use('/api/user',userRouter)
app.use('/api/ticket',ticketRouter)

app.all('*',(req,res,next)=>{
  next(new AppError(`Can't find ${req.originalUrl} on the Server`,404))
})

app.use(globalErrorHandler)


const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  
  mongoose.connect(DB)
  .then(() => {
      console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
      console.error('MongoDB connection error:', err);
      process.exit(1); 
  });
  
const port =process.env.PORT || 3000;

app.listen(port , ()=>{
  console.log(`The Server Run On Port ${port}`)
})
