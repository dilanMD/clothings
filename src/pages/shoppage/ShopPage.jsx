import React, { Component } from 'react'
import './ShopPage.scss'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

class ShopPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className="shoppage">
                {collections.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage