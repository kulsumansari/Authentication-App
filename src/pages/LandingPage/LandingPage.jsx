import { Link } from "react-router-dom";
import styles from'./LandingPage.module.css';

function LandingPage(){

    return(
        <div className={styles.header}>
            <div className={styles.section}>
                <h2>Let' Get Started</h2>
                <Link to= '/login' className={styles.btn}> Login </Link>
            </div>
        </div>
    )
}
export default LandingPage;