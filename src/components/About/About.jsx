// import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="About">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="TO-DO: REPLACE"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Title</h3>
                            <p>
                                description description description description description description description description description description description description description description 

                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server-icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Title</h3>
                            <p>
                                description description description description description description description description description description description description description description 

                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui-icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Title</h3>
                            <p>
                                description description description description description description description description description description description description description description 

                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};