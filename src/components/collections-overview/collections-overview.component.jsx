import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

//redux
import {connect} from 'react-redux'

//reselct
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map( ({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>                
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);

