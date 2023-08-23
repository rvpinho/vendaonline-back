const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const comprasService = require("../Service/comprasService");

const enderecosService = require("../Service/enderecoService");

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use(cors());

const apiRouter = express.Router();
apiRouter.get("/", (req, res) => {
  res.send("Welcome TEST");
});

//Users

const usersRoutes = require('../Controller/usersController');
app.use('/users', usersRoutes);

//Produtos

const produtosRoutes = require('../Controller/produtosController');
app.use('/produtos', produtosRoutes);

//Estados

const estadosRoutes = require('../Controller/estadosController');
app.use('/estados', estadosRoutes);

//Cidades

const cidadesRoutes = require('../Controller/cidadeController');
app.use('/cidades', cidadesRoutes);

//Compras

const comprasRoutes = require('../Controller/comprasController');
app.use('/compras', comprasRoutes);

//Endereço

const enderecosRoutes = require('../Controller/enderecosController');
app.use('/enderecos', enderecosRoutes);

//ComprasProduto

const comprasProdutoRoutes = require('../Controller/comprasProdutoController');
app.use('/comprasProduto', comprasProdutoRoutes);






app.listen(port, async () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

