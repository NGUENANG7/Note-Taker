const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const router = express.Router();
const express = require("express");

router.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const noteID = Object.assign(req.body, { id: `${uuidv4()}` });
    notes.push(noteID);
    const stringNote = JSON.stringify(notes);
    fs.writeFileSync('./db/db.json', stringNote);
    res.json(notes);
});

router.delete('/api/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const noteID = req.params.id;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteID) {
            notes.splice(i, 1);
            const newNotes = JSON.stringify(notes);
            fs.writeFileSync('./db/db.json', newNotes);
            return res.json(notes);
        }
    }
});

module.exports = router;