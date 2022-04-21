import React from 'react'
import '../styles.css'


class RecipeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', ingredients: ''}

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleIngredientsChange(event) {
        this.setState({ingredients: event.target.value})
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state)
        this.setState({name: '', ingredients: ''})
        event.preventDefault();
      }

      render() {
        return (
            <div className="searchBar">
                <h2 className='searchLabel'>New Recipe</h2>
                <form onSubmit={this.handleSubmit} className="recipe">
                    <h2 className="searchLabel">
                        Recipe Name
                    </h2>
                    <input
                        id='recipeNameInput'
                        className="searchInput"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <h2 className="searchLabel">
                        Ingredients
                    </h2>
                    <input
                        id='recipeIngredientInput'
                        className='searchInput'
                        value={this.state.ingredients}
                        onChange={this.handleIngredientsChange}
                        placeholder={"Comma separated ingredients"}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
      }
}

export default RecipeForm
