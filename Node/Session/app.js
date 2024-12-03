const fs = require('fs'); 
const path = require('path'); 
const os = require('os');

function getSystemInfo() {
    return {
        platform: os.platform(),
        architecture: os.arch(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        uptime: (os.uptime() / 60).toFixed(2) + ' minutes',
    };
}

// Define file details
const fileName = 'system-info.txt';
const filePath = path.join(__dirname, fileName);

// Write system information to a file
fs.writeFile(filePath, JSON.stringify(getSystemInfo()), (err) => {
    if (err) console.error('Error writing to file:', err);
    else console.log(`System information saved to ${fileName}`);
});


// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World2!');
// }).listen(8080);
