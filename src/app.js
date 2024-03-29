import express from 'express'
import http from 'http'
import {Server} from 'socket.io'

const app = express();
const server = http.createServer(app)
const io = new Server(server)

//io.on se ejecuta cuando usuario entra a servidor
//socket.on escucha al evento chat
//io.emit ejecuta al recibir el mensaje
io.on('connection',(socket)=>{
    socket.on('chat',(msg)=>{
        io.emit('chat',msg)
    })
})

app.use(express.json())
app.get('/', (req,res)=>{
    res.sendFile(`C:/Users/juana/OneDrive/Escritorio/chat-nodejs/cliente/index.html`);
})

export default server;