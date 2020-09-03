import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './ProfileCard.module.css';


// import style from "../../style/pageheader.module.css";

const ProfileCard = ({ name, role, telNumber, portfolioLink, handle }) => {
    return (
        <article className={styles.profileWrapper}>
            <img className={styles.foto} width="100" src={"/images/" + name + "-pic.jpg"} alt={name} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.role}>{role}</p>
            <a className={styles.link} rel="noopener noreferrer" target="_blank" href={"https://www.instagram.com/" + handle}>@{handle}</a>
            <a className={styles.link} href={"tel:" + telNumber}>{telNumber}</a>
            <a className={styles.portfolio} rel="noopener noreferrer" target="_blank" href={portfolioLink}>Portfolio</a>
        </article>
    );
};

export default ProfileCard;
