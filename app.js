const express = require("express");
const axiosInstance = require("./apiClient");

const app = express();

// CORS Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
