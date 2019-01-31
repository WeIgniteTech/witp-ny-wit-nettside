// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module/*, options*/);
module.exports = require("./app.js");
console.log('Entry file index.js is loaded and ESM is enabled.');
console.log('You can now safely use ES6 features in the code of your node application.');
console.log('---');