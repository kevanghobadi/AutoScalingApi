
var crypto = require('crypto');

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

app.get('/', function(req, res){
    var hash = crypto.createHash('sha256').update("TodayIsTheDayThatWeHashThisPasswordUsingARestAPI").digest('base64');
     res.send(hash)
})

app.listen(port, function(){
console.log('Server listening on ', port);
})
