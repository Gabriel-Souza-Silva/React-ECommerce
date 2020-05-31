import React from 'react'
import './shop.styles.scss'

import {Route, Switch} from 'react-router-dom'


// import SHOP_DATA from './shop.data'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
//É possivel acessar match , location e history por que no app.js o ShoPage esta passando como parametro para route
const ShopPage = ({ match }) =>{
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );

}


export default ShopPage;