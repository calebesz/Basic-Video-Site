const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape : false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1244692195476680706/sV_gQaqV_400x400.jpg",
        name: "Calebe Sousa",
        role: "Aluno",
        description: "Programador",
        links:[
            {name: "Twitter", url:"https://twitter.com/Calebe10030298/"},
            {name: "Facebook", url:"https://www.facebook.com/calebe.sousaz/"}
        ]
    }
    return res.render("about.njk", { about })
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id
    const video = videos.find(function(video){
        return video.id == id 
    })
    if (!video){
    return res.send("Video not found!")
    }
    return res.render("video", { item: video })
})


server.listen(5000, function(){
    console.log("server is running")
})