const path = require("path");
const fs = require("fs");

    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/notes.html'));
    });

    router.get('/api/notes', (req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(notes);
    });

module.exports = router;