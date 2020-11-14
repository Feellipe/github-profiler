import styled from 'styled-components';

export const RepositoriesListContainer = styled.div`

`

export const RepoSingle = styled.div`
    padding: 0.5rem;

`

export const RepoLink = styled.a`
    &:link,
    &:visited{
        color: #36a9e1;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid #36a9e1;
        padding: 3px;
        padding-left: 2px;
        transition: all .2s;
        width: max-content;
    }

    &:hover{
        background-color: #36a9e1;
        color: white;
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
        transform: translateY(-2px);
    }

    &:active{
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,.2);
        transform: translateY(0);
    }

`

