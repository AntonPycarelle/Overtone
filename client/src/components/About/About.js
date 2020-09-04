import React from "react";
import styles from '../../styles/pageheader.module.css'
import ProfileCard from "../ProfileCard/ProfileCard";

const About = ({ items }) => {
    return (
        <div>
            <main >
                <img src="/images/overtone.jpg" alt="Overtone Logo" className={styles.aboutpica}></img>
                {/* <p className={styles.abouttext}>Ik hou van kaas</p> */}
                <h2>Over Ons</h2>
                <p className={styles.abouttext}>Wij zijn 2 studenten, Anton Pycarelle en Vic Debonne, die al enkele jaren <strong>ervaring</strong> hebben in de grafische sector. Wij studeren samen Digital Design & Development aan Howest Kortrijk en werken al 2 jaar samen in Overtone.
            Na deze jaren ervaring is de <strong> grafische sector, webdesign </strong> en de hele online wereld meer geworden dan enkel een studie. Dag in dag uit zijn wij bezig met het grafische en daarom kunne wij U altijd <strong> het laatste nieuwe </strong> op grafisch vlak bieden.
Een digitale of visuele oplossing nodig voor uw idee? Denk aan een <strong> website, marketing voor uw bedrijf, een poster, business cards, een gloednieuwe huisstijl,...</strong> Dan is Overtone een perfecte oplossing!</p>

                <h2>Ons Team</h2>
                <div className={styles.team}>
                    <ProfileCard name="anton" role="CEO / Designer" telNumber="+32476289078" portfolioLink="https://www.behance.net/antonpycarelle" handle="antonpycarelle" />
                    <ProfileCard name="vic" role="COO / Graphic designer" telNumber="+32470602277" portfolioLink="https://vicdebonne.myportfolio.com/ " handle="vicdebonne" />
                </div>



            </main>

            <aside>
                <h2 className={styles.grayTxt}>In Samenwerking met</h2>
                <img className={styles.logoKrew} width="10%" src="images/krewcollective_logo_grey.png" alt="Kerwcollective" />
            </aside>
            {/* <aside className={styles.asideGrid}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1260.2779466519287!2d3.2280300396873676!3d50.82086646968845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33b42a60ea63b%3A0x824eb7ae4eb81a88!2sovertone.!5e0!3m2!1sen!2sbe!4v1592215090213!5m2!1sen!2sbe"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    className={styles.asideGridmap} />
            </aside> */}
        </div>
    );
};


export default About;
