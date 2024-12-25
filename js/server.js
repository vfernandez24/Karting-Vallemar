const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost', // Cambia a tu host de la base de datos
  user: 'root', // Cambia al usuario de tu base de datos
  password: '', // Cambia a la contraseña de tu base de datos
  database: 'reservas_db' // Cambia al nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

// Middleware para manejar datos enviados por el formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para procesar el formulario de reserva
app.post('/reservar', (req, res) => {
  const { nombre, email, fecha, hora, personas } = req.body;

  const query = 'INSERT INTO reservas (nombre, email, fecha, hora, personas) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [nombre, email, fecha, hora, personas], (err, results) => {
    if (err) {
      console.error('Error al guardar la reserva:', err);
      res.status(500).send('Error al guardar la reserva.');
      return;
    }
    res.send('Reserva guardada con éxito.');
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
