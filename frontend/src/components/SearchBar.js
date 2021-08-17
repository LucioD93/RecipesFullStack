import React from 'react'

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onSearchValueChange(e.target.value)
    }

    render() {
        const searchValue = this.props.searchValue
        return (
            <div>
                <span>Search recipes</span>
                <input
                    type="text"
                    value={searchValue}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default SearchBar
