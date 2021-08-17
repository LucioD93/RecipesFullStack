const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const { get_recipes_data, get_filtered_recipe_data } = require('./data')

app.use(cors())

app.get('/', (req, res) => {
  const query = req.query['search_value']
  res.send(query ? get_filtered_recipe_data(query) : get_recipes_data())
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
