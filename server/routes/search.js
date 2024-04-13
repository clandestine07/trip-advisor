const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/city', (req, res) => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.amadeus.com/v1/reference-data/locations/pois', {
              params: {
                keyword: req.body.city,
                categories: 'SIGHTS',
              },
              headers: {
                'Authorization': `Bearer ${process.env.AMADEUS_API_KEY}:${process.env.AMADEUS_API_SECRET}`
              }
            });
            console.log('Response:', response.data);
            res.status(200).json(response.data);
          } catch (error) {
            console.error('Error fetching points of interest:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
      fetchData();
    }
})
module.exports =  router;