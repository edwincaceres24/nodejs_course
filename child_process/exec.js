const { exec } = require('child_process');

exec('find . -type f | wc -l', (err, stdout, stderr) => { //It uses a callback as second parameter
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
