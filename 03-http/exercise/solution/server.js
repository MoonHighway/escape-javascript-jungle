const fs = require("fs");
const util = require("util");
const http = require("http");

const readFile = util.promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  if (req.method === "POST") {
    req.on("data", (chunk) => console.log(chunk.toString()));
  }

  if (req.url.match(/.png/)) {
    const img = await readFile(`./public/${req.url}`);
    res.writeHead(200, { "Content-Type": "image/png" });
    return res.end(img);
  }

  if (req.url.match(/.css|.js/)) {
    const supportingFile = await readFile(`./public/${req.url}`, "UTF-8");
    res.writeHead(200, {
      "Content-Type": req.url.match(/.css/) ? "text/css" : "text/javascript",
    });
    return res.end(supportingFile);
  }

  const homePage = await readFile("./public/index.html", "UTF-8");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(homePage);
});

server.listen("3000", () => console.log("web server running on port 3000"));
