const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');



mongoose.connect('mongodb://127.0.0.1:27017/DemoContact');
mongoose.set('strictQuery', true);

const path = require('path');
const app = express();
const port = 80;


const contactSchema = new mongoose.Schema({
    email : String,
    pwd: String,
    // phone: String,
    // email: String
});  


const Contact = mongoose.model('contactUs', contactSchema);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static('static'));
app.use(express.urlencoded());


app.get('/', (req, res) =>{
    // const param = {}
    res.status(200).render('index.pug');
});


app.post('/contact', (req, res) =>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This items has been saved successfully");
        console.log('save!')
    }).catch(() =>{
        res.status(400).send("Items has not been saved")
    });
    // res.status(200).render('contact.pug');
});


app.listen(port,() =>{
    console.log(`application has been run successfully on port ${port}`);
});