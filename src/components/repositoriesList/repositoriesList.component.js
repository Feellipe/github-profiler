import React, {useMemo} from 'react';
import {
    RepoLink,
    RepositoriesListContainer,
    RepoSingle } from './repositoriesList.styles'

const RepositoriesList = ({repositories, sortDirection}) => {

    const finalSortedRepositories = useMemo(() => {
        let sortedRepositories = [...repositories];
        if(repositories.length > 0){    
            sortedRepositories.sort((a, b) => {
                console.log(a.stargazers_count)
                if(a.stargazers_count < b.stargazers_count){
                    return sortDirection === 'Asc' ? -1 : 1;
                }
                if( a.stargazers_count > b.stargazers_count) {
                    return sortDirection === 'Des' ? 1 : -1
                }
                return 0;
            })
        }
        return sortedRepositories;
    }, [repositories, sortDirection])

    return(
        <div>{finalSortedRepositories.map(repo => (
            <RepoSingle key={repo.name}>
                   <span>{repo.stargazers_count}</span> <RepoLink href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</RepoLink> 
            </RepoSingle>
        ))}</div>
    )
} 

export default RepositoriesList;