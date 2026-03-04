// importer le module express
var express = require('express');

// instancier le serveur express 
var server = express();

// definir les routes

server.get('/',function(req, res) {
    res.status(200).send('<h1> Hello welcome sur mon server</h1>');
})

//lancer le serveur
server.listen(8080, function(){
    console.log('Server is running');
})
