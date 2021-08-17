import { render, screen } from '@testing-library/react';
import Recipe from '../Recipe'

function renderRecipe() {
    const test_recipe = {
        'name': 'Test',
        ingredients: [
            'Ingredient', 'Ingredient', 'Ingredient'
        ]
    }
    render(<Recipe recipe={test_recipe} />)
}

it('renders recipe name', () => {
  renderRecipe()
  const nameElement = screen.getByText(/Test/)
  expect(nameElement).toBeInTheDocument()
})

it('renders ingredients', () => {
    renderRecipe()
    const ingredientElements = document.querySelectorAll('li')
    expect(ingredientElements).toHaveLength(3)
})
