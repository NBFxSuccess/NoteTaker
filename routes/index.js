const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
const diagnosticsRouter = require('./diagnostics');
// TODO: import your diagnostics route
const app = express();
app.use('/diagnostics', diagnosticsRouter);

app.use('/notes', notesRouter);

module.exports = express;
