const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile("./index.html", {root : '.'});
});

app.get("/Index", (req, res) => {
    res.sendFile("./index.html", {root : '.'});
});

app.get("/Contact-me", (req, res) => {
    res.sendFile("./contact-me.html", {root : '.'});
});
app.get("/About", (req, res) => {
    res.sendFile("./about.html", {root : '.'});
});

app.use((req, res, next) => {
    res.sendFile("./404.html", {root : '.'});
  });

app.listen(PORT, () => console.log(`first express app`));