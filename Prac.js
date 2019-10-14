var http = require('http');
var fs = require('fs');
var filename = 'prac.html';
var html = '<body background=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh83HIJ_D7j-bPM5-THdnepAJfT1-dTVkvFcE5K2Tsui6Ghcv1"> <center><br></br><h1 style="font-family:Impact; font-size: 50px;color:green"> NodeJs Practice Connected to MongoDb </h1><br></br><hr style=" width:100%;height:5px;color:#919090; background-color:#919090"></hr> <br></br><p1  style="font-family:Impact; font-size: 25px"> To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.MongoDB will create the database if it does not exist, and make a connection to it.</p1><br></br><br></br><br></br><br></br> <div> <center> <b> Name: <b><input> </input> <br></br> <b>Address: <b><input> </input><center/></div></center></body>'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


fs.writeFile(filename, html, (err) => {
    if (err) throw Error;
    console.log("Saveddd");
})

http.createServer((req, res) => {
    fs.readFile(filename, (error, data) => {
        if (error) throw Error;
        res.writeHead('200', "{'Context-type': 'text/html'");
        res.write(data);
        res.end();
    })


}).listen(8080);

// //Creating a database
// MongoClient.connect(url, (err, database) => {
//     if (err) throw Error;
//     console.log("Created a database");
//     database.close();
// })

// //Creating a collection of Students
// MongoClient.connect(url, (err, database) => {
//     if (err) throw Error;
//     var dbo = database.db("mydb");
//     dbo.createCollection("Students", (err, res) => {
//         if (err) throw Error;
//         console.log("Collection has been created..." + res);
//         database.close();
//     })
// })

//Inserting many documents in a collection of student
// MongoClient.connect(url, (err, database) => {
//     if (err) throw Error;
//     var dbo = database.db("mydb");
//     var myObj = [
//         { name: "Luzmibel", address: "Santander, Cebu" },
//         { name: "Shadklyn", address: "Lapu Lapu City" },
//         { name: "Mae Luzyl", address: "Jimalalud Orriental" },
//         { name: "Dale Marck", address: "Santander, Cebu" },
//         { name: "Charles", address: "Carcar, Cebu" },
//         { name: "Vincent", address: "Dalaguete, Cebu" },
//         { name: "Melben", address: "Malabago, Negros" },
//         { name: "Mellalie", address: "Talamban, Cebu" }
//     ];
//     dbo.collection("Students").insertMany(myObj, (err, res) => {
//         if (err) throw Error;
//         console.log("Number of document inserted:  " + res.insertedCount);
//         database.close();
//     })
// })

// // //Finding one documents in the collection of Students
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Students").findOne({}, function(err, result) {
//       if (err) throw err;
//       console.log(result.name);
//       db.close();
//     });
//   });

// // Find all documents in the collection of Students
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Students").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// // //FindSome
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Students").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

// //Finding documents with address of santander using query
MongoClient.connect(url,(err,database)=>{
    if(err) throw Error;
    var dbo=database.db("mydb");
    var query={address: "Santander, Cebu"};
    dbo.collection("Students").find(query).toArray((err,result)=>{
        if (err) throw Error;
        console.log(result);
        database.close();
    })
})

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var query = { address: "Santander, Cebu" };
//     dbo.collection("Students").find(query).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });



// Find All Alphabetically
// MongoClient.connect(url,(err,database)=>{
//     if (err) throw Error;
//     var dbo=database.db("mydb");
//     var isort={name:1};
//     dbo.collection("Students").find().sort(isort).toArray((err,result)=>{
//         if (err) throw Error;
//         console.log(result);
//         database.close();
//     })

// })

// Delete table
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Students").drop(function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("Collection deleted");
//       db.close();
//     });
//   });

// // Exclude Address
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Students").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });

// // Print only name
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("Students").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });