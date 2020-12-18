const exec = require('child_process').exec;
const child = exec('git add . ; git commit -m "from script"; git push "https://jpsmartbots@github.com/jpsmartbots/jointjs.git/"',
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});
