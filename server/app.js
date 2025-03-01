const express = require('express');

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ 
        success: true,
        message: "You Got It"
    });
})




const port = 3000;

app.listen(port , ()=>{
  console.log(`The Server Run On Port ${port}`)
})
