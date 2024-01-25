const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

// Using Cors
app.use(cors({
  origin: 'https://photogram-socialmedia.netlify.app',
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type',
}));


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" })); // for parsing application/json
app.use(express.urlencoded({ limit: "50mb", extended: true })); 
app.use(cookieParser());    

// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes
app.use("https://photogram-731a.onrender.com/api/v1", post);
app.use("https://photogram-731a.onrender.com/api/v1", user);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
