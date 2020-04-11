import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const convertObjToArray = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectSingleCollection = collectionId => createSelector(
    [selectShopCollections],
    collections => collections[collectionId]
)
