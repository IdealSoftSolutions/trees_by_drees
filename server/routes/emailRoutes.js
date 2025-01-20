const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

// POST route to send email
router.post('/send-email', async (req, res) => {
    const emailData = req.body;

    try {
        console.info("Sending Email")
        const response = await emailService.sendEmail(emailData);
        res.status(200).json({ message: 'Email sent successfully!', response });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
});

module.exports = router;
