const fileSystem = require('fs');

const getData = async () => {
    let data = fileSystem.readFileSync("./data/pokedex.json", "utf8");
    return JSON.parse(data);
}

module.exports= {
    getData
}