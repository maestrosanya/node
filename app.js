var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {title: 'Главная'});
});
app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send('Страница About');
});

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Страница не найдена');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
});

app.listen( app.get('port'), function () {
    console.log( 'Ура, заработало на http://localhost:'+ app.get('port') );
} );