const mongoose = require('mongoose');
const validator = require('validator');
const { urlValidation } = require('../datadb/base');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальная длина имени 2 символа'],
    maxlength: [30, 'Максимальная длина имени 30 символов'],
    required: true,
  },
  about: {
    type: String,
    minlength: [2, 'Минимальная длина 2 символа'],
    maxlength: [30, 'Максимальная длина 30 символов'],
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (url) => validator.isURL(url, urlValidation),
      message: (props) => `${props.value} некорректная ссылка`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
