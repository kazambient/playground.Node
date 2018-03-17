const must = require('mustache');
const fs = require('fs');


var text = 'this is some text: {{text}} {{> testinc}} something';
var file = fs.readFileSync('test.txt');
// var include = fs.readFileSync('testinc.txt')
var data = {
    'text':'Hello World!',
    'name':'Kaz'};
function partials(arg){
    var part = arg += '.txt';
    var t = fs.readFileSync(part).toString();
    return t;
}
console.log(must.render(text,data,partials));
console.log(must.render(file.toString(),data,partials));
