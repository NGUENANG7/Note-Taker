const path = require("path");
const fs = require("fs");

    router.get('/', (_req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

    router.get('/notes', (_req, res) => {
        res.sendFile(path.join(__dirname, 'public/notes.html'));
    });

    router.get('/api/notes', (_req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(notes);
    });

module.exports = router;