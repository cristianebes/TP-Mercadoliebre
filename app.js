const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('public'));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")));

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "/views/register.html")));

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "/views/login.html")));

app.post('/register', (req, res) => res.redirect(302, '/'));

app.post('/login', (req, res) => res.redirect(302, '/'));

app.listen(3000, () => console.log("Pagina corriendo"));

