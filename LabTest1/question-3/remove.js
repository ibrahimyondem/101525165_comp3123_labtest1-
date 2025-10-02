const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'logs');

if (fs.existsSync(logsDirectory)) {
    const files = fs.readdirSync(logsDirectory);
    files.forEach(file => {
        console.log(`deleteting files... ${file}`);
        fs.unlinkSync(path.join(logsDirectory, file));
    });

    fs.rmdirSync(logsDirectory);
    console.log('Logs directory removed successfully.');
} else {
    console.log('Logs directory does not exist.');
}