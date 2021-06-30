var express = require('express');
var routeur = express.Router();
var controlleur = require('../controlleur/produitcontrolleur');

routeur.get('/',controlleur.getall);
routeur.get('/id/:id',controlleur.getone);

module.exports = routeur;