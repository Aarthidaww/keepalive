const ENDPOINTS = [
  "https://keep-server-alive.onrender.com",
  "https://opportunex-backend-1.onrender.com",
];
const PORT = 5500;
const CRON_EXPRESSION = "*/10 * * * *";

module.exports = {
  PORT,
  ENDPOINTS,
  CRON_EXPRESSION,
};
