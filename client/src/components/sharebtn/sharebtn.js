import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logonaam.svg';
import hover from '../../styles/hover.module.css'
import { ROUTES } from "../../consts";
import { FacebookButton } from "react-social-sharebuttons";



const Sharebtn = () => {
    return (
        <FacebookButton share url="https://www.facebook.com/OvertoneDesigns" />,

        <p>ss</p>
    );
};


export default Sharebtn;
