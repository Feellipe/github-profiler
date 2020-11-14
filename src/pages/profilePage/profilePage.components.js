import React, { useState } from "react";
import ProfileTable from "../../components/profileTable/profileTable.component";
import SearchBar from "../../components/searchBar/searchbar.component";

const ProfilePage = () => {
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

      if (profileJson.message !== "Not Found") {
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();

        setData(profileJson);
        if (profileJson) {
          let sortAscending = [...repoJson];
          sortAscending.sort((a, b) => a.stargazers_count - b.stargazers_count);
          setRepositories(sortAscending);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <SearchBar
        username={username}
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandler}
      />
      {data.message === "Not Found" ? (
        <SearchBar
          username={username}
          submitHandler={submitHandler}
          onChangeHandler={onChangeHandler}
        />
      ) : (
        <ProfileTable data={data} repositories={repositories} />
      )}
    </div>
  );
};

export default ProfilePage;
