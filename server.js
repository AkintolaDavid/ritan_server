const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.get("/api/yes", (req, res) => {
  res.send("yesss");
});
app.post("/api/submit_aboutus_form", (req, res) => {
  console.log(req.body); // Print the received data
  res.send("Data received");
});
app.post("/api/submit_ourservices_form", (req, res) => {
  console.log(req.body); // Print the received data
  res.send("Data received");
});
app.post("/api/submit_contactus_form", (req, res) => {
  console.log(req.body); // Print the received data
  res.send("Data received");
});
app.post("/api/submit_letustalk_form", (req, res) => {
  console.log(req.body); // Print the received data
  res.send("Data received");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
