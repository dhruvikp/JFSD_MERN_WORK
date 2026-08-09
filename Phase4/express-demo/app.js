const express = require("express")

const app = express()

app.use(express.json);
// this sentence allow express to parse JSON request bodies

app.get("/", (req, res) => {
    res.send("Hello express");
});

app.listen(3005, () => {
    console.log("server is running on port 3005");
});

