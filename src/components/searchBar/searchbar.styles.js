import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 20%;

  @media (max-width: 850px) {
    width: 50%;
    margin: 2rem auto;
  }
`;

export const SearchInput = styled.input``;

export const SearchButton = styled.button`
  &,
  &:link,
  &:visited {
    display: inline-block;

    outline: none;
    border-radius: 0rem;
    font-size: 1rem;
    padding: 1.5rem 2rem;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    background-color: white;
    transition: all 0.2s;
    cursor: pointer;
    border: none;
    animation: moveInBottom 1s ease-out;
    animation-fill-mode: backwards;

    @keyframes moveInBottom {
      0% {
        opacity: 0;
        transform: translateX(10rem);
      }
      60% {
        transform: translateY(-0.5rem);
        transform: translateX(1rem);
      }
      90% {
        transform: translateY(-1rem);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &:focus {
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 0.7rem rgba(0, 0, 0, 0.2);
    }

    &:hover {
      box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }
  }
`;
