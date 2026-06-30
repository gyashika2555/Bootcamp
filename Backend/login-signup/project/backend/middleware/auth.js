const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || 'acharya';

const auth = (req, res, next) => {
  const data = req.headers['authorization'];

  if (!data) {
    return res.status(401).send({ msg: 'No token provided' });
  }

  const token = data.split(' ')[1];

  if (!token) {
    return res.status(401).send({ msg: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, validate) => {
    if (err) {
      return res.status(401).send({ msg: 'Error while accessing', error: err.message });
    }
    if (validate) {
      req.user = validate;
      return next();
    }
    return res.status(401).send({ msg: 'user is not authorized' });
  });
};

module.exports = auth;
