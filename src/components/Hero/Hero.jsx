// styling
import styles from "./Hero.module.css";
// components
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ryan </h1>
                <p className={styles.description}>
                    Texas A&M Computer Science graduate, Class of '23. <br/> 
                    I am pursuing a software engineer role.
                </p>
                <a href="mailto:ryankafka@devpro.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
                <img 
                    className={styles.heroImg}
                    src={getImageUrl("/hero/heroImage-rjk.png")} 
                    alt="hero-image"
                />
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    );
};