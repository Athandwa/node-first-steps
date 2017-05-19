const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgBlue.black(greet('Hi Xola'));
console.log(styledMessage)

var figlet = require('figlet');

figlet('Hi Xola', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
