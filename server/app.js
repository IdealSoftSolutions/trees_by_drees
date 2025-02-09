const express = require('express');
const cors = require('cors');
const path = require('path');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static Angular files from dist/browser
app.use(express.static(path.join(__dirname, '../dist/trees_by_drees/browser')));

// API routes
app.use('/api', emailRoutes);

// Fallback route to serve Angular app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/trees_by_drees/browser/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
