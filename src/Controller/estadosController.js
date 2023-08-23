const express = require('express');
const estadosService = require("../Service/estadosService");
const router = express.Router();

router.get("/", async (req, res) => {
    const estados = await estadosService.getAllEstados();
    res.send(estados);
});

router.get("/:id", async (req, res) => {
    const estados = await estadosService.getByIdEstado(req.params.id);
    res.send(estados);
});

router.post("/", async (req, res) => {
    const estados = await estadosService.insertEstado(req.body);
    res.send(estados);
});

router.put("/:id", async (req, res) => {
    const estados = await estadosService.updateEstado(req.body);
    res.send(estados);
});

router.delete("/:id", async (req, res) => {
    const estados = await estadosService.removeEstado(req.params.id);
    res.send(estados);
});
module.exports = router;