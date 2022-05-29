const router = require("express").Router()
const { searchML } = require("../controllers/searchML")
const { searchByID } = require("../controllers/searchByID")
const { authorCheck } = require("../middlewares/authorCheck")

router.get("/", (req, res) => {
  res.send("Mercado Libre Api")
})

router.get("/api/items", authorCheck, searchML)

router.get("/api/items/:id", authorCheck, searchByID)

module.exports = router