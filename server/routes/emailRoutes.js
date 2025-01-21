const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

// POST route to send a general email (for example, general inquiry or form submission)
router.post('/send-email', async (req, res) => {
    const emailData = req.body;

    try {
        console.info("Sending General Email");
        await emailService.sendEmail(emailData); // Send email via the email service
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
});

// POST route to send tree service quote email
router.post('/send-quote-email', async (req, res) => {
    const emailData = req.body;

    // Prepare emailData with a 'type' of 'quote' to send a tree service quote email
    const quoteEmailData = {
        type: 'quote', // Identifies the email as a quote request
        first_name: emailData.first_name,
        last_name: emailData.last_name,
        email: emailData.email,
        phone: emailData.phone,
        address: emailData.address,
        service: emailData.service,
        description: emailData.description,
    };

    try {
        console.info("Sending Tree Service Quote Email");
        await emailService.sendEmail(quoteEmailData); // Send the quote email via the email service
        res.status(200).json({ message: 'Quote email sent successfully!' });
    } catch (error) {
        console.error('Error sending quote email:', error);
        res.status(500).json({ message: 'Failed to send quote email', error });
    }
});

// POST route to send arbor training enrollment email
router.post('/send-training-enrollment', async (req, res) => {
    const emailData = req.body;

    // Prepare emailData with a 'type' of 'training' to send an arbor training enrollment email
    const trainingEmailData = {
        type: 'training', // Identifies the email as a training enrollment request
        first_name: emailData.first_name,
        last_name: emailData.last_name,
        email: emailData.email,
        phone: emailData.phone,
        course: emailData.course,
        message: emailData.message,
    };

    try {
        console.info("Sending Arbor Training Enrollment Email");
        await emailService.sendEmail(trainingEmailData); // Send the training enrollment email via the email service
        res.status(200).json({ message: 'Training enrollment email sent successfully!' });
    } catch (error) {
        console.error('Error sending training enrollment email:', error);
        res.status(500).json({ message: 'Failed to send training enrollment email', error });
    }
});

module.exports = router;
