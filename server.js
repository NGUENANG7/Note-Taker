const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3030;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.locals.notesData = require('./db/db.json');
app.use(express.static(path.join(__dirname, + '/public')));

require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, () =>
    console.log(`App listening on PORT: ${PORT}`));