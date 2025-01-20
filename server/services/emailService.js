const nodemailer = require('nodemailer');

const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'pmaruthi5@gmail.com',
            pass: 'Admin@123', // Use app-specific password for Gmail
        },
    });

    const mailOptions = {
        from: 'pmaruthi5@gmail.com',
        to: 'pmaruthi5@gmail.com',
        subject: 'New Enrollment Submission',
        html: `
      <h3>New Enrollment Details:</h3>
      <p><strong>First Name:</strong> ${data.first_name}</p>
      <p><strong>Last Name:</strong> ${data.last_name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
    `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
