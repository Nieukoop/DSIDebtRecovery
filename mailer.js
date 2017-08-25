function mail(){

  var nodemailer = require('nodemailer');
  var message = "This is the body of the message!";


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'leroy.nieukoop@gmail.com',
      pass: 'soljahkilla1'
    }
  });

  var mailOptions = {
    from: 'leroy@gmail.com',
    to: 'leroy_nieukoop@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}