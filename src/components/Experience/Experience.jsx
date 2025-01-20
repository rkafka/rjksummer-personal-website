// importing styles
import styles from "./Experience.module.css";
// importing utils
import { getImageUrl } from "../../utils";
// importing data (JSON files)
import skills  from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
    return (
        <section className={styles.container} id="Experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                {/* SKILLS */}
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={styles.skillImageContainer}>
                                    <img 
                                        src={getImageUrl(skills.imageSrc)} 
                                        alt={skills.title}
                                        className={styles.skillImage}
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                {/* HISTORY */}
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return <li key={id} className={styles.historyItem}>
                            <img 
                                src={getImageUrl(history.imageSrc)} 
                                alt={history.organization}
                            />
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}
                                </ul>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
};