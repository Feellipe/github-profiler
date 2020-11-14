import styled from 'styled-components'


export const SearchBarContainer = styled.div`
    display: flex;
`;

export const searchInput = styled.input`

`;

export const searchButton = styled.button`
    &,
    &:link,
    &:visited {
        display: inline-block;
        
        border-radius: 10rem;
        font-size: 1.6rem;
        padding: 1.5rem 4rem;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        
        transition: all .2s;

        //Change for the <button>
        cursor: pointer;
        border: none;
}

    &:hover{
        box-shadow: 0 .1rem .2rem rgba(0,0,0,.2);
        transform: translateY(-3px);

        &::after{
            opacity: 0;
            transform: scaleX(1.4) scaleY(1.6);
        }
    }

    &:active,
    &:focus {
        transform: translateY(-1px);
        box-shadow: 0 .5rem .7rem rgba(0,0,0,.2);

    }

    &::after{
        content: "";
        border-radius: 10rem;
        display: inline-block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
        
        transition: all .4s;
    }

    /* &--white{
        background-color: white;
        color: darkgray;

        &::after{
            background-color:white;
        }
    }

    &--animated{
        animation: moveInBottom 1s ease-out;
        animation-fill-mode: backwards;
    } */

`;