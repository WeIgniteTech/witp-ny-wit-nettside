import {sayHello} from './utils/client-app-utils.js'

/*
  This file contains code running in the browser.
  The main function is called as the web page is loaded.
 */

function main() {
    console.log("[INFO] main() function in client application is starting!");
    sayHello("World");

}

// Calling main on load
window.onload = main;
