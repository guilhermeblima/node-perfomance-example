const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

function delay(duration) {
  const starttime = Date.now();
  // Loop until the desired duration has passed.
  while (Date.now() - starttime < duration) {
    // event loop is blocked...
  }
}
app.get("/", (req, res) => {
  res.send(`Perfomance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding ${process.pid}`);
});

console.log("Running server.js");
if (cluster.isMaster) {
  console.log("Master has been started...");
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker process started...`);
  app.listen(3000);
}
