// styling
import styles from "./Navbar.module.css";
// components
import {getImageUrl} from "../../utils.js";
// react tools
import {useState} from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">rjksummer</a> 
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    );
};