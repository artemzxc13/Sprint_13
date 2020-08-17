const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');
const {
  db, data, PORT, HOST,
} = require('./datadb/base');

const app = express();
app.use((req, res, next) => {
  req.user = {
    _id: '5f392d78263716344890606a', // новый пользователь.
  };
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(data, db)
  .then(() => console.log('Соединение с БД установлено:', colors.yellow(data)))
  .catch((err) => console.log('Ошибка соединения с БД:', err.message));

app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Веб сервер работает по адресу: ${(colors.blue(HOST))}:${colors.green(PORT)}`);
});
