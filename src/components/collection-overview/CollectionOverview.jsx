import React from 'react'
import './CollectionOverview.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { convertObjToArray } from '../../redux/shop/shopSelectors'

import CollectionPreview from '../collection-preview/CollectionPreview'

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: convertObjToArray
})

export default connect(mapStateToProps)(CollectionOverview)