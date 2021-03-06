const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'hats',
            linkUrl: 'shop/hats',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLzS5nqk6VlF-W1eJhJkhV-pXnI_NTrdM1nd1eEaYccw2RQiuE&usqp=CAU'
        },
        {
            id: 2,
            title: 'jackets',
            linkUrl: 'shop/jackets',
            imageUrl: 'https://previews.123rf.com/images/klyots/klyots1808/klyots180800050/106492717-shopping-sale-mall-concept-denim-jeans-clothes-on-store-shelves-faux-leather-jackets.jpg'
        },
        {
            id: 3,
            title: 'sneakers',
            linkUrl: 'shop/sneakers',
            imageUrl: 'https://www.n1citymall.co.za/images/n1-city-mall-converse-nike-adidas-puma-vans-shoes.jpg'
        },
        {
            id: 4,
            title: 'women',
            linkUrl: 'shop/womens',
            size: 'large',
            imageUrl: 'https://files.stocky.ai/uploads/2019/02/image-Women-shopping-in-mall-stocky-ai-26206050.jpg'
        },
        {
            id: 5,
            title: 'men',
            linkUrl: 'shop/mens',
            size: 'large',
            imageUrl: 'https://st.depositphotos.com/1016231/4630/i/950/depositphotos_46308145-stock-photo-three-young-male-fashion-metraseksuals.jpg'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer