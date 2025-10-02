const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

for (let index = 1; index < 10; index++) {
    const filename = `log${index}.txt`;
    fs.writeFileSync(filename, `This is a log file ${index}.txt`);
    console.log(`${filename}`);
}