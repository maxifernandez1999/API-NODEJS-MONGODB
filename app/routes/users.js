const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const checkRoleAuth = require('../middleware/roleAuth');
const { validateCreate } = require('../validators/users')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')


router.get('/', checkAuth, checkRoleAuth(['user']), getItems)

router.get('/:id', getItem)

router.post('/', validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router