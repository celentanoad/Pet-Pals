const express = require('express');
require('dotenv').config();
require('./config/database');
const app = express();

//Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})