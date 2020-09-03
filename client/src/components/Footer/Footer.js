import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/pageheader.module.css'
import { ROUTES } from "../../consts";


const Footer = ({ items }) => {
    return (
        <footer >
            <div className={styles.normalFooter}>
                <img src="/logonaam-alt.svg" alt="Overtone Logo" className={styles.footerlogo}></img>
                <ul className={styles.normalFooterul}>
                    <li className={styles.normalFooterItem}>
                        <Link className={styles.normalFooterItemtext} to={ROUTES.home}>Home</Link>
                    </li>
                    <li className={styles.normalFooterItem}>
                        <Link className={styles.normalFooterItemtext} to={ROUTES.about}>Over Ons</Link>
                    </li>
                    <li className={styles.normalFooterItem}>
                        <Link className={styles.normalFooterItemtext} to={ROUTES.contact}>Contact</Link>
                    </li>
                </ul>
                {/* <div className={styles.asideGridcontent}>
                    <h3 className={styles.title2}>Contact Info</h3>
                    <p className={styles.tel}>Driekerkenstraat 52</p>
                    <p className={styles.tel}>8501 Kortrijk</p>
                    <a className={styles.tel} href="tel:+32470602277">+32470602277</a>
                </div> */}
            </div>
        </footer>

    );
};


export default Footer;
