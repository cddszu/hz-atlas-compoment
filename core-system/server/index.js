const express = require("express");
const app = express();
const path = require("path");
const { targetAPI, nodePort, sysApi, middleNodeApi } = require("../config.js");
const port = process.env.PORT || nodePort;

const mockRouter = require("./mock");
const proxy = require("http-proxy-middleware");

app.use(
  "/gap/api",
  proxy({
    target: targetAPI, // target host
    changeOrigin: true, // needed for virtual hosted sites
    cookieDomainRewrite: "localhost",
    onProxyReq(proxyReq, req, res) {
      proxyFunc(proxyReq, req, res)
    }
  })
);
app.use(
  "/api",
  proxy({
    target: sysApi, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    cookieDomainRewrite: "localhost",
    onProxyReq(proxyReq, req, res) {
      proxyFunc(proxyReq, req, res)
    }
  }),
);

app.use(
  "/middle",
  proxy({
    target: middleNodeApi, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    cookieDomainRewrite: "localhost",
    onProxyReq(proxyReq, req, res) {
      proxyFunc(proxyReq, req, res)
    }
  })
);

let proxyFunc = function(proxyReq, req, res) {
  let token;
  req.headers.cookie &&
    req.headers.cookie.split(";").some(function(Cookie) {
      var parts = Cookie.split("=");
      if (/haizhiJSESSIONID/g.test(parts[0])) {
        token = parts[1];
      }
    });
  if (token) {
    proxyReq.setHeader("cookie", "JSESSIONID=" + token);
  }
};
app.use("/", mockRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("/ssLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../build", "ssLogin.html"));
  });
  // Handle React routing, return all requests to React app
  app.get("/ssLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../build", "ssLogin.html"));
  });
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

// NODE_ENV=production node server/index.js
