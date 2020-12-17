

require('simple-git')()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'https://github.com/jpsmartbots/jointjs')
     .push(['-u', 'origin', 'master'], () => console.log('done'));
