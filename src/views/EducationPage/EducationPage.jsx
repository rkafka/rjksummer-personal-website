import { useNavigate } from "react-router-dom";  // Import useNavigate hook

import styles from './EducationPage.module.css'; // Import styles for this page

export const EducationPage = () => {

  const navigate = useNavigate();  // Initialize the navigate function

  const handleBackClick = () => {
    navigate("/");  // Navigate to the main page ("/")
  };

  return (
    <section className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        Back to Main
      </button>


      <h1 className={styles.title}>
        Academics
      </h1>
      <p className={styles.description}>
        [SUBTITLE]
      </p>

        <div className={styles.body}>
            <h2>Previous Education</h2>
            <div className={styles.educationList}>
                <p>test</p>
                <div className={styles.educationListItem} id="tamu">
                    <h3>
                        Texas A&M University
                    </h3>
                    <p>
                    
                    </p>
                </div>
            </div>
        </div>
      




    </section>
  );
}