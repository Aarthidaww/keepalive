const ENDPOINTS = [
  "https://keep-server-alive-qa4c.onrender.com",
  "https://opportunex-backend-8spz.onrender.com",
];
const PORT = 5500;
const CRON_EXPRESSION = "*/10 * * * *";

module.exports = {
  PORT,
  ENDPOINTS,
  CRON_EXPRESSION,
};
