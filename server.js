const express = require('express');
require('dotenv').config();
require('./config/database');
const app = express();


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API Running'));


// API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})