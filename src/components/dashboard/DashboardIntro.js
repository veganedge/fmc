// Imported stylesheet
import classes from './DashboardIntro.module.css';


const DashboardIntro = () => {
    return(
        <div className={classes.dashboardIntro}>
            <h1>You are now logged into the Member Dashboard</h1>
            <h2>Choose a tool from the left menu</h2>
        </div>
    );
}

export default DashboardIntro;