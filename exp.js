// var express = require('express');
// var app = express();
// app.get('/home',function(req,res){
//     res.send('text response')
// })
// app.listen('8080') 

var express = require('express');
var app = express();
app.get('/user', (request, response) => {
    var user = {
        name: 'filan',
        surname: 'fisteku'
    };
    response.send('pershendetje ' + user.name + ' ' + user.surname);
});
app.listen('8080')