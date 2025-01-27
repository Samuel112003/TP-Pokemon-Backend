const db = require("./dataGetter.js");
//const { Pokemon }  = require("./../src/model/pokemon.js");

const getAllPokemon = async () => {
    let data = db.getData();
    return data;
}

const getPokemonByID = async (id) => {
    let data = await db.getData();
    return data.find(Pokemon => Pokemon.id == id);
}

const searchPokemon = async (dicSearch) => {
    //for (const [key, value] of Object.entries(dicSearch)) {
        return "ee";//(`${key}: ${value}`);
    //}
}

module.exports = {
    getPokemonByID,
    getAllPokemon,
    searchPokemon
}