const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3030;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets up the Express app to find the public folder
app.use(express.static('public'));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});