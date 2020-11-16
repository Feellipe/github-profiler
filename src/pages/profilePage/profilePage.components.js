import React, { useContext } from "react";
import ProfileTable from "../../components/profileTable/profileTable.component";

import UserDataContext from '../../context/user-data.context'

const ProfilePage = () => {
  const {data, repositories} = useContext(UserDataContext);


  return (
    <div>

      {data ? (
        <ProfileTable data={data} repositories={repositories} />       
      ) : (
        <p> User not Found</p>
      )}
    </div>
  );
};

export default ProfilePage;
