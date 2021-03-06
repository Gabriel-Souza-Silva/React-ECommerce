import React from 'react'
import './collection-item.styles.scss'
import CustomButtom from '../custom-button/custom-button.component'

//Redux
import {connect} from 'react-redux'
import {addItem} from '../../redux/card/card.actions'


const CollectionItem = ({item,addItem}) => {

    const {name,price,imageUrl} = item;

    return(
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButtom 
                className='custom-button'
                onClick={()=> addItem(item)} 
                inverted>
                Add to card
            </CustomButtom>
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)

