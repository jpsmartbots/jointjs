

let x = require('simple-git')()
     .add('.')
     .commit("first commit!")
     .addRemote('origin', 'https://jpsmartbots@github.com/jpsmartbots/jointjs')
     .push(['-u', 'origin', 'master'], () => console.log('done'));
console.log('X='+ x);
