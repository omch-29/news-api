const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { PORT } = require('./config');
const route = require('./routes/newsRoute');

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/",route);

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));