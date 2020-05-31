import React from 'react'
import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component'

//redux
import {connect} from 'react-redux'

//reselect
import { selectCollection } from '../../redux/shop/shop.selector'

//tem acesso ao match pq no shop ele é o component da tag Route
const CollectionPage = ({ collection }) => {
    console.log(collection)
    return(
        <div className="collection">
            <h2>COLLECTION PAGE</h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) =>({
    //curried function 
    /*
    Example
    const selectCollection = id => state => state.doSomething(id);
    
    selectCollection(3)(state);
    */
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);