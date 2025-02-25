// routing for multiple pages
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// particle effect for bg
import ParticleAnimation from 'react-particle-animation';


// styles
import styles from "./App.module.css";
// Error Boundary Component
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.jsx';
// components
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Workshop } from "./components/Workshop/Workshop.jsx";
import { Revamp } from "./components/Revamp/Revamp.jsx";
// other pages
import { NFLPlayoffs } from "./views/NFLPlayoffs/NFLPlayoffs.jsx";
import { EducationPage } from "./views/EducationPage/EducationPage.jsx";

function App() {
    return (
        <ErrorBoundary>
            <Router> 
                <Routes>
                    {/* MAIN PAGE */}
                    <Route path="/" element={
                        <div className={styles.App}>
                            {/* <ParticleAnimation 
                                numParticles={500}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%'}}
                            /> */}
                            <Revamp />
                            <Navbar />
                            <Hero />
                            {/* <About /> */}
                            {/* <Experience /> */}
                            <Projects />
                            <Workshop />
                            <Contact />
                        </div>
                    }/>
                    {/* NFL Playoffs Page */}
                    <Route path="/nfl-playoffs" element={<NFLPlayoffs />} /> {/* Add route for NFL Playoffs page */}
                    <Route path="/education" element={<EducationPage />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
}

export default App;