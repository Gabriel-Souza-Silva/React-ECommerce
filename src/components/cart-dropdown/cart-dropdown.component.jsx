import React, {Component} from 'react'
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

//Redux
import {connect} from 'react-redux'

//Reselect Labrary
import {selectCartItems} from '../../redux/card/card.selectors'
import {createStructuredSelector} from 'reselect'
import {toogleCartHidden} from '../../redux/card/card.actions'
 
//react-router-dom
import {withRouter} from 'react-router-dom'

//dispatch é passada como props quando o connect tem o segundo argumento(mapDispatchToProps) como nulo
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length 
                ? 
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )
                :
                    <span className="empty-message">Your cart is empty</span>

            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout');
            dispatch(toogleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)   

//#region Renderizando toda vez que um campo do state do redux é alterado
/*
const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

*/
//#endregion

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

//COMANDO NECESSÁRIO PARA RECEBER PROPRIEDADES DE ROTA POR MEIO DAS PROPS(withRouter)
//UTILIZA NESSE CASO PARA TER ACESSO AO HISTORY E IR PARA A PAGINA DE CHECKOUT
export default withRouter(connect(mapStateToProps)(CartDropdown));