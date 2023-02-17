const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());

//middleware 1
// app.use(function(req, res, next){
//     req.myName = 'Ashish'
//     // console.log('middleware 1 called');
//     next();
// });

// //middleware 2
// app.use(function(req, res, next){
//     console.log('from middleware 2 :', req.myName);
   
//     // console.log('middleware 2 called');
//     next();
// });

var contactList = [
    {
        name: 'Ashish',
        phone: '7258860749'
    },
    {
        name: 'Akanksha',
        phone: '9122415882'
    },
    {
        name: 'monu',
        phone: '7491952136'
    }
]

app.get('/', function(req, res){
    return res.render('home', {
        title: 'My Contact List',
        contact_list: contactList
    });  
});

app.get('/practice', function(req, res){
    return res.render('practice',{
        title: 'play with ejs'
    });

});

app.post('/create-contact', function(req, res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    // req.myName = 'Akanksha'
    // console.log('from post middleware /create-contact: ', req.myName);

    contactList.push(req.body);

    return res.redirect('/');
});

app.listen(port, function(err){
    if(err){
        console.log('error in running the server', err);
        return;
    }

    console.log('Yup!My Express server is running on port: ', port);
});