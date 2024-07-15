const axios = require("axios");
const cron = require("node-cron");
const { ENDPOINTS, CRON_EXPRESSION } = require("./constants");

const pingEndpoints = async () => {
  try {
    await Promise.all(
      ENDPOINTS.map(async (endpoint) => await axios.head(endpoint))
    );
  } catch (error) {
    console.log("PINGED : ", new Date().toLocaleTimeString());
  }
};

const keepServerAlive = cron.schedule(CRON_EXPRESSION, pingEndpoints);

module.exports = keepServerAlive;
