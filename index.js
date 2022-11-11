
const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router')
const PORT = 3000;
app.use(express.json());
require("./models/asociaciones")



app.use(router)


app.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto  ${PORT}`);
    db.authenticate().then(()=> {
        console.log("Conectado a la base de datos");
    }).catch(error => {
        console.log('No se ha conectado a la base de datos' + error)
    })
});