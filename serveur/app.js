require('./config/mongodb.config');

var express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var router = require('./routes/index.routes');


var app = express();



app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  exposedHeaders: ['Authorization'],
}));


app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Autorise toutes les origines, vous pouvez spécifier des domaines spécifiques au lieu de '*'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Méthodes HTTP autorisées
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // En-têtes autorisés
  next();
});

app.options('*', function (req, res) {
  res.sendStatus(200); // Répondre avec succès à la pré-requête CORS
});

// Définition de la route
app.use("/api",router);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})

module.exports = app;
