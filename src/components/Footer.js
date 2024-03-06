import "../styles/footer.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../resources/logo.svg";
import whatsappIcon from "../resources/whatsapp-icon.svg";
import facebookIcon from "../resources/facebook-icon.svg";
import locationIcon from "../resources/location-icon.svg";
import callIcon from "../resources/call-icon.svg";
import mailIcon from "../resources/mail.svg";

export default function Footer() {
    return (
        <footer>

            <Link className="logoContainer" to="/">
                <img src={logo}  className="logo" alt="logo" />
            </Link>

            <div className="contactsContainer">
                <div className="contactContainer">
                    <a className="text" href="tel:+260977521516" target="_blank" rel="noreferrer">
                        <img className="icon" src={callIcon} alt="phone icon" />
                        <h6>+260 977521516</h6>
                    </a>
                </div>
                <div className="contactContainer">
                    <a className="text" href="mailto:info@kalaharibiocare.com">
                        <img className="icon" src={mailIcon} alt="phone icon" />
                        <h6>info@kalaharibiocare.com</h6>
                    </a>
                </div>
                <div className="contactContainer">
                    <img className="icon" src={locationIcon} alt="address icon" />
                    <h6>
                        PO Box 51386, Ridgeway, Lusaka, Zambia
                    </h6>
                </div>
            </div>

            <nav className="menuContainer">
                <NavLink to = "/" >
                    Home
                </NavLink>
                <NavLink to = "/products" >
                    Products
                </NavLink>
                <NavLink to = "/contact" >
                    Contact
                </NavLink>
                <NavLink to = "/about" >
                    About
                </NavLink>
                <NavLink to = "/privacy" >
                    Privacy Policy
                </NavLink>
                <NavLink to = "/terms" >
                    Terms Of Service
                </NavLink>
            </nav>

            <div className="socialLinksContainer">
                <Link to="https://wa.me/260977521516" target="_blank" rel="noreferrer">
                    <img src={whatsappIcon} alt="whatsapp icon" />
                </Link>
                <Link to="https://www.facebook.com/p/Kalahari_biocare-100064365781430/" target="_blank" rel="noreferrer">
                    <img src={facebookIcon} alt="facebook icon" />
                </Link>
            </div>

            <p className="copyright">
                Copyright © { new Date().getFullYear() } Kalahari BioСare
            </p>

        </footer>
    );
}