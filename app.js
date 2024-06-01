const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(
  "/",
  proxy("https://api.rawg.io/api", {
    proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
      proxyReqOpts.rejectUnauthorized = false;
      return proxyReqOpts;
    },
  }),
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
