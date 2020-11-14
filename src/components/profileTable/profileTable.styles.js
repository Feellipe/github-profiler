import styled from "styled-components";

export const ProfileTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0 auto;
  padding: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(1rem, 15rem));
    padding: 0;
  }

  //A escolha do grid ao inves da table é para poder ter mais controle sobre as células e poder reformular no mobile com pouco código,
  //já que tabelas horizontais tem experiencias ruims em telas menores
`;
export const ImgElement = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 99px;

  @media (max-width: 850px) {
    border-radius: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SortButton = styled.button`
  border: none;
  background-color: white;
`;

export const TableHeadContainer = styled.div`
  // future display sticky head
  grid-column: 1/8;
  grid-row: 1/2;
`;

export const TableHeadCell = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 16px;

  @media (max-width: 850px) {
    border-bottom: 0.5px #d6d6d6 solid;
    padding: 1.5rem;
  }
`;

export const TableBodyContainer = styled.div``;

export const AvatarCell = styled(TableHeadCell)`
    grid-column: 1/2;

    @media (max-width: 850px) {
    grid-column: 1/3;
    grid-row: 1/2;
    padding: 0;
  }
    /* grid-row: ${({ gridRow }) => `(${gridRow})`}; */
`;

export const NameCell = styled(TableHeadCell)`
  grid-column: 2/3;

  @media (max-width: 850px) {
    grid-column: auto;
    grid-row: 2/3;
  }
`;

export const EmailCell = styled(TableHeadCell)`
  grid-column: 3/4;

  @media (max-width: 850px) {
    grid-column: auto;
    grid-row: 3/4;
  }
`;

export const BioCell = styled(TableHeadCell)`
  grid-column: 4/5;

  @media (max-width: 850px) {
    grid-column: auto;
    grid-row: 4/5;
  }
`;

export const FollowersCell = styled(TableHeadCell)`
  grid-column: 5/6;

  @media (max-width: 850px) {
    grid-column: auto;
    grid-row: 5/6;
  }
`;

export const FollowingCell = styled(TableHeadCell)`
  grid-column: 6/7;

  @media (max-width: 850px) {
    grid-column: auto;
    grid-row: 6/7;
    border-bottom: 0.5px #d6d6d6 solid;
  }
`;

export const RepoCell = styled(TableHeadCell)`
  grid-column: 7/8;

  @media (max-width: 850px) {
    grid-column: auto;
    grid-row: 7/8;
  }
`;
