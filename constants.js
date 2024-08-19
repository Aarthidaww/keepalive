const ENDPOINTS = [
  "https://keep-server-alive-sbx8.onrender.com",
  "https://opportunex-backend-2p67.onrender.com",
  "https://ignouteeru-service-xwam.onrender.com",
];
const PORT = 5500;
const CRON_EXPRESSION = "*/10 * * * *";

module.exports = {
  PORT,
  ENDPOINTS,
  CRON_EXPRESSION,
};
