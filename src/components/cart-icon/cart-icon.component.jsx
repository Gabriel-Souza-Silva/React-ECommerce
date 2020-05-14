import React from 'react'

//Redux
import {connect} from 'react-redux'
import {toogleCartHidden} from '../../redux/card/card.actions'

import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'


const CartIcon = ({toogleCartHidden}) => (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
)


const mapDispatchToProps = dispacth => ({
    toogleCartHidden: () => dispacth(toogleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps
) (CartIcon);
