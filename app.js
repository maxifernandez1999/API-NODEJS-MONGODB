require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { dbConnect } = require('./config/mongo');

dbConnect();

app.use(require('./app/routes'));

app.listen(PORT, () => {
  console.log(`The server started on port ${PORT} !!!!!!`);
});



