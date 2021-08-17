import React from 'react'
import '../styles.css'

class Recipe extends React.Component {

    render() {
        return (
            <div className="recipe">
                <div>
                    <img
                        className='recipeImage'
                        src="https://image.flaticon.com/icons/png/64/701/701965.png"
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
