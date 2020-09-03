import React from "react";
import styles from './contact.module.css'
import TextareaAutosize from 'react-textarea-autosize';


const Contact = () => {
    return (
        <main className={styles.contactWrapper}>
            <h2 className={styles.formTitle}>Contacteer Ons</h2>
            <form className={styles.form} action="https://formspree.io/info@overtone.be"
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



            </form>
        </main>

    );
};


export default Contact;
