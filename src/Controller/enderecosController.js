const express = require('express');
const enderecosService = require("../Service/enderecoService");
const router = express.Router();

router.get("/", async (req, res) => {
    const enderecos = await enderecosService.getAllEndereco();
    res.send(enderecos);
});

router.get("/:id", async (req, res) => {
    const endereco = await enderecosService.getByIdEndereco(req.params.id);
    res.send(endereco);
});

router.post("/", async (req, res) => {
    const endereco = await enderecosService.insertEndereco(req.body);
    res.send(endereco);
});

router.put("/:id", async (req, res) => {
    const endereco = await enderecosService.updateEndereco(req.body);
    res.send(endereco);
});

router.delete("/:id", async (req, res) => {
    const endereco = await enderecosService.removeEndereco(req.params.id);
    res.send(endereco);
});
module.exports = router;