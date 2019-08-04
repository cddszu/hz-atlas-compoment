const express = require("express");
const app = express();
const { nodePort, middleNodeApi } = require("../config.js");
const port = process.env.PORT || nodePort;
const mockRouter = require("./mock");
const proxy = require("http-proxy-middleware");

app.use("/", mockRouter);

app.use(
  ["/api", "/gap", "/middle"],
  proxy({
    target: middleNodeApi, // target host
    changeOrigin: true
    // , // needed for virtual hosted sites
    // cookieDomainRewrite: {
    //   "*": "localhost"
    // }
  })
);
app.use(
  "/",
  proxy({
    target: middleNodeApi, // target host
    changeOrigin: true, // needed for virtual hosted sites
    cookieDomainRewrite: {
      "*": "localhost"
    }
  })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
