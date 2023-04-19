import React, { useState, useEffect } from 'react';
import './SearchBar.scss'

function SearchBar() {
    return ( 

        <div className="search-bar">
            <input type="text" name="search" id="dosie-search" />
        </div>

    );
}

export default SearchBar;