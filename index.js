const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("DAMS backend")
})

app.get('/test',(req,res)=>{
    res.send("Test Route")
})

app.listen(4000)
