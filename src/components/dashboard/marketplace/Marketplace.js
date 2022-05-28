/* Importing custom components */
import ItemCard from "./ItemCard/ItemCard.js";
/* Imported stylesheet */
import classes from './Marketplace.module.css';


const Marketplace = () => {
    return (
        <div className={classes.marketplaceImagesContainer}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>  
        
    )
}

export default Marketplace;