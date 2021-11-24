const express = require("express");

//Loads the ejs template engine
const ejs = require('ejs');


const app = express();




// main folder for site files
app.use(express.static('public'));

app.set('view engine', 'ejs');

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));


// page settings
app.get('/', (req, res) => {
    
    res.render('pages/index');
    });


// server port
var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});