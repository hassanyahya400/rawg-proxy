const express = require("express");
const axiosInstance = require("./apiClient");

const app = express();

app.get("*", (req, res) => {
  axiosInstance
    .get(req.url)
    .then((response) => {
      return res.send(response.data);
    })
    .catch((error) => {
      return res.send({
        status: "error",
        message: error.message,
      });
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
