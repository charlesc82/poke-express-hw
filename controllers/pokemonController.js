// const pokemon = require('../models/pokemon')
const Pokemon = require('../models/pokemonModel')

// // The callback functions originally the second argument from -> app.get('/', () => {})
// module.exports.index = (req, res) => {
//     // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
//     res.render('Index', { pokemon })
// }

module.exports.index = async (req, res) => {

    try {
        // Use the fruit model to interact with the database
        // find will get all documents from the fruit collection
        const pokemon = await Pokemon.find() 
        console.log('inside controller')

        // Looks in the views folder for "fruits/Index" and passes { fruits } data to the view (kind of like a server props object)
        res.render('Index', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}


// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('Show', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}


// module.exports.new = 


module.exports.create = async (req, res) => {
    try {
        // use the model to interact with db and create a new document in the fruit collection
        req.body.img = "http://img.pokemondb.net/artwork/"+req.body.name.toLowerCase()+".jpg"
        const result = await Pokemon.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/pokemon')
}


module.exports.new = (req, res) => {
    res.render('New')
}


