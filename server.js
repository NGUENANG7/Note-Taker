const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

server.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});