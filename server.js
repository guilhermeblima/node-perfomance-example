const express = require("express");

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
console.log(`Worker process started...`);
app.listen(3000);
