const axios = require("axios");

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {
        let objeto = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species  
        }
        res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(objeto))
    })
    .catch(err => 
        res.writeHead(500, {"Content-type": "text/plain"}).end("objeto")
    )
}

module.exports = getCharById;