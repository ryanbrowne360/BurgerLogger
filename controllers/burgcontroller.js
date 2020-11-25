const burgerOrm = require('../models/burger');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
  let burgers = await burgerOrm.getAllBurgers();
  res.render('index', { burgers });
});

router.post('/api/burger', async function (req, res) {

  let result = await burgerOrm.addBurger(req.body.name);
  res.redirect("/");
});

router.put('/api/burger/:id', async function (req, res) {

  let result = await burgerOrm.setBurgerToDevoured(req.params.id);
  res.json({ message: `${result.changedRows} updated!` });
});

router.delete('/api/burger/:id', async function (req, res) {
  let result = await burgerOrm.deleteBurger(req.params.id);
  res.json({ message: `${req.params.id} deleted!` });
});
module.exports = router;

