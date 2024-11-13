const express = require('express');
const prisma = require('../db');
const { createItem, getItems, getSummary, getItemsCategory } = require('../items/item.services');

const router = express.Router()


router.use(express.json())

router.get('/', async (req, res) => {
   try {
      const [totalItems, totalCategories, totalSuppliers] = await Promise.all([
         prisma.item.count(),
         prisma.category.count(),
         prisma.supplier.count(),
      ]);

      const totalStockValue = await prisma.item.aggregate({
         _sum: { price: true },
      });

      res.json({
         totalItems,
         totalCategories,
         totalSuppliers,
         totalStockValue: totalStockValue._sum.price,
      });
   } catch (error) {
      res.status(500).json({ error: 'Error fetching system summary' });
   }
});

router.post('/items', async (req, res) => {
   try {

      const newItemData = req.body
      const item = await createItem(newItemData);

      res.status(201).send({

         data: item,
         message: 'Item created successfully'

      });
   } catch (error) {
      res.status(400).send({ error });
   }
});

router.get('/items', async (req, res) => {
   try {
      const items = await getItems();
      res.status(200).send(items);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
   // try {
   //    const items = await getItems(); // Fetch all items to display on the admin panel
   //    res.render('admin', { items }); // Pass the items to the EJS template
   // } catch (error) {
   //    console.error('Error details:', error); // Log error details for debugging
   //    res.status(500).json({ error: 'Error loading admin panel' });
   // }
});

router.get('/items/summary', async (req, res) => {
   try {
      const { totalStock, totalValue, averagePrice } = await getSummary();
      res.status(200).json({ totalStock, totalValue, averagePrice });
   } catch (error) {
      res.status(500).send({ error: error.message });
   }
});

router.get('/items/low-stock', async (req, res) => {
   try {
      const items = await prisma.item.findMany({
         where: { quantity: { lt: 5 } },
      });
      res.json(items);
   } catch (error) {
      res.status(500).json({ error: 'Error fetching low-stock items' });
   }
});

// Menampilkan items berdasarkan kategori tertentu
router.get('/items/category/:categoryId', async (req, res) => {
   const { categoryId } = req.params;
   try {
      console.log(categoryId)
      const items = await getItemsCategory(categoryId)
      res.json(items);
   } catch (error) {
      res.status(500).json({ error: 'Error fetching items by category' });
   }
});

// Menampilkan ringkasan per kategori
router.get('/items/category-summary', async (req, res) => {
   try {
      const summary = await prisma.item.groupBy({
         by: ['categoryId'],
         _sum: { price: true, quantity: true },
         _avg: { price: true },
         _count: { id: true },
      });
      res.json(summary);
   } catch (error) {
      res.status(500).json({ error: 'Error fetching category summary' });
   }
});

// Menampilkan ringkasan barang berdasarkan pemasok
router.get('/items/supplier-summary', async (req, res) => {
   try {
      const summary = await prisma.item.groupBy({
         by: ['supplierId'],
         _sum: { price: true, quantity: true },
         _avg: { price: true },
         _count: { id: true },
      });
      res.json(summary);
   } catch (error) {
      res.status(500).json({ error: 'Error fetching supplier summary' });
   }
});





module.exports = router