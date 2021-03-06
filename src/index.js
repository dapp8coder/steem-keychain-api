require("dotenv").config();
const https = require("https");
const fs = require("fs");
const app = require("./app");
const port = process.env.PORT || 3000;

// Listening

https
  .createServer(
    {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/api.steemkeychain.com/privkey.pem",
        "utf8"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/api.steemkeychain.com/cert.pem",
        "utf8"
      ),
      ca: fs.readFileSync(
        "/etc/letsencrypt/live/api.steemkeychain.com/chain.pem",
        "utf8"
      )
    },
    app
  )
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
