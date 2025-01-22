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
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>NFL Playoffs</h3>
                            <p>
                                description description description description description description description description description description description description description description 
                            </p>
                            <Link to="/nfl-playoffs">NFL Playoffs</Link> {/* Link to the NFL Playoffs page */}
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};