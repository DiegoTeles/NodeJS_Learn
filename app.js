var express = require('express');

var app = express();
var port = 3000;
app.set('view engine', 'ejs');

app.get('/contato', function(req, res) {
    res.render('site/contato');
});


app.get('/', function(req, res) {
    res.render('site/index');
});

app.listen(port, function() {
    console.log(`API rodando na porta ${port}`);
})