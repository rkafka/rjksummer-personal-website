// styling
import styles from "./Contact.module.css";
//
import { getImageUrl } from "../../utils.js";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}> 
            <div className={styles.text}>
                <h2>Contact Me</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul  className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:ryankafka@devpro.com">ryankafka@devpro.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/ryan-j-kafka/">LinkedIn.com/ryan-j-kafka/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://www.github.com/rkafka">github.com/rkafka</a>
                </li>
            </ul>
        </footer>
    );
};