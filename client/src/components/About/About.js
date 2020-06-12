import React from "react";
import styles from '../../styles/pageheader.module.css'


const About = ({ items }) => {
    return (
        <header >
            <img src="/images/overtone.jpg" alt="Overtone Logo" className={styles.aboutpica}></img>
            {/* <p className={styles.abouttext}>Ik hou van kaas</p> */}
            <h2>Over Ons</h2>
            <p className={styles.abouttext}>Wij zijn 2 studenten, Anton Pycarelle en Vic Debonne, die al enkele jaren <strong>ervaring</strong> hebben in de grafische sector. Wij studeren samen Digital Design & Development aan Howest Kortrijk en werken al 2 jaar samen in Overtone.
            Na deze jaren ervaring is de <strong> grafische sector, webdesign </strong> en de hele online wereld meer geworden dan enkel een studie. Dag in dag uit zijn wij bezig met het grafische en daarom kunne wij U altijd <strong> het laatste nieuwe </strong> op grafisch vlak bieden.
Een digitale of visuele oplossing nodig voor uw idee? Denk aan een <strong> website, marketing voor uw bedrijf, een poster, business cards, een gloednieuwe huisstijl,...</strong> Dan is Overtone een perfecte oplossing!</p>
        </header>

    );
};


export default About;
