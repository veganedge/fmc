/* this component will replace all the img in Marketplace.js */

const ItemCard = () => {
    return (
        /* this class will replace the ( .marketplace-images-container img ) entry in App.css */
        <div className='item-card-container'>
            <img src="https://via.placeholder.com/150/1e1f21/3e4145?text=Item" alt="marketplace item"></img>
            <h3>Title</h3>
            <p className='remaining'>###</p>
            <h5>Qty Available</h5>
            <button>Purchase</button>
        </div>
    )
}

export default ItemCard;