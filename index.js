require('dotenv').config();
const express = require('express');
const favicon = require('serve-favicon');

const app = express();
const { PORT } = process.env;

app.use(express.static(`${__dirname}/dist`));

app.get('*', (request, response) =>
  response.sendFile(`${__dirname}/dist/index.html`)  
);

app.listen(PORT || 8080, () => {
  console.log(`Server listening on PORT ${PORT || 8080}`);
});
