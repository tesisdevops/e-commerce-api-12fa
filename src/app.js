const express = require('express'),
    morgan = require('morgan'),
    cors = require('cors');

require('dotenv').config();
require('./database');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: true }))
app.use(morgan('dev'))

const products = require('./routes/index')
app.use('/products', products)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));