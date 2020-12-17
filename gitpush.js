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
// simpleGit.addConfig('user.email','balvinder294@gmail.com');
// simpleGit.addConfig('user.name','Balvinder Singh');
// Add remore repo url as origin to repo
const simpleGitPromise = require('simple-git/promise')();
simpleGitPromise.addRemote('main',gitHubUrl);
// Add all files for commit
  simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log(addSuccess);
       }, (failedAdd) => {
          console.log('adding files failed');
    });
// Commit files as Initial Commit
 simpleGitPromise.commit('Intial commit by simplegit')
   .then(
      (successCommit) => {
        console.log(successCommit);
     }, (failed) => {
        console.log('failed commmit');
 });
// Finally push to online repository
 simpleGitPromise.push('origin','main')
    .then((success) => {
       console.log('repo successfully pushed');
    },(failed)=> {
       console.log('repo push failed');
 });
