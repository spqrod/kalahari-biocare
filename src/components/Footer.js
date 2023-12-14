import "../styles/footer.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../resources/logo.svg";
import whatsappIcon from "../resources/whatsapp-icon.svg";
import instagramIcon from "../resources/instagram-icon.svg";
import facebookIcon from "../resources/facebook-icon.svg";
import locationIcon from "../resources/location-icon.svg";
import callIcon from "../resources/call-icon.svg";


export default function Footer() {
    return (
        <footer>

            <Link className="logoContainer" to="/">
                <img src={logo}  className="logo" alt="" />
            </Link>

            <div className="contactsContainer">
                <div className="phoneContainer">
                    <img className="icon" src={callIcon} alt="" />
                    <a className="text" href=""><h6>
                        +260 977521516
                    </h6></a>
                </div>
                <div className="addressContainer">
                    <img className="icon" src={locationIcon} alt="" />
                    <a className="text" href=""><h6>
                        PO Box 51386, Ridgeway, Lusaka, Zambia
                    </h6></a>
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
                <Link to="https://wa.me/46761191516">
                    <img src={whatsappIcon} alt="" />
                </Link>
                <Link to="https://wa.me/46761191516">
                    <img src={facebookIcon} alt="" />
                </Link>
                <Link to="https://wa.me/46761191516">
                    <img src={instagramIcon} alt="" />
                </Link>
            </div>

            <p className="copyright">
                Copyright © { new Date().getFullYear() } Kalahari BioСare
            </p>

        </footer>
    );
}