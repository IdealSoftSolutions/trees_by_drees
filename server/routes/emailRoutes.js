const express = require('express');
const { sendEmail } = require('../services/emailService');
const router = express.Router();

router.post('/send-email', async (req, res) => {
    try {
        await sendEmail(req.body);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
});

module.exports = router;
