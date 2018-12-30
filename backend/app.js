import { Server } from "hapi";
import {servicos} from './src/routes/servicos'
import {usuarios} from './src/routes/usuarios'
const consign = require("consign")

const server = new Server({
    host: 'localhost',
    port: 3000
})

server.route(servicos)

server.start()
console.log(`Servidor executando na porta: ${server.info.port}`);

module.exports = server
