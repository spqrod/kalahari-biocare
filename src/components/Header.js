import "../styles/header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../resources/logo.svg";
import whatsapp from "../resources/whatsapp-icon.svg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export default function Header() {


    const display = {
        handleBurgerMenuClick() {
            display.toggleMobileMenu();
        },
        handleCloseButtonForMobileClick() {
            display.toggleMobileMenu();
        },
        toggleMobileMenu() {
            const menuContainer = document.querySelector(".menuContainer");
            menuContainer.classList.toggle("revealed");
            const backdropForMobile = document.querySelector(".backdropForMobile");
            backdropForMobile.classList.toggle("revealed");
            const body = document.querySelector("body");
            body.classList.toggle("mobileMenuRevealed");
        },
        hideMobileMenuOnLoad() {
            const menuContainer = document.querySelector(".menuContainer");
            menuContainer.classList.remove("revealed");
            const backdropForMobile = document.querySelector(".backdropForMobile");
            backdropForMobile.classList.remove("revealed");
            const body = document.querySelector("body");
            body.classList.remove("mobileMenuRevealed");
        },
    }

    let location = useLocation();

    useEffect(() => {
        display.hideMobileMenuOnLoad();
    }, [location]);

    return (
        <header>

            <div className="logoContainer">
                <Link className="link" to="/">
                    <img src={logo}  className="logo" alt="logo" />
                </Link>
            </div>

            <nav className="menuContainer">
                <div className="closeButtonForMobile" onClick={display.handleCloseButtonForMobileClick}>
                    ╳
                </div>
                <NavLink to = "/products" >
                    Products
                </NavLink>
                <NavLink to = "/contact" >
                    Contact
                </NavLink>
                <NavLink to = "/about" >
                    About
                </NavLink>
            </nav>

            <div className="backdropForMobile"></div>

            <Link className="whatsAppButtonContainer" to="https://wa.me/46761191516" target="_blank" rel="noreferrer">
                <img className="whatsAppImg" src={whatsapp} alt="whatsapp icon" />
            </Link>

            <div className="burgerMenu" onClick={display.handleBurgerMenuClick}>
                <div className="burgerLine top"></div>
                <div className="burgerLine middle"></div>
                <div className="burgerLine bottom"></div>
            </div>

        </header>
    );
}