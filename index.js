const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const profileRoutes = require("./routes/profile.route.js");
app.use(express.json());
app.use(cors({
  origin: "*"
}));
app.get("/", (req, res) => {
  res.send("Backend is running now 🚀");
});
app.get("/api/hello", (req, res) => {
  res.send("Hello, dev one🚀");
});

app.use("/api", profileRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});