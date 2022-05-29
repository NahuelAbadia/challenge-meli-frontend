const authorCheck = (req, res, next) => {
  try {
    const { author } = req.headers
    if (author === "Nahuel Abadia") return next()
    res.status(401).send("Error en las credenciales")
  } catch (error) {
    res.status(500).send("Error")
  }
}

module.exports = {
  authorCheck
}