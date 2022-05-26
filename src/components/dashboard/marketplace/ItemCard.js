/* Imported stylesheet */
import classes from "./ItemCard.module.css";


const ItemCard = () => {
    return (
        <div className={classes.itemCardContainer}>
            <div className={classes.aboveImageContainer}>
                <p className={classes.aboveImageContainerP}>$TOKENprice</p>
                <p className={classes.aboveImageContainerP}>QtyAvail</p>
            </div>
            <img src="https://via.placeholder.com/150/1e1f21/3e4145?text=Item" alt="marketplace item"></img>
            <h3 className={classes.itemTitle}>Title</h3>
            <h5 className={classes.itemDescription}>DESCRIPTION/BENEFTIS go on these lines here</h5>
            <button className={classes.itemButton}>Purchase</button>
        </div>
    )
}

export default ItemCard;