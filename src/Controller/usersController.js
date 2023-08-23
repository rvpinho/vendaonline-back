const express = require('express');
const userService = require("../Service/usersService");
const router = express.Router();

router.get("/", async (req, res) => {
    const user = await userService.getAllUsers();
    res.send(user);
});

router.get("/:id", async (req, res) => {
    const user = await userService.getByIdUser(req.params.id);
    res.send(user);
});

router.post("/", async (req, res) => {
    const user = await userService.insertUser(req.body);
    res.send(user);
});

router.put("/:id", async (req, res) => {
    const user = await userService.updateUser(req.body);
    res.send(user);
});

router.delete("/:id", async (req, res) => {
    const user = await userService.removeUser(req.params.id);
    res.send(user);
});
module.exports = router;