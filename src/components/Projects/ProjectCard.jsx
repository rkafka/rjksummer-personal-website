// import React from "react";

//
import styles from "./ProjectCard.module.css";
//
import { getImageUrl } from "../../utils.js";

export const ProjectCard = ({
    project : {title, imageSrc, description, skills, demo, source}
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img 
                    src={getImageUrl(imageSrc)} 
                    alt={`Image of ${title}`} 
                    className={styles.image}
                />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
    );
};