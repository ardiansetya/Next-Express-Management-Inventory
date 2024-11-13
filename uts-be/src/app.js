const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const prisma = require('./db');



dotenv.config();

const PORT = process.env.PORT ;

const app = express();





app.use(express.json())
app.use(cors());

const itemsController = require('./items/item.controller');
const supplierController = require('./supplier/supplier.controller');
const categoriesController = require('./categories/categories.controller');
const adminController = require('./admin/admin.controller')

app.use('/api', adminController)
app.use('/api', itemsController)
app.use('/api', supplierController)
app.use('/api', categoriesController)

app.listen(PORT, () => {
   console.log('Server started on port' + PORT);
});