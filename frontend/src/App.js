import React, { Component } from 'react';
import Recipe from './components/Recipe';
import SearchBar from './components/SearchBar';

class App extends Component {


    constructor(props){
        super(props)
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this)
        this.url = 'http://localhost:3001?'
    }

    state = {
        recipes: [],
        searchValue: ''
    }

    handleSearchValueChange(value) {
        this.setState({searchValue: value})
        fetch(this.url + new URLSearchParams({
            search_value: value
        }))
            .then(res => res.json())
            .then((data) => {
                this.setState({recipes: data})
            })
    }

    componentDidMount() {
        fetch(this.url)
            .then(res => res.json())
            .then((data) => {
                this.setState({recipes: data})
            })
    }

    render () {
        const searchValue = this.state.searchValue
        const recipes = this.state.recipes
        return (<div>
            <div>
                <SearchBar
                    searchValue={searchValue}
                    onSearchValueChange={this.handleSearchValueChange}
                />
            </div>
            {recipes.length > 0
                ? (<div className="recipes-container">
                    {recipes.map(function(recipe, i){
                    return <Recipe recipe={recipe} key={i} />
                    })}
                </div>)
                : (<h5 className="emptyRecipesLabel">
                    We are sorry. We don't have any recipes matching your search.
                </h5>)
            }
        </div>)
    }
}

export default App;
