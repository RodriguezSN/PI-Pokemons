const postPokemonControllers = require("../controllers/PostPokemonControllers")


const postPokemon = async (req,res) => {
    try {
        const data = req.body
        const result = postPokemonControllers(data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = postPokemon