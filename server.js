var express = require('express');
var app = express();

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/assets',express.static('assets'));
app.get('/',function(req,res){
    res.render('index')
});

app.get('/contact',function(req,res){
    res.render('contact')
});

app.get('/profile',function(req,res){
    res.render('profile')
});
app.get('/about',function(req,res){
    res.render('about')
});
app.get('/about',function(req,res){
    res.render('about')
});


// app.get('/in',function(req,res){
//     res.sendFile(__dirname + '/in.html');
// });

// app.get('/profile',function(req,res){
//     res.sendFile('profile');
// });

app.listen(3000,function(){
    console.log('connected');
})