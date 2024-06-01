const https = require("https");
const axios = require("axios");

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const axiosInstance = axios.create({
  // Add any default config options you want to use globally
  // For example:
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f76d57da35345929fdcfce91ad381ca",
  },
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  httpsAgent
});

module.exports = axiosInstance;
