const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 1337;

app.get("/",(req,res)=>{
    res.send("Welcome to /home");
})

app.post("/upload", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`); // eslint-disable-line
});