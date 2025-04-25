const axios = require("axios");
const cron = require("node-cron");
const { ENDPOINTS, CRON_EXPRESSION } = require("./constants");

const pingEndpoints = async () => {
  try {
    await Promise.all(
      ENDPOINTS.map(async (endpoint) => await axios.head(endpoint))
    );
    console.log("All endpoints pinged successfully at:", new Date().toLocaleTimeString());
  } catch (error) {
    console.log("PINGED : ", new Date().toLocaleTimeString());
  }
};

const keepServerAlive = pingEndpoints

module.exports = keepServerAlive;
