const express = require('express');
const productService = require("../Service/produtoService");
const router = express.Router();

router.get("/", async (req, res) => {
    const produtos = await productService.getAllProdutos();
    res.send(produtos);
});

router.get("/:id", async (req, res) => {
    const produto = await productService.getByIdProduto(req.params.id);
    res.send(produto);
});

router.post("/", async (req, res) => {
    const produto = await productService.insertProduto(req.body);
    res.send(produto);
});

router.put("/:id", async (req, res) => {
    const produto = await productService.updateProduto(req.body);
    res.send(produto);
});

router.delete("/:id", async (req, res) => {
    const produto = await productService.removeProduto(req.params.id);
    res.send(produto);
});
module.exports = router;