import React from 'react'

//Redux
import {connect} from 'react-redux'
import {toogleCartHidden} from '../../redux/card/card.actions'

//Reselect library from cache
import {selectCartItemsCount} from '../../redux/card/card.selectors'
import {createStructuredSelector} from 'reselect'

import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'


const CartIcon = ({toogleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispacth => ({
    toogleCartHidden: () => dispacth(toogleCartHidden())
})

//incluior o numero no logo 
//#region Renderizando toda vez que um campo do state do redux é alterado
/*

//mesmo  o do user
const mapStateToProps = ({cart : {cartItems}}) =>({
    itemCount: cartItems.reduce((accumulatedQuantity, cartItems) => 
        accumulatedQuantity + cartItems.quantity, 
        0
    )
})
*/

//#endregion

//Utilizando reselect para evitar render desnecessário

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CartIcon);
