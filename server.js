const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets up the Express app to find the public folder
app.use(express.static(path.join(__dirname,'./assets/css')));
app.use(express.static(__dirname));


require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});