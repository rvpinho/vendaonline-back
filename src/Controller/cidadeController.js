const express = require('express');
const cidadeService = require("../Service/cidadeService");
const router = express.Router();

router.get("/", async (req, res) => {
    const cidade = await cidadeService.getAllCidades();
    res.send(cidade);
});

router.get("/:id", async (req, res) => {
    const cidade = await cidadeService.getByIdCidade(req.params.id);
    res.send(cidade);
});

router.post("/", async (req, res) => {
    const cidade = await cidadeService.insertCidade(req.body);
    res.send(cidade);
});

router.put("/:id", async (req, res) => {
    const cidade = await cidadeService.updateCidade(req.body);
    res.send(cidade);
});

router.delete("/:id", async (req, res) => {
    const cidade = await cidadeService.removeCidade(req.params.id);
    res.send(cidade);
});
module.exports = router;