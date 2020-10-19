const express = require('express');
require('dotenv').config();
require('./config/database');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors())

//Middleware
app.use(express.json({ extended: false }));

// API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profiles', require('./routes/api/profiles'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname, 'build', 'index.html'))
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})