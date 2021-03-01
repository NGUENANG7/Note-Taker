const express = require('express');
const app = express();

const server = require('http').Server(app);

const PORT = process.env.PORT || 3030;
const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

server.listen(PORT, () => {});