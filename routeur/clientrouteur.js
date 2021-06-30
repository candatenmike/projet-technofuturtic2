var express = require('express');
var routeur = express.Router();
var controlleur = require('../controlleur/clientcontrolleur');

routeur.get('/',controlleur.getall);
routeur.get('/id/:id',controlleur.getone);

module.exports = routeur;