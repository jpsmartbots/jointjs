



require('simple-git')()
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'https://github.com/jpsmartbots/jointjs')
     .push('origin', 'master');
