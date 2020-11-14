import React from 'react';
import {SearchBarContainer, searchButton, searchInput} from './searchbar.styles'
import SearchIcon from '@material-ui/icons';

const SearchBar = ({username, onChangeHandler, submitHandler}) => {

    return(
        <SearchBarContainer>
            <searchInput type="text" value={username} onChange={onChangeHandler}/>
            <searchButton type="submit" onClick={submitHandler}><SearchIcon/></searchButton>
        </SearchBarContainer>
    )
}

export default SearchBar;