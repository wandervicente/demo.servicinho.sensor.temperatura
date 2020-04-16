const express = require('express');

const temperatureSensor = express();

temperatureSensor.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

temperatureSensor.use('/api/temperatureSensor', (req, res, next) => {
    const temperatures = [
        {
            currentStatus: true,
            readingValue: 100,
            timestamp: Date()
        },
        {
            currentStatus: true,
            readingValue: 98,
            timestamp: Date()
        },
        {
            currentStatus: true,
            readingValue: 74,
            timestamp: Date()
        },
        {
            currentStatus: true,
            readingValue: 77,
            timestamp: Date()
        }
    ];
    res.status(200).json({
        message: 'Temperature sensor connected!',
        temperatures: temperatures
    });
});

module.exports = temperatureSensor;