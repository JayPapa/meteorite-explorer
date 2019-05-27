import React from 'react'
import './SearchPanel.css'

const SearchPanel = (props) => {
    return (
            <form className="search-form" onSubmit={props.handleSubmit}>
                <input className="search-box" value={props.searchTerm} placeholder="Search for meteorites" onChange={props.handleChange} />
                <input className="search-button" type="submit" value="Search"/>
            </form>
    )
}

export default SearchPanel;