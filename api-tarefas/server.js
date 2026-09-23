const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('API de Tarefas no ar');
});

app.listen(3000);
