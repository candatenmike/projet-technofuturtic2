var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var produitRouter = require('./routeur/produitrouteur');
var clientRouter = require('./routeur/clientrouteur');

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/produit', produitRouter);
app.use('/api/client', clientRouter);

app.listen(8000);