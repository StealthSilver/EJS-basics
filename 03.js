const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/ig/:username", (req, res) => {
    let { username } = req.params
    const instaData = require("./data.json");
    const data = instaData[username];

    res.render("insta.ejs", { data });
})



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})