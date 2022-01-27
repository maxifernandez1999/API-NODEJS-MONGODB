require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { dbConnect } = require('./config/mongo')

dbConnect();
app.use(require('./app/routes'))
app.listen(PORT, () => {
  console.log(`The server started on port ${PORT} !!!!!!`);
});
// siempre va req como primer parametro
// app.use(require('./app/routes/user'));



const bcrypt = require('bcryptjs');

const encrypt = async (passwordText) => {
  const hash = await bcrypt.hash(passwordText,10);
  return hash;
}

const compare = async (passwordText, hashPassword) => {
  return await bcrypt.compare(passwordText, hashPassword);
}

