import React from "react";

const SearchBox = ({ inputSearch }) => {
    return(
        <div className = 'pa2 '>
            <input className = ' pa3 ba b--red bg lightest-orange'
            type='search' 
            placeholder='SearchFriend'
            onChange={inputSearch}
        />
        </div>
    )
}
export default SearchBox;