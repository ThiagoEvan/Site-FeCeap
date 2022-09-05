const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server, 
    noCache: true
})
server.use(express.static("public"))

server.get("/", function(req, res) {
    
    const projetos = [
        {
            img:"https://cdn-icons-png.flaticon.com/512/1396/1396673.png",
            title:"O advento de battle royalle, um estudo sobre Free Fire",
            category:"Administração",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
            url:""
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/921/921490.png",
            title:"Por que a Terra NÃO é plana?",
            category:"Ciências",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
            url:""
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/4668/4668541.png",
            title:"Satélite caseiro",
            category:"Engenharia",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam",
            url:""            
        }
    ]
    res.render("index.html", {projetos}),
    console.log("Saçfasdfs")
    
})

server.get("/projects.html", function(req, res){
    res.render("projetcs.html")
})

server.listen(3030)

// npm init -y
// npm i express
// npm i
// npm i nodemon
// npm i nunjucks