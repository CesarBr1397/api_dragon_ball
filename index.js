//Importamos array de dragon ball
const dragon_api = require('./api');
//Importar módulo express
const express = require('express')
//Crear servidor
const app = express()
//Almacena el puerto done corre el servidor
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.get('/id/:id', (req, res) => {
    const peleador = DragonID(parseInt(req.params.id, 10)); //asegura la base decimal
    if (peleador) {
        res.send(peleador);
    } else {
        res.status(404).send({ error: 'Personaje no encontrado' });
    }
});

app.get('/nombre/:nombre', (req, res) => {
    const peleador = dragon_nombre((req.params.nombre));
    if (peleador) {
        res.send(peleador);
    } else {
        res.status(404).send({ error: 'Personaje no encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})

function DragonID (id) {
    return dragon_api.find(dragon => dragon.id === id)
}

function dragon_nombre (nombre) {
    return dragon_api.find(dragon => dragon.nombre.toLowerCase() === nombre.toLowerCase())
}
