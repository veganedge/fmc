import classes from "./ItemCard.module.css";


const ItemCard = () => {
    return (
        <div className={classes.itemCardContainer}>
            <div className={classes.aboveImageContainer}>
                <p>$TOKENprice</p>
                <p>QtyAvail</p>
            </div>
            <img src="https://via.placeholder.com/150/1e1f21/3e4145?text=Item" alt="marketplace item"></img>
            <h3>Title</h3>
            <h5>DESCRIPTION/BENEFTIS go on these lines here</h5>
            <button>Purchase</button>
        </div>
    )
}

export default ItemCard;