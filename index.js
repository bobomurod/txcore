console.log("Bismillah")

const express = require('express');
const mongoose = require('mongoose');
const test_middleware = require('./middlewares/test_midlleware');

const app = express();
app.use(express.json());
app.use(test_middleware);
app.get("/", (req,res,next)=>{
    res.json({
        message: "index"
    })
})

app.listen(3333, ()=>{
    console.log( "\x1b[44m%s\x1b[0m" , "Server runnin on 3333" );
})


//connect to mongoose

mongoose.connect('mongodb://localhost/txcore', {useNewUrlParser: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connected to db")
})

var testSchema = mongoose.Schema({
    name: String
})

var Test = mongoose.model('test123', testSchema)

var newtest = new Test({
    name: 'hello'
})

newtest.save(function(err, newtest){
    if (err) return console.error(err);
    console.log(newtest)
})