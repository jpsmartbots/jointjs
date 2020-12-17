// change current directory to repo directory in local
// shellJs.cd('path/to/repo/folder');
// Repo name
const repo = 'jointjs';  //Repo name
// User name and password of your GitHub
const userName = 'jpsmartbots';
const password = 'Smartbots1!';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email
const simpleGit = require('simple-git')();
simpleGit.addConfig('user.email','jp@smartbots.ai');
simpleGit.addConfig('user.name','Jaya Prakash');
// Add remore repo url as origin to repo
const simpleGitPromise = require('simple-git/promise')();
// simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log('Added successfully '+addSuccess);
       }, (failedAdd) => {
          console.log('adding files failed');
    });
// Commit files as Initial Commit
 simpleGitPromise.commit('Intial commit by simplegit')
   .then(
      (successCommit) => {
        console.log('Successful commit'+ JSON.stringify(successCommit));
     }, (failed) => {
        console.log('failed commmit'+ JSON.stringify(failed));
 });

 // Finally push to online repository
  simpleGitPromise.push('origin','master')
     .then((success) => {
        console.log('repo successfully pushed'+ JSON.stringify(success));
     },(failed)=> {
        console.log('repo push failed');
  });
