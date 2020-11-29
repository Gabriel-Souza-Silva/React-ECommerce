import styled,{css} from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

//Modo para estilizar um componente, no caso Link 
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

//${OptionContainerStyles} é para css comuns em alguns elementos 
/*
export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;
*/
//Com codigo igual pode se passar a propriedade 'as' (ex: as='div')

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

