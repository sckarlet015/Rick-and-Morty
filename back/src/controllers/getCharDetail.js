const { default: axios } = require("axios");


const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(respuesta => respuesta.data)
    .then(data => {
        let objeto = {
            image: data.image,
            name: data.name,
            gender: data.gender,
            status: data.status,
            origin: data.origin.name,
            species: data.species,
            location: data.location.name
        }
        res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(objeto))
    })
    .catch(err => 
        res.writeHead(500, {"Content-type": "text/plain"}).end("Character")
    )
}

module.exports = getCharDetail;