const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

//Environment variables config
dotenv.config();

//helmet implementation ---> Used to set mutiple headers
app.use(helmet());

//cors
app.use(
  cors({
    origin: "*",
  })
);

//File Imports
const { PORT } = require("./keys");
const { db } = require("./config");

//DB Connection
db();

//Register routes

//Error handler

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}/`);
});
