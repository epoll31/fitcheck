
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/home.html'));
});


app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/login.html'));
});
app.get("/signUp", function (req, res) {
  res.sendFile(path.join(__dirname, '/pages/signUp.html'));
});


app.listen(port);

