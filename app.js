const express = require("express");
const axiosInstance = require("./apiClient");

const app = express();

app.get("*", (req, res) => {
  axiosInstance
    .get(req.url)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return {
        status: "error",
        message: error.message,
      };
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
