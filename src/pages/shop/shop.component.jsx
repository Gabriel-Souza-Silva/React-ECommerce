import React from 'react'
import './shop.styles.scss'


// import SHOP_DATA from './shop.data'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = () =>{

    return (
        <div className="shop-page">
            <CollectionsOverview/>
        </div>
    )

}


export default ShopPage;