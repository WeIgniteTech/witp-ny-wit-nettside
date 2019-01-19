// Jest doesn't understand ES6 without transpile.
// To help Jest running our test classes, we have to import them here with esmImport()
//
const esmImport = require('esm')(module);

// Define here the tests to be run by Jest
//-----------------------------------------

/*
 IMPORTANT: the test files MUST NOT be recognized as test-files by Jest
  that's why they are named with the suffix 'assert' and not 'test'
  run the teste form the command line with `npm test`
*/
const test_suite_1 = esmImport('./api-utils.assert');
const test_suite_2 = esmImport('./client-app-utils.assert');
