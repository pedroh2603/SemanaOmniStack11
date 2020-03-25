/*
    Importa todas as funcionalidades do express para a
    a variável constante express. Essa variável não
    poderá mudar.
*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


//Chama a aplicação e atribui a variável app
const app = express();
app.use(cors());

//Faz com que o express entenda as requisições como objetos JavaScript
app.use(express.json());
app.use(routes);

//Deixa o programa escutando a porta 3333
app.listen(3333);