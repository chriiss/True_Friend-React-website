import React, { useState, useEffect } from 'react';
import Styles from "../../../styles/App.module.scss";
import DataJson from "../../../data/DataJson.json";
import ButtonMenu from './buttonMenu/ButtonMenu';
import List from "./list/List";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [stickyNav, setStickyNav]= useState(false);
    const dataNavbar = DataJson.navbarComponent;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleScroll = () => {
        window.pageYOffset >= 250 ? setStickyNav(true) : setStickyNav(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    })

    return(
        <nav className={`${Styles.d_flex} ${Styles.navbar} ${stickyNav ? `${Styles.onScroll}` : `${Styles.navbar}`}`}>
            <img src={dataNavbar.logo.link} alt={dataNavbar.logo.name}/>
            <div className={Styles.navbar_menu_mobile}>
                <ButtonMenu toggleMenu={toggleMenu}/>
            </div>
            <ul className={`${Styles.d_flex} ${Styles.fd_column} ${Styles.navbar_list} ${isOpen ? Styles.navbar_list_show : ""}`}>
                <List dataNavbar={dataNavbar}/>
            </ul>
        </nav>

    )
}

export default Navbar;