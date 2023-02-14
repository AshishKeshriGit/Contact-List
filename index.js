const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    // console.log(req);
    // res.send('<h1>cool, it is running! or is it?</h1>');
    return res.render('home');
    
});

app.listen(port, function(err){
    if(err){
        console.log('error in running the server', err);
        return;
    }

    console.log('Yup!My Express server is running on port: ', port);
});