const axios = require("axios")

const searchByID = async (req, res) => {
  const { id } = req.query

  try {
    const URL = `https://api.mercadolibre.com/items/${id}`
    const { data: itemResponse } = await axios.get(URL)

    const URL2 = `https://api.mercadolibre.com/items/${id}/description`
    const { data: descriptionReponse } = await axios.get(URL2)

    const response = {
      author: {
        name: "Nahuel",
        lastname: "Abadia",
      },
      item: {
        id: itemResponse.id,
        title: itemResponse.title,
        price: {
          currency: itemResponse.currency_id,
          amount: itemResponse.price,
          decimals: 1,
        },
        picture: itemResponse.thumbnail,
        condition: itemResponse.condition,
        free_shipping: itemResponse.shipping.free_shipping,
        sold_quantity: itemResponse.sold_quantity,
        description: descriptionReponse.plain_text,
      }
    }

    res.status(200).send(response)

  } catch (error) {
    res.status(500).send(error)
  }
}


module.exports = {
  searchByID
}