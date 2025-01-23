const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const db = require("./data");
    res.send(await db.getData())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
