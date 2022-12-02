const express = require('express');
const path = require('path');

//const fcdb = require('./fcdb');

const app = express();
const port = 3000;

const options = {
	extensions: ['html','css', 'js']
};

app.use(express.static(path.join(__dirname, 'public'), options));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './pages/index.html'));
});
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, './pages/login.html'));
});
app.get('/signUp', (req, res) => {
	res.sendFile(path.join(__dirname, './pages/signUp.html'));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
