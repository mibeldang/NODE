// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

//import event module
// var events=require('events');
// //create new instance of emitter
// var eventEmitter = new events.EventEmitter();

// //creatd a listener for event scream
// eventEmitter.on('scream', ()=>{
//     console.log("Scream event");
// });


// eventEmitter.on('talk', ()=>{
//     console.log("Talking to you")
// });

// eventEmitter.on('shout', ()=>{
//     console.log("Shout out to my enemy!!!")
// })

// //provoke the event

// eventEmitter.emit('scream');
// eventEmitter.emit('talk');
// eventEmitter.emit('shout');



var http = require('http');
var fs = require('fs');

var filename = 'index.html';

http.createServer((request, response) => {
    fs.readFile(filename, (error, data) => {
        response.writeHead('200', "{'Context-type': 'text/html'")
        response.write(data);
        response.end();


    });
}).listen(8080);