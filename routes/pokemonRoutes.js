const express = require('express')

// Creates our router
const router = express.Router()

const pokemonController = require('../controllers/pokemonController')



router.get('/', pokemonController.index)

router.get('/new', pokemonController.new)


// Setup a "create" route for adding fruit data
router.post('/', pokemonController.create)



// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:id', pokemonController.show)




// router.get('/:index', bbqController.show)
module.exports = router