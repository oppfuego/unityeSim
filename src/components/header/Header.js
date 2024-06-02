import React, { useState } from 'react';
import './Header.css';
import {ReactComponent as Logo} from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleBurgerClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseClick = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="header-container">
            <Link to="/">
                <Logo className="esync-logo"/>
            </Link>
            <div className="header-nav">
                <nav>
                    <Link className="nav-link" to="">Activate SIM</Link>
                    <Link className="nav-link" to="/pricing">Pricing</Link>
                    <Link className="nav-link" to="/coverage">Coverage</Link>
                    <Link className="nav-link" to="">FAQ</Link>

                    <button className="get-a-sim-button">Get a SIM</button>
                </nav>
                <section>
                    <Link className="nav-link" to="/sign-up">Login</Link>
                    <button className="header-option-button">
                        EN
                    </button>
                </section>
            </div>
            <div className="header-nav-mobile">
                <button className="sign-in-button">Sign In</button>
                <button className="burger-button" onClick={handleBurgerClick}>
                    <RxHamburgerMenu size={30}/>
                </button>
            </div>
            {sidebarOpen && (
                <div className="sidebar">
                    <button className="close-button" onClick={handleCloseClick}><FaTimes /></button>
                    <section>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/support">Support</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/log-in">Log In</Link>
                    </section>
                    <button className="get-started-button">Get started</button>
                </div>
            )}
        </div>
    );
};

export default Header;