import React from "react";
import {
  SearchBarContainer,
  SearchButton,
  SearchInput
} from "./searchbar.styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ username, onChangeHandler, submitHandler }) => {
  return (
    <SearchBarContainer>
      <SearchInput type="text" value={username} onChange={onChangeHandler} />
      <SearchButton type="submit" onClick={submitHandler}>
        {" "}
        <SearchIcon />{" "}
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
