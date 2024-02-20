const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your actual gmail', 
        pass: 'Your actual gmail password', 
    },
});

const mailOptions = {
    from: 'senders email',
    to: 'recievers email',
    subject: 'Test Email from Node.js',
    text: 'This is a test email sent from Node.js using nodemailer.',
    html: '<h1>Hello from Node.js!</h1><p>This is a test email sent from <b>Node.js</b> using <b>nodemailer</b>.</p>', 
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
