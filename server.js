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
  res.send("Perfomance example");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Ding ding ding");
});

app.listen(3000);
