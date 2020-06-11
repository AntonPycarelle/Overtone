import React from "react";
import { Link } from "react-router-dom";
import pica from '../../assets/overtone.jpg';
import styles from '../../styles/pageheader.module.css'
import { ROUTES } from "../../consts";


const About = ({ items }) => {
    return (
        <header >
            <img src="/images/overtone.jpg" alt="Overtone Logo" className={styles.aboutpica}></img>
            {/* <p className={styles.abouttext}>Ik hou van kaas</p> */}
        </header>

    );
};


export default About;
