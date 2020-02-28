const express = require('express');
const connectDB = require('./config/db.js');
const path = require('path');

const app = express();

// Get the DB connected
connectDB();

// Init Middleware for authorized routes
app.use(express.json({ extended: false }));

// API Routes
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/smallSites', require('./routes/api/smallSites'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
