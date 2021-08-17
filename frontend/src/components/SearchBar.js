import React from 'react'
import '../styles.css'

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
            <div className="searchBar">
                <h2 className="searchLabel">
                    What do you want to eat today?
                </h2>
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Type Something"
                    value={searchValue}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default SearchBar
