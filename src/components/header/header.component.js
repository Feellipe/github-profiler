import React, {useState} from 'react';
import { ReactComponent as Logo } from '../../assets/github-logo.svg'

import {HeaderContainer, LogoLink} from './header.styles' 
import SearchBar from '../searchBar/searchbar.component'

import UserDataContext from '../../context/user-data.context'

const Header = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

    try {
      const profileFetch = await fetch(
        `https://api.github.com/users/${username}`
      );
      const profileJson = await profileFetch.json();
        console.log(profileJson)
      setData(profileJson);

      if (profileJson.message !== "Not Found") {

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        
        if (profileJson) {
          let sortAscending = [...repoJson];
          sortAscending.sort((a, b) => a.stargazers_count - b.stargazers_count);
          setRepositories(sortAscending);
        }
      }
      else{
          setData(null);
          setRepositories(null);
      }

    } catch (e) {
      console.error(e);
    }
  };

    return(
        <UserDataContext.Provider value={{
            data,
            setData,
            username,
            repositories
        }}>
            <HeaderContainer>
                <SearchBar
                    username={username}
                    submitHandler={submitHandler}
                    onChangeHandler={onChangeHandler}
                />
            </HeaderContainer>
        </UserDataContext.Provider>
    )
}

export default Header;