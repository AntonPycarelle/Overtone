import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logonaam.svg';
import styles from '../../styles/pageheader.module.css'
import hover from '../../styles/hover.module.css'

import { ROUTES } from "../../consts";


const PageHeader = ({ items }) => {
  return (
    <header >
      <Link to={ROUTES.home}><img src={logo} alt="Overtone Logo" className={styles.logo}></img></Link>


      <nav className={styles.nav}>
        <Link to={ROUTES.home} className={hover.hvrShrink, styles.navitem}>Home</Link>
        {/* <Link to={ROUTES.portfolio} className={styles.navitem}>Portfolio</Link> */}
        <Link to={ROUTES.about} className={styles.navitem}>Over ons</Link>
        <Link to={ROUTES.contact} className={styles.navitem}>Contact</Link>
      </nav>
    </header >

  );
};


export default PageHeader;
