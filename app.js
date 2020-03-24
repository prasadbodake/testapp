const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

var port = process.env.PORT ||3000;
app.listen(port)

/*
var express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs')

const nodemailer = require("nodemailer");

var app = express();
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
// app.use(express.json());
 const storage = multer.diskStorage({
   destination:function(req,file,cb){
     cb(null, 'emailimages/');

   },
   filename:function(req,file,cb){
     cb(null, file.originalname);
   }
 });
 var upload = multer({ storage: storage })

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// let testAccount = await nodemailer.createTestAccount();


app.post('/emailsender',upload.single('emailattachment'),async (req, res,next) =>{

  try {
    
    var to = req.body.to;
    var message = req.body.message;   
    var subject = req.body.subject;  
    var imageAttachment = req.file;
    

 let transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
  port: 25,
   secure: false, // true for 465, false for other ports
   auth: {
     user: 'pbodake2@gmail.com', // generated ethereal user
     pass: 'bluebirdp'
   }
 });
 var  info =null;

 if(imageAttachment != null )
 {
  info = await transporter.sendMail({
    from: '"Prasad" <pbodake2@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    attachments: [
      {   // utf-8 string as an attachment
          filename: imageAttachment != null ?imageAttachment.originalname : null,        
          path: imageAttachment != null ?imageAttachment.path : null 
      }]
  });
 }
 else{
  info = await transporter.sendMail({
    from: '"Prasad" <pbodake2@gmail.com>', // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body    
  });
 }



console.log(info);
res.send('Success');
}
catch(err) {
  res.send('failed\n\n'+err);
}
finally {
  try {
    if(imageAttachment != null)
    {
      fs.unlinkSync(imageAttachment.path);
    }
} catch(err1) {
  console.error(err1)
}
}
});



app.listen(3000);

*/
