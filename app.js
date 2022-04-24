const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));

// =====================================Code Starts Here=====================

var email,pass;

app.route('/')
            .get(function(req,res){
                res.render("index")
            })
            .post(function(req,res){
                email = req.body.loginemail;
                password = req.body.loginpassword;

                res.redirect('/dashboard');
            });

app.route('/dashboard')
            .get(function(req,res){
                res.render('dashboard',{Email:email,Pass:pass});
            });

app.listen(process.env.PORT||3000,function(){
    console.log("Server started on port 3000");
});