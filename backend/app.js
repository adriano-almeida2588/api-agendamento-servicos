import { Server } from "hapi"
import { servicos } from './src/routes/servicos'
import { usuarios } from './src/routes/usuarios'
import { clientes } from "./src/routes/clientes";

const server = new Server({
    host: 'localhost',
    port: 3000
})

server.route(clientes)

server.start()
console.log(`Servidor executando na porta: ${server.info.port}`)

module.exports = server
