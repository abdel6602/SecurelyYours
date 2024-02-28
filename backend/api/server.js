const express = require("express")

const app = express()

const port = process.argv[2] || 8080

app.get("/", (req, res) => {
    res.json({message : "daret ya seya3"})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})