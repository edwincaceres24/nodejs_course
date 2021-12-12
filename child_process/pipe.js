const { spawn } = require('child_process');

const cat = spawn('cat', [`${process.argv.slice(2)}`]);
const grep = spawn('grep', ['const']);

cat.stdout.pipe(grep.stdin);

grep.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});
