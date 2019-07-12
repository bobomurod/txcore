console.log("Bismillah")

const express = require('express');

const test_middleware = require('./middlewares/test_midlleware')

const app = express();
app.use(express.json())
app.use(test_middleware)
app.get("/", (req,res,next)=>{
    res.json({
        message: "index"
    })
})

app.listen(3333, ()=>{
    console.log("Listening on 3333");
})