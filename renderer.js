
// Setup jQuery
window.$ = window.jQuery = require('jquery');

// Setup socket.io-client
var io = require('socket.io-client');

// start game script
require('./assets/js/main.min.js')(io);
