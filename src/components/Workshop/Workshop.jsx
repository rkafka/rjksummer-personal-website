// Routing between pages
import { Link } from "react-router-dom"; 

// styling
import styles from "./Workshop.module.css";
//
import { getImageUrl } from "../../utils.js";


export const Workshop = () => {
    return (
        <section className={styles.container} id="Workshop">
            <h2 className={styles.title}>The Workshop</h2>
            <img
                src={getImageUrl(`workshop/workshop-bg-1.jpg`)}
                alt="Workshop Background Image"
                className={styles.bgImage}
            />
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <Link to="/nfl-playoffs" className={styles.aboutItem}>
                        <li className={styles.aboutItemText}>
                                <h3>NFL Playoffs</h3>
                                <p>?</p>
                        </li>
                    </Link>
                    <Link to="/education" className={styles.aboutItem}>
                        <li className={styles.aboutItemText}>
                                <h3>Education</h3>
                                <p>A webpage dedicated to my education history.</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </section>
    );
};