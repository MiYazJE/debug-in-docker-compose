const axios = require('axios');

async function getById(req, res) {
  const { id } = req.params;
  try {
    const product = await axios.get(`http://serviceb:3000/products/${id}`)
    res.status(product.status).json(product.data);
  }
  catch (err) {
    res.send(err)
  }
}

module.exports = {
  getById
}