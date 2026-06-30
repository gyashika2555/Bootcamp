require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/UserRoutes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working');
});

app.use('/pages', routes);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running fine at ${PORT}`);
});
