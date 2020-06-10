import React from "react";
import { Link } from "react-router-dom";
import pica from '../../assets/overtone.jpg';
import styles from '../../styles/pageheader.module.css'
import { ROUTES } from "../../consts";
import TextareaAutosize from 'react-textarea-autosize';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
const doSomethingThenCall = () => {
    console.log("ka");

}

const Contact = () => {
    return (
        <main >
            <form className={styles.form} action="https://formspree.io/punbeatz@outlook.com"
                method="POST">

                <label>
                    Naam:
                    <input type="text" name="name" className={styles.input} />
                </label>
                <label>
                    Email:
                    <input type="email" name="_replyto" className={styles.input} />
                </label>
                <label>
                    Bericht:
                    <TextareaAutosize className={styles.input} />
                </label>
                {/* <AwesomeButton type="submit" value="Send">Primary</AwesomeButton> */}
                <AwesomeButton type="primary" className={styles.abutton}>Primary</AwesomeButton>



            </form>
        </main>

    );
};


export default Contact;
