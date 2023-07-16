//* 1. writeFile with fs => core module
const fs = require('fs');

const filename = 'myFile.txt';
const content = 'Hello World!';

const writeFile = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

writeFile()
  .then(() => console.log('File is written successfully.'))
  .catch((err) => console.error('An error occurred:', err));