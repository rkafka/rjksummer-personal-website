import { useNavigate } from "react-router-dom";  // Import useNavigate hook

import styles from './NFLPlayoffs.module.css'; // Import styles for this page

export const NFLPlayoffs = () => {

  const navigate = useNavigate();  // Initialize the navigate function

  const handleBackClick = () => {
    navigate("/");  // Navigate to the main page ("/")
  };

  return (
    <section className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        Back to Main
      </button>


      <h2 className={styles.title}>NFL Playoffs</h2>
      <p className={styles.description}>
        Welcome to the NFL Playoffs page! Here, you can explore exciting playoff data, 
        teams, and results. Stay tuned for updates!
      </p>

      {/* You can add more content related to the NFL playoffs here */}

      




    </section>
  );
}