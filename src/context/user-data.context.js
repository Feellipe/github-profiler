import {createContext} from 'react';

const UserDataContext = createContext({
    data: null,
    setData: () => {},
    username: null,
    repositories: null,

})

export default UserDataContext;