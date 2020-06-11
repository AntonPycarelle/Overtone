import React from "react";
import { Link } from "react-router-dom";
import pica from '../../assets/overtone.jpg';
import styles from '../../styles/pageheader.module.css'
import { ROUTES } from "../../consts";
import TextareaAutosize from 'react-textarea-autosize';


const Contact = () => {
    return (
        <main >
            <h2 className={styles.formTitle}>Contacteer Ons</h2>
            <form className={styles.form} action="https://formspree.io/punbeatz@outlook.com"
                method="POST">

                <label>
                    <p>Naam</p>
                    <input placeholder="Anton" type="text" name="name" className={styles.input} />
                </label>
                <label>
                    <p>Email</p>
                    <input placeholder="adress@mail.be" type="email" name="_replyto" className={styles.input} />
                </label>
                <label>
                    <p>Bericht</p>
                    <TextareaAutosize placeholder="Bericht" className={styles.input} />
                </label>
                <button className={styles.formbtn} type="submit" value="Send">Versturen</button>
                {/* <AwesomeButton type="submit" value="Send">Primary</AwesomeButton> */}



            </form>
        </main>

    );
};


export default Contact;
