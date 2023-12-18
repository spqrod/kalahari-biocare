import ContactForm from "../components/ContactFrom";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import whatsappIcon from "../resources/whatsapp-icon.svg";
import instagramIcon from "../resources/instagram-icon.svg";
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
                    <ContactForm isDarkVariant={false} />
                </div>

                <div className="otherContactOptionsContainer">
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
                    <h5>
                        Social Links:
                    </h5>
                    <div className="socialLinksContainer">
                        <Link to="https://wa.me/46761191516">
                            <img src={whatsappIcon} alt="" />
                        </Link>
                        <Link to="https://www.facebook.com/profile.php?id=100064365781430">
                            <img src={facebookIcon} alt="" />
                        </Link>
                        <Link to="https://wa.me/46761191516">
                            <img src={instagramIcon} alt="" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}