import ContactForm from "../components/ContactFrom";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import whatsappIcon from "../resources/whatsapp-icon.svg";
import facebookIcon from "../resources/facebook-icon.svg";
import locationIcon from "../resources/location-icon.svg";
import callIcon from "../resources/call-icon.svg";
import { InitialTransition } from "../components/InitialTransition";

export default function Contact() {
    return (
        <main className="contactPage">
        <InitialTransition />
            <section className="contactSection">
                <div className="contactFormContainer">
                    <h2>Contact Kalahari BioCare</h2>
                    <ContactForm />
                </div>

                <div className="otherContactOptionsContainer">
                    <div className="contactsContainer">
                        <div className="phoneContainer contactContainer">
                            <a className="text" href="tel:+260977521516" target="_blank" rel="noreferrer">
                                <img className="icon" src={callIcon} alt="phone icon" />
                                <h6>
                                    +260 977521516
                                </h6>
                            </a>
                        </div>
                        <div className="addressContainer contactContainer">
                            <img className="icon" src={locationIcon} alt="address icon" />
                            <h6>
                                PO Box 51386, Ridgeway, Lusaka, Zambia
                            </h6>
                        </div>
                    </div>
                    <h5>
                        Social Links:
                    </h5>
                    <div className="socialLinksContainer">
                        <Link to="https://wa.me/46761191516" target="_blank" rel="noreferrer">
                            <img src={whatsappIcon} alt="whatsapp icon" />
                        </Link>
                        <Link to="https://www.facebook.com/p/Kalahari_biocare-100064365781430/" target="_blank" rel="noreferrer">
                            <img src={facebookIcon} alt="whatsapp icon" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}