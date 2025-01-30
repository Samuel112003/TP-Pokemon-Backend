const Pokemon = {
    id: Number,
    name: {
        english: String,
        japanese: String,
        chinese: String,
        french: String
    },
    type: [String],
    base: {
        HP: Number,
        Attack: Number,
        Defense: Number,
        spAttack: Number,
        spDefense: Number,
        Speed: Number
    }
}

module.exports = {
    Pokemon
}