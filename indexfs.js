//appending a file(parameter are: filename,data, callback or like error)
// var fs=require('fs');
// var filename='sample.txt';
// var data='Hi Mibel';

// fs.open(filename,data,(error)=>{
//     if(error)throw Error
//     console.log('saved');
// });

//open a file(Parameter: filename,write,error)
// var fs=require('fs');
// var filename='sample.txt';

// fs.open(filename,'w',(error)=>{
//     if(error)throw Error
//     console.log('saved');
// });

//Deleting a file
// var fs=require('fs');

// var filename='sample.txt';

// fs.unlink(filename,(error)=>{
//     if(error) throw error;
//     console.log('Deleted file');
// });


//Renaming file
var fs=require('fs');

var origFile='sample.txt';
var newFile='new.txt';

fs.rename(origFile,newFile, (error) =>{
    if (error) throw Error;
    console.log('renamed');
})


