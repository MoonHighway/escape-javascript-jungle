const fs = require("fs");
const util = require("util");
const http = require("http");

const readFile = util.promisify(fs.readFile);

const server = http.createServer(async (req, res) => {
  if (req.method == "POST") {
    req.on("data", chunk => console.log(chunk.toString()));
    return;
  }

  if (req.url.includes(".png")) {
    const img = await readFile(`./public/${req.url}`);
    res.writeHead(200, { "Content-Type": "image/png" });
    return res.end(img);
  }

  if (req.url.includes(".js")) {
    const js = await readFile(
      `./public/${req.url}`,
      "UTF-8"
    );
    res.writeHead(200, {
      "Content-Type": "text/javascript"
    });
    return res.end(js);
  }

  if (req.url.includes(".css")) {
    const css = await readFile(
      `./public/${req.url}`,
      "UTF-8"
    );
    res.writeHead(200, { "Content-Type": "text/css" });
    return res.end(css);
  }

  const homepage = await readFile(
    "./public/index.html",
    "UTF-8"
  );

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(homepage);
});

server.listen(3000, () =>
  console.log(`Server running on http://localhost:3000`)
);
