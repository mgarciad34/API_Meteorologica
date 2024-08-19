const express = require('express');
require('dotenv').config();

const weatherRoutes = require('./routers/tiempoRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
