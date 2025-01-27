const express = require('express')
const pokemonGetter = require("./src/service/pokemonGetter.js");
const app = express()
const port = 3000


app.get('/pokemons/search', async (req, res) => {
    const searchCriteria = req.query;
    //for(searchCriteria.params)
    res.send(searchCriteria);
})


app.get('/pokemons', async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1; // Page par défaut : 1
    const limit = parseInt(req.query.limit, 10) || 10; // Limite par défaut : 10
    const allPokemon = await pokemonGetter.getAllPokemon();

    // Pagination
    const startIndex = (page - 1) * limit; // Début de la page
    const endIndex = page * limit; // Fin de la page
    const paginatedPokemon = allPokemon.slice(startIndex, endIndex);

    // Structure de la réponse
    res.send({
        page,
        limit,
        total: allPokemon.length,
        totalPages: Math.ceil(allPokemon.length / limit),
        data: paginatedPokemon
    });
    console.log('Requête à /pokemons reçue');
})

app.get('/pokemons/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.send(await pokemonGetter.getPokemonByID(id));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
