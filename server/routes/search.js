const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/city", async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.get(
      "https://api.amadeus.com/v1/reference-data/locations/pois",
      {
        params: {
          keyword: req.query.city,
          categories: "SIGHTS",
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("Response:", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching points of interest:", error);
    res.status(500).json({ error: error.message });
  }
});

async function getAccessToken() {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      {
        grant_type: "client_credentials",
        client_id: process.env.AMADEUS_API_KEY,
        client_secret: process.env.AMADEUS_API_SECRET,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
  }
}
module.exports = router;
