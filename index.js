const express = require("express");
const app = express();

app.use(express.json());

app.post("/esp32", (req, res) => {
  console.log("ESP32 data:", req.body);
  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Node.js server is running OK");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
