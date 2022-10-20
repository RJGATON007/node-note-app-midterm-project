const add = require('./add')
const read = require('./read')
const write = require('./write')
const update = require('./update')
const present = require('./present')
const del = require('./del')

const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
  
    note = { 
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    var oldNote = read()
    add(note, oldNote)
}

if(cmd[2] == 'read') {
    present(read())
}

if(cmd[2]==="delete"){
    const id=cmd[3]
    const oldNote=read()
    const del=require('./del')
  
    del(id,oldNote)
    console.log(read())
  }
  
  if(cmd[2] == 'update') {
      const note = {
          id: cmd[3],
          title: cmd[4],
          body: cmd[5] 
      }
  
      const oldNote = read()
  
      update(note, oldNote)
  
      present(read())
  }