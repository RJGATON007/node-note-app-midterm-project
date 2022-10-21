const fs = require('fs');

const addNote = function(noteJson = [], newNote) {
    let note = JSON.parse(noteJson)
    note.push(newNote);

    fs.writeFileSync('Task.txt', JSON.stringify(note))
}

module.exports = addNote