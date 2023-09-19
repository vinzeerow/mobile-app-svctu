import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyleInput } from './style'

function SearchInput({ onSearch }) {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    };
    useEffect(() => {
        if (onSearch) {
            onSearch(searchValue);
        }
    }, [onSearch, searchValue]);
    return (
        <StyleInput value={searchValue} onChange={handleSearch} placeholder="Search..." type="search" name="Search" />
    );
}
SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchInput;
