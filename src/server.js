require('dotenv').config();
var cors = require('cors')
const express = require('express');
const cookieParser = require('cookie-parser');
const json2xls = require('json2xls');

const loginRoute = require('./routes/LoginRoute');
const usuarioRoute = require('./routes/UsuarioRoute');
const itemRoute = require('./routes/ItemRoute');
const imagemProdRoute = require('./routes/ImagemProdRoute');
const avatarRoute = require('./routes/AvatarRoute');
const menuRoute = require('./routes/MenuRoute');
const cadastroRoute = require('./routes/CadastroRoute');
const estoqueRoute = require('./routes/EstoqueRoute');
const vendaRoute = require('./routes/VendaRoute');
const slideRoute = require('./routes/SlideRoute');
const pedidoRoute = require('./routes/PedidoRoute');
const ratingRoute = require('./routes/RatingRoute');
const pedraRoute = require('./routes/PedraRoute');

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: ['https://luna-adm-app-exhibition-54f540dbf795.herokuapp.com/*',"http://localhost:3000/"],
    credentials: true
}));

const db = require('./db');
db.connect();

app.use(express.json());
app.use(json2xls.middleware);

app.use('/login', loginRoute);
app.use('/usuario', usuarioRoute);
app.use('/item', itemRoute)
app.use('/menu', menuRoute);
app.use('/cadastros',cadastroRoute);
app.use('/envio_imagem_prod', imagemProdRoute);
app.use('/envio_avatar', avatarRoute);
app.use('/estoque', estoqueRoute);
app.use('/venda', vendaRoute);
app.use('/slide', slideRoute);
app.use('/pedido', pedidoRoute);
app.use('/rating', ratingRoute);
app.use('/stone',pedraRoute);

module.exports = app;