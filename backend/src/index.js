const express = require("express")
const router = require("./routes")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/", router)

const port = 3001

app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`))