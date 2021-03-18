const express = require("express")
const server = express()

server.use(express.static("public"))

//criando rotas
server.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

//conectando o servidor
server.listen(3000)