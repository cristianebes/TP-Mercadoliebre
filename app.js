const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set("view engine", "ejs")

app.get("/", (req, res) => res.render("home"));

app.get("/register", (req, res) => res.render("register"));

app.get("/login", (req, res) => res.render("login"));

app.post('/register', (req, res) => res.redirect(302, '/'));

app.post('/login', (req, res) => res.redirect(302, '/'));

app.listen(port, () => console.log(`Servidor iniciado - http://localhost:${port}`));

