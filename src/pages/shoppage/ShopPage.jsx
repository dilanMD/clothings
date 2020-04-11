import React from 'react'
import './ShopPage.scss'

import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import CollectionPage from '../collection/CollectionPage'

const ShopPage = ({ match }) => {
    return (
        <div className="shoppage">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default ShopPage