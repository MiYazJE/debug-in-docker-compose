const express = require('express');

const app = express();
const router = express.Router();

const products = [{
  id: '1',
  name: 'Nintendo Switch',
  price: 300,
  currency: 'EUR'
}]


router.get('/products/:productId', (req, res) => {
  console.log('Getting product by id')
  const { productId } = req.params;
  const product = products.find(p => p.id === productId);

  if (!product) return res.status(404).send();

  res.status(200).json(product);
})

app.use(router);

const port = process.env.PORT || '3000';
app.listen(port, console.log('ServiceB listening on port', port));