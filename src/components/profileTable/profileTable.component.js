import React, { useState } from "react";
import RepositoriesList from "../repositoriesList/repositoriesList.component";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import {
  ProfileTableContainer,
  TableBodyContainer,
  TableHeadContainer,
  NameCell,
  AvatarCell,
  EmailCell,
  BioCell,
  FollowersCell,
  FollowingCell,
  RepoCell,
  SortButton,
  ImgElement
} from "./profileTable.styles";

const ProfileTable = ({ data, repositories }) => {
  const [sortTo, setSortTo] = useState("Asc");

  const handleSort = () => {
    let newSortTo = sortTo;
    newSortTo === "Asc" ? (newSortTo = "Des") : (newSortTo = "Asc");
    setSortTo(newSortTo);
  };

  return (
    <ProfileTableContainer>
      <AvatarCell>Avatar</AvatarCell>
      <NameCell>Nome</NameCell>
      <EmailCell>Email</EmailCell>
      <BioCell>Bio</BioCell>
      <FollowersCell>Seguidores</FollowersCell>
      <FollowingCell>Seguindo</FollowingCell>
      <RepoCell>
        <SortButton onClick={handleSort}>
          {sortTo === "Asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
          Repositórios
        </SortButton>
      </RepoCell>

      <AvatarCell>
        {!data.avatar_url ? (
          ""
        ) : (
          <ImgElement src={data.avatar_url} alt={data.avatar_url} />
        )}
      </AvatarCell>
      <NameCell>{data.name}</NameCell>
      <EmailCell>{data.email}</EmailCell>
      <BioCell>{data.bio}</BioCell>
      <FollowersCell>{data.followers}</FollowersCell>
      <FollowingCell>{data.following}</FollowingCell>
      <RepoCell>
        <RepositoriesList repositories={repositories} sortDirection={sortTo} />
      </RepoCell>
    </ProfileTableContainer>
  );
};

export default ProfileTable;
