const express = require('express');
const comprasService = require("../Service/comprasService");
const router = express.Router();

router.get("/", async (req, res) => {
    const compras = await comprasService.getAllCompras();
    res.send(compras);
});

router.get("/:id", async (req, res) => {
    const compra = await comprasService.getByIdCompras(req.params.id);
    res.send(compra);
});

router.post("/", async (req, res) => {
    const compra = await comprasService.insertCompras(req.body);
    res.send(compra);
});

router.put("/", async (req, res) => {
    const compra = await comprasService.updateCompras(req.body);
    res.send(compra);
});

router.delete("/:id", async (req, res) => {
    const compra = await comprasService.removeCompras(req.params.id);
    res.send(compra);
});
module.exports = router;