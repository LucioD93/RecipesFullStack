import React from 'react'

class Recipe extends React.Component {

    render() {
        return (
            <div>
                <h4 style={{ textTransform: 'capitalize', textDecoration: 'underline' }}>
                    Recipe: {this.props.recipe.name}
                </h4>
                <ul>
                    {this.props.recipe.ingredients.map(function(ingredient, i){
                        return (
                            <li style={{ textTransform: 'capitalize', listStyle: 'none' }} key={i}>
                                {ingredient}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Recipe
