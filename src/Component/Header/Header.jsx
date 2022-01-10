import { Typography } from "@mui/material"
import { useState } from "react";
import logo from '../images/logo.png';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.Container}>
            <img className={styles.image} src={logo} width={35} height={35} alt=""/>
           <Typography variant="h5" >Covid Tracker </Typography> 
           <Typography color="textSecondary">(India)</Typography>
        </div>
    )
}

export default Header
