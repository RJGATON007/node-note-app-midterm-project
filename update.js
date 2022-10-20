const fs = require('fs')

const update = function(note, oldNote) {
    const newNote = JSON.parse(oldNote).map(function(n,i) {
        if(n.id == note.id) {