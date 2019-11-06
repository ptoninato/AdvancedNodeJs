//errors passed to callbakc function as first arg.

var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile);

writeFile('sample.txt', 'This is a sample')
    .then(() => console.log('file created'))
    .catch((error) => console.log('error creating file'));


// var delay = (seconds, callback) => {
//     if (seconds > 3) {
//         throw new Error(`${seconds} too long`)
//     } else {
//         setTimeout(() =>
//             callback(null, `the ${seconds} second delay is over`), seconds
//         );
//     }
// }

// var promiseDelay = promisify(delay);

// promiseDelay(5)
//     .then(console.log())
//     .catch((error) => console.log(`error: ${error.message}`));