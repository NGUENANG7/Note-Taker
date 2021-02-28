const express = require("express");

// Sets an initial port. We"ll use this later in our listener
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//this is the starting directory so that the CSS can be accessed
app.use(express.static("public"));


require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});