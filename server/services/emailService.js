const nodemailer = require('nodemailer');

// Function to send email
const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'solutionsidealsoft@gmail.com',
            pass: 'wetn uuyj diyo dwbr', // Use app-specific password for Gmail
        },
    });

    // Default email options
    const mailOptions = {
        from: data.email,
        to: 'solutionsidealsoft@gmail.com',
        subject: data.subject || 'New Email Request', // Default subject
    };

    // Check the type of email (general or quote or training enrollment) and format accordingly
    if (data.type === 'quote') {
        mailOptions.subject = 'Request for Tree Service Quote';
        mailOptions.html = `
          <h3>New Tree Service Quote Request</h3>
          <p><strong>First Name:</strong> ${data.first_name}</p>
          <p><strong>Last Name:</strong> ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          
          <h4>Address Details</h4>
          <p><strong>Apartment/Suite No:</strong> ${data.address.house_no || 'Not provided'}</p>
          <p><strong>City:</strong> ${data.address.city || 'Not provided'}</p>
          <p><strong>State:</strong> ${data.address.state || 'Not provided'}</p>
          <p><strong>Zip Code:</strong> ${data.address.zipcode || 'Not provided'}</p>
          
          <h4>Service Details</h4>
          <p><strong>Type of Service:</strong> ${data.service.join(', ') || 'Not specified'}</p>
          <p><strong>Description:</strong> ${data.description || 'No additional description provided'}</p>
          
          <p><em>Please contact the customer to provide the quotation as soon as possible.</em></p>
        `;
    } else if (data.type === 'training') {
        mailOptions.subject = 'New Arbor Training Enrollment';
        mailOptions.html = `
          <h3>New Arbor Training Enrollment</h3>
          <p><strong>First Name:</strong> ${data.first_name}</p>
          <p><strong>Last Name:</strong> ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Course Interested In:</strong> ${data.course || 'Not specified'}</p>
          
          <h4>Additional Information</h4>
          <p><strong>Message:</strong> ${data.message || 'No additional message provided'}</p>
          
          <p><em>Please reach out to the applicant to provide further details about the course.</em></p>
        `;
    } else {
        // Default email content for other types of emails
        mailOptions.html = `
          <h3>New Email Request</h3>
          <p><strong>First Name:</strong> ${data.first_name}</p>
          <p><strong>Last Name:</strong> ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
        `;
    }

    // Send the email
    console.info("Using transporter to send email");
    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
