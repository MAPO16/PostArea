const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.post('/rest/area',  (req, res, ) => { 

   //Body
   var Id_Area = req.body;
   var Nombre_Area = req.body;
   var Id_Inmueble = req.body;
   var Estatus = req.body;
   
   //Mensaje para mostrar en consola
   

      //conexion
   connection.query('INSERT INTO Area SET ?', [Id_Area,Nombre_Area, Id_Inmueble,Estatus],
  (error, results) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(1046, function () {
 console.log('Node app is running on port 1046');

});