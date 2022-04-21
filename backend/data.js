const fs = require('fs')

function get_recipes_data() {
    let rawdata = fs.readFileSync('recipes.json')
    return recipes = JSON.parse(rawdata)
}

function get_filtered_recipe_data(value) {
    value = value.toLowerCase()
    return get_recipes_data().filter(recipe => {
        return recipe['name'].match(value) || recipe['ingredients'].includes(value)
    })
}

module.exports = { get_recipes_data, get_filtered_recipe_data }
