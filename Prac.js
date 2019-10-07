var http=require('http');
var fs =require('fs');
var filename ='prac.html';
var html='<body background=" https://img.freepik.com/free-photo/green-texture_1160-888.jpg?size=626&ext=jpg"> <center> <h1><b>Practice Makes Perfect</b></h1></center></body>';


fs.writeFile(filename,html ,(err)=>{
    if (err) throw Error;
    console.log("Have been Saved...");
});

http.createServer((req,res) =>{
    fs.readFile(filename,(error,data) =>{
        res.writeHead('200', "{'Context-type': 'text/html'")
        res.write(data);
        res.end();
    });
}).listen(8080);

