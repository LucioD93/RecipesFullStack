const fs = require('fs')

function get_recipes_data() {
    let rawdata = fs.readFileSync('sample_recipes.json')
    return recipes = JSON.parse(rawdata)
}

function get_filtered_recipe_data(value) {
    value = value.toLowerCase()
    return get_recipes_data().filter(recipe => {
        return recipe['name'].match(value) || recipe['ingredients'].includes(value)
    })
}

function add_new_recipe(value) {
    let rawdata = fs.readFileSync('sample_recipes.json')
    recipes = JSON.parse(rawdata)
    recipes.push(value)
    console.log(value)
    fs.writeFileSync('sample_recipes.json', JSON.stringify(recipes, null, 2))
}

module.exports = { get_recipes_data, get_filtered_recipe_data, add_new_recipe }
