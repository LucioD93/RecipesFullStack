import React from 'react'
import '../styles.css'

class Recipe extends React.Component {

    render() {
        return (
            <div className="recipe">
                <div>
                    <img
                        className='recipeImage'
                        src="https://www.svgrepo.com/show/84264/recipes.svg"
                        alt="Recipe"
                    ></img>
                </div>
                <div>
                    <h4>
                        {this.props.recipe.name}
                    </h4>
                    <ul>
                        {this.props.recipe.ingredients.map(function(ingredient, i){
                            return (
                                <li>
                                    {ingredient}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Recipe
