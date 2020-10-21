var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Set up template engine
app.set('view engine', 'ejs');
//Handle static files
app.use(express.static('./public'));

//Fire controlle 
todoController(app);

//Listen to port
app.listen(3000, () => {
    console.log("Port is running");
});