import "../styles/header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../resources/logo.svg";
import whatsapp from "../resources/whatsapp-icon.svg";

export default function Header() {
    return (
        <header>

            <Link className="logoContainer" to="/">
                <img src={logo}  className="logo" alt="" />
            </Link>

            <nav className="menuContainer">
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

            <Link className="whatsAppButtonContainer" to="https://wa.me/46761191516">
                <img className="whatsAppImg" src={whatsapp} alt="" />
            </Link>

        </header>
    );
}