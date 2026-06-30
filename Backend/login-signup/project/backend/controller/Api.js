const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRound = 10;
const secretKey = process.env.JWT_SECRET || 'acharya';

let arr = []; // in-memory database

const register = (req, res) => {
  const data = req.body;

  if (!data || !data.email || !data.password) {
    return res.status(400).send({ msg: 'Email and password are required' });
  }

  const account = arr.find((item) => item.email === data.email);
  if (account) {
    return res.status(409).send({ msg: 'This email already exists' });
  }

  const newUser = {
    name: data.name || '',
    email: data.email,
    password: bcrypt.hashSync(data.password, saltRound),
  };

  arr.push(newUser);

  const token = jwt.sign({ user: newUser.email }, secretKey, { expiresIn: '365d' });

  res.send({ msg: 'User registered successfully', token, user: { name: newUser.name, email: newUser.email } });
};

const login = async (req, res) => {
  const data = req.body;

  if (!data || !data.email || !data.password) {
    return res.status(400).send({ msg: 'Email and password are required' });
  }

  const account = arr.find((item) => item.email === data.email);

  if (!account) {
    return res.status(404).send({ msg: 'User is not registered' });
  }

  const isMatch = await bcrypt.compare(data.password, account.password);

  if (!isMatch) {
    return res.status(401).send({ msg: 'Password is incorrect' });
  }

  const token = jwt.sign({ user: account.email }, secretKey, { expiresIn: '365d' });
  res.send({ msg: 'User logged in successfully', token, user: { name: account.name, email: account.email } });
};

const home = (req, res) => {
  res.send({ message: 'This is Home page' });
};

const dashboard = (req, res) => {
  const account = arr.find((item) => item.email === req.user.user);
  res.send({ msg: 'Welcome to Dashboard', user: account ? { name: account.name, email: account.email } : null });
};

module.exports = { login, register, home, dashboard };
