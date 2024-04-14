const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

const baseUrl = "https://api.amadeus.com/v1/reference-data/locations/pois";

router.get("/city", async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const cityName = req.query.city;
    const response = await axios.get(`${baseUrl}?cityCode=${cityName}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("Response:", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching points of interest:", error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
