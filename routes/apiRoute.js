const path = require('path');
const fs = require('fs')
const { v4: uuid } = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        const dbPath = path.resolve(__dirname, '../../db/db.json')
        const note = JSON.parse(fs.readFileSync(dbPath))
        res.json(note)
    });

    app.post('/api/notes', (req, res) => {
        const dbPath = path.resolve(__dirname, '../../db/db.json')
        const note = JSON.parse(fs.readFileSync(dbPath))
        req.body['id'] = uuid();
        note.push(req.body);
        fs.writeFileSync(dbPath, JSON.stringify(note));
        console.log('this it is!!', note);
        res.json(note);

    });

    app.delete('/api/notes/:id', (req, res) => {
        console.log('We hit the route');
        const dbPath = path.resolve(__dirname, '../../db/db.json')
        const note = JSON.parse(fs.readFileSync(dbPath))
        console.log('This is note', note);
        const deleteID = req.params.id;
        const newNote = []
        for (let i = 0; i < note.length; i++) {
            if (deleteID !== note[i].id) {
                newNote.push(note[i])
            }
        }
        fs.writeFileSync(dbPath, JSON.stringify(newNote))
        res.send('deleted')

    });

};