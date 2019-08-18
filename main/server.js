var http = require("http");
// requires the http module that ships with Node.js and makes it accessible through the var http.
var fs = require('fs');
var portnum = 8080;

var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', (err, file) => {
        response.end(file);
    })
})
server.listen(portnum);
console.log('Server running at http://localhost:' + portnum + '/');
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     fs.readFile('./index.html', (err, file) => {
//         response.end(file);
//     });
//     //response.write("Hello World \nI am Andrew!");
//     //response.end;
// }).listen(8080);
