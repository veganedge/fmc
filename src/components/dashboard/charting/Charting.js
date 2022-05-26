import classes from './Charting.module.css';

const Charting = () => {
    return (
        <div>
            <div className={classes.chartPlaceholder}>
                <img src="https://via.placeholder.com/1200x600/1e1f21/3e4145?text=CHART" alt="placeholder of chart"></img>
            </div>
            <div className={classes.buttonContainer}>
                <button>Button 1</button>
                <button>Button 4</button>
                <button>Button 2</button>
                <button>Button 3</button>
                <button>Button 5</button>
            </div>
        </div>
    )
}

export default Charting;