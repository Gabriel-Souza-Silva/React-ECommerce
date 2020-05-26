import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

//redux
import {connect} from 'react-redux'

//reselect 
import {createStructuredSelector} from 'reselect'
import {selectDiretorySections} from '../../redux/directory/directory.selector'

const Directory = ({sections}) => (
    <div className="directory-menu">
        {
          /*
            this.state.sections.map(({title, imageUrl,id,size, linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} history={this.props.history}/>
            ))

            PODE SER SUBSTITUIDO POR
          */
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))

          
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDiretorySections
})

export default connect(mapStateToProps)(Directory)