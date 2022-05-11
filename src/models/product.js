const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Products = mongoose.model('Product',new Schema({
  name: String,
  caption: String,
  description: String,
  skus: String,
  images: Array
}));

module.exports = Products;