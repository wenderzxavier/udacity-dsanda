const fs = require('fs');
const path = require('path');

const readFromFile = (fileName) =>
    fs.readFileSync(path.join(__dirname, fileName), 'utf-8');

module.exports = {
    readFromFile
};
