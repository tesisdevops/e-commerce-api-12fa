const express = require('express');
const Products = require('../models/product')
const router = express.Router();

router.get('/', (req,res) => {
  Products.find({}) // Busca todos los elementos
  .exec()
  .then(x => res.status(200).send(x))
})

router.get('/:id', (req,res) => {
  Products.findById(req.params.id) // Busca el objecto con el id correspondiente
  .exec()
  .then(x => res.status(200).send(x))
})

router.post('/', (req,res) => {
  Products.create(req.body).then(x => res.status(201).send(x))
})

router.put('/:id', (req,res) => {
  Products.findOneAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(204))
})

router.delete('/:id', (req,res) => {
  Products.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router;