const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const PORT = process.env.PORT || 8000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets up the Express app to find the public folder
app.use(express.static('public'));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

server.listen(PORT, () => {});