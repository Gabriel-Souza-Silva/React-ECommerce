import React, {Component} from 'react'
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

//Redux
import {connect} from 'react-redux'

//Resect Labrary
import {selectCartItems} from '../../redux/card/card.selectors'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)   

//#region Renderizando toda vez que um campo do state do redux é alterado
/*
const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

*/
//#endregion

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);