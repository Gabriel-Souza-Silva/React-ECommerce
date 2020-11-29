import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.utils'

import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

//Reselect 
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/card/card.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'


//styled- components
import {HeaderContainer,
        LogoContainer,
        OptionsContainer,
        OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={()=> auth.signOut()}> SIGN OUT </OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </HeaderContainer>
)

//#region Renderizando toda vez que um campo do state do redux é alterado
/*
const mapStateToProps = ({user: {currentUser},cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden
});
*/
//#endregion

//Utilzia o createStructuredSelector para facilitar a escrita de valor: metodo(state)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden 
});


export default connect(mapStateToProps)(Header);