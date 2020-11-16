import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const HeaderContainer = styled.header`
    display: flex;
    height: 70px;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 100%;
    background-color: #2d2d30;
`;

export const LogoLink = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

