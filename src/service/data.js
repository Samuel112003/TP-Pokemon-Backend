const fileSystem = require('fs');

const getData = async () => {
    let data = fileSystem.readFileSync(src/service/data.js, "utf8");
    return JSON.parse(data);
}

module.exports= {
    getData
}