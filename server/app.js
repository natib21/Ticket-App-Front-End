const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoute')
const ticketRouter = require('./routes/ticketRoute')
dotenv.config({ path: './config.env' });

const app = express()

app.use(express.json());



app.use('api/user',userRouter)
app.use('api/ticket',ticketRouter)

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
      process.exit(1); // Exit the process if MongoDB connection fails
  });
  
const port =process.env.PORT || 3000;

app.listen(port , ()=>{
  console.log(`The Server Run On Port ${port}`)
})
