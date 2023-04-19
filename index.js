const express = require("express");

const app = express();

const post = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!!! This is my node app");
});

app.listen(post, () => {
    console.log("Now running on PORT" + post); 

});