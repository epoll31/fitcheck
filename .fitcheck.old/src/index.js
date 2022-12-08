import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/test.html'));
	//res.sendFile(path.join(__dirname,'/pages/index.html'));
});
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/login.html'));
});
app.get('/signUp', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/signUp.html'));
});
app.get('/profile', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/profile.html'));
});
app.get('/closet', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/closet.html'));
});
app.get('/fits', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/fits.html'));
});
app.get('/item', (req, res) => {
	res.sendFile(path.join(__dirname,'/pages/item.html'));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
