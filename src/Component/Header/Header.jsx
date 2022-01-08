import { Typography } from "@mui/material"
import { useState } from "react";
import logo from '../images/logo.png';
import styles from "./Header.module.css"

const Header = () => {
    const [color, setcolor] = useState('transparent')
    const changeNavbarColor = () =>{
        if(window.scrollY >= 54){
            setcolor('#e6e6e6');
        }
        else{
            setcolor('transparent');
        }
     };
     window.addEventListener('scroll', changeNavbarColor);
    return (
        <div className={styles.Container} style={{background: color}}>
            <img className={styles.image} src={logo} width={35} height={35} alt=""/>
           <Typography variant="h5" >Covid Tracker </Typography> 
           <Typography color="textSecondary">(India)</Typography>
        </div>
    )
}

export default Header
