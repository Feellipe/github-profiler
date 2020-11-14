import React, {useState} from 'react';
import ProfileTable from '../../components/profileTable/profileTable.component'
import SearchBar from '../../components/searchBar/searchbar.component';

const ProfilePage = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = e => {
        setUsername(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();

        const profileFetch = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profileFetch.json();

        console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json()
        // console.log(repoJson);
 
        if(profileJson){
            setData(profileJson);

            let sortAscending = [...repoJson]
            sortAscending.sort((a,b) => a.stargazers_count - b.stargazers_count);
            setRepositories(sortAscending);
        }
    }

    return(
        <div>
username, onChangeHandler, submitHandler
            <SearchBar username={username} submitHandler={submitHandler} onChangeHandler={onChangeHandler}/>         
            <ProfileTable data={data} repositories={repositories}/>
        </div>
    );
};

export default ProfilePage;