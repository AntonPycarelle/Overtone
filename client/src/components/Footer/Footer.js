import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logonaam.svg';
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
            </div>
        </footer>

    );
};


export default Footer;
