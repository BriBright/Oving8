let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '../public')));

// The listen promise can be used to wait for the web server to start (for instance in your tests)
let appListen = new Promise((resolve, reject) => {
    app.listen(3000, (error) => {
    if (error) return reject(error.message);

console.log('Express server started');
resolve();
});
});
