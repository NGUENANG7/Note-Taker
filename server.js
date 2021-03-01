const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'./assets/css')));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});