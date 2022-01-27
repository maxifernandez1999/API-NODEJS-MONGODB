const express = require('express')
const router = express.Router();
const checkAuth = require('../middleware/auth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')


router.get('/', checkAuth, getItems)

router.get('/:id', getItem)

router.post('/', createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router