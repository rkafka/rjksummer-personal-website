// import React from "react"

// styling
import styles from "./Projects.module.css";
// components
import { ProjectCard } from "./ProjectCard.jsx";
// data
import projects from "../../data/projects.json";

export const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project}/>;
                })}
            </div>
        </section>
    );
};