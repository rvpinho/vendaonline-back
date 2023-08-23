const express = require('express');
const comprasService = require("../Service/comprasService");
const router = express.Router();

router.post("/", async (req, res) => {
    const compraProduto = await comprasProdutoService.insertCompraProduto(req.body);
    res.send(compraProduto);
});

router.delete("/:id", async (req, res) => {
    const compraProduto = await comprasProdutoService.removeCompraProduto(req.params.id);
    res.send(compraProduto);
});

router.put("/", async (req, res) => {
    const compraProduto = await comprasProdutoService.updateCompraProduto(req.body);
    res.send(compraProduto);
});

router.get("/:id", async (req, res) => {
    const compraProduto = await comprasProdutoService.getById(req.params.id);
    res.send(compraProduto);
});

router.get("/comprasProduto", async (req, res) => {
    const compraProduto = await comprasProdutoService.getAllCompraProduto();
    res.send(compraProduto);
});
module.exports = router;