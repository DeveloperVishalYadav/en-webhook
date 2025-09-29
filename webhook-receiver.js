// webhook-receiver.js
const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());

app.post("/en-webhook", (req, res) => {
  console.log("Received webhook data:", req.body);

  res.status(200).json({
    message: "Webhook received successfully",
    data: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Webhook receiver running on http://localhost:${PORT}`);
});
