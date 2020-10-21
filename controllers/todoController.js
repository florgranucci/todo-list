var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

module.exports = app => {
   app.get('/todo', (req, res) => {
     res.render('todo', {todos: data});
   });

   app.post('/todo', urlencodeParser, (req, res) => {
     data.push(req.body);
     res.json({todos: data});
   });

   app.delete('/todo/:item', (req, res) => {
      data = data.filter(todo => {
         return todo.item.replace(/ /g, '-') !==req.params.item;
      });
      res.json({todos: data});
   });

 



};