var http = require('http');
var fs = require('fs');
var filename='exercise1.html';
var html= '<body background="https://static.wixstatic.com/media/22f716_f36904d8ba2b4101958150a6ce89792c~mv2.jpg/v1/fill/w_900,h_457,al_c,q_85/22f716_f36904d8ba2b4101958150a6ce89792c~mv2.jpg"><center><br><h1 style="color:green; font-family:Impact;font-size:40px"> Practice NodeJs</h1> <br><br><p style="font-size:25px ;font-family:Impact; font-style:bold">Hi! My name is Luzmibel Paculanang  from the Southermost Tip of Cebu, Santander.</p><hr style=" width:100%;height:5px; background-color:blue"><h2 style="color:#ff0066; font-size:40px; font-family:Impact"> <b>MOTTO IN LIFE</b></h2><br><br><p2 style="font-size:40px ;font-family:Impact; font-style:bold;color:green"> <b>No matter what the situation is</b>, <br><br><b> I HAVE A </b><br><br><b> CHOICE</b> </p2></center></body>';

fs.writeFile(filename, html,  (err)=> {
    if (err) throw err;
    console.log('Saved!');
  });


http.createServer((request, response) => {
    fs.readFile(filename, (error, data) => {
        response.writeHead('200', "{'Context-type': 'text/html'")
        response.write(data);
        response.end();

    });
}).listen(8080);