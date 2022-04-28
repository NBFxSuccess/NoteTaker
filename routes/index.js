const router = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');
const diagnosticsRouter = require('./diagnostics');
// TODO: import your diagnostics route
app.use('/diagnostics', diagnosticsRouter);
const app = express();

app.use('/notes', notesRouter);

module.exports = router;
