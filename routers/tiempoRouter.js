const express = require('express');
const { obtenerTiempo } = require('../controllers/tiempoController');

const router = express.Router();

router.get('/weather', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: 'Dime una ciudad' });
    }

    try {
        const weatherData = await obtenerTiempo(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
