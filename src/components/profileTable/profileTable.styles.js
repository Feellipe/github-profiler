import styled from 'styled-components';

export const ProfileTableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: 0 auto;
    padding: 3rem;

    //A escolha do grid ao inves da table é para poder ter mais controle sobre as células e poder reformular no mobile com pouco código, 
    //já que tabelas horizontais tem experiencias ruims em telas menores

` 
export const ImgElement = styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 99px;
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

`;

export const TableBodyContainer = styled.div`


`;

export const AvatarCell = styled(TableHeadCell)`
    grid-column: 1/2;
    /* grid-row: ${({ gridRow }) => `(${gridRow})`}; */
`;

export const NameCell = styled(TableHeadCell)`
    grid-column: 2/3;
`;

export const EmailCell = styled(TableHeadCell)`
    grid-column: 3/4;
`;

export const BioCell = styled(TableHeadCell)`
    grid-column: 4/5;
`;

export const FollowersCell = styled(TableHeadCell)`
    grid-column: 5/6;
`;

export const FollowingCell = styled(TableHeadCell)`
    grid-column: 6/7;
`;

export const RepoCell = styled(TableHeadCell)`
    grid-column: 7/8;
`;