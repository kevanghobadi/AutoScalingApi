
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

app.get('/', function(req, res){
    setTimeout((function() {res.send("Hello World")}), 2000);
})

app.listen(port, function(){
console.log('Server listening on ', port);
})
