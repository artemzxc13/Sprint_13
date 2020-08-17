const data = 'mongodb://localhost:27017/mestodb';
const PORT = '3000';
const HOST = 'http://localhost';
const db = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  connectTimeoutMS: 0,
};
const urlValidation = {
  protocols: ['http', 'https'],
  require_protocol: true,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: true,
  allow_trailing_dot: false,
};

module.exports = {
  urlValidation, db, data, PORT, HOST,
};
