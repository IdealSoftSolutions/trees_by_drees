const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api', emailRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
