const express = require('express');
const bodyParser = require('body-parser');

const legendsRoutes = require('./routes/legends');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/legends', legendsRoutes);


app.use((req, res, next) => { res.status(404).json({ message: 'Page not found' }); });
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || 'Server error';
  const data = error.data || ' ';
  res.status(status).json({ message: message, data: data });
});


app.listen(8082)
