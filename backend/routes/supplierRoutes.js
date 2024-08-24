const express = require('express');
const { querySuppliers, SpecificSuppliers } = require('../controllers/supplierController');
const { validateInput } = require('../middlewares/validateInput');

const router = express.Router();


router.post('/query', validateInput, querySuppliers);
router.post('/search',SpecificSuppliers);

module.exports = router;


