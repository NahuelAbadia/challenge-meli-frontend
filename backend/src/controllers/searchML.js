const axios = require("axios");

const searchML = async (req, res) => {
  const { search } = req.query
  try {
    const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    const { data: result } = await axios.get(URL)

    const items = []

    const resultados = result.results.slice(0, 4)
    const categories = result.available_filters[0].values.map(cat => cat.name)

    for (const product of resultados) {
      const item = {
        id: product.id,
        title: product.title,
        price: {
          currency: product.prices.prices[0]?.currency_id,
          amount: product.prices.prices[0]?.amount,
          decimals: 1,
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping
      }
      items.push(item)
    }

    const response = {
      author: {
        name: "Nahuel",
        lastname: "Abadia",
      },
      categories,
      items
    }

    return res.status(200).send(response)

  } catch (error) {
    res.status(500).send("Error")
  }
}

module.exports = {
  searchML
}