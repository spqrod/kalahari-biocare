import "../styles/home.css"
import Slider from "../components/Slider";
import ContactForm from "../components/ContactFrom";
import ProductCategoriesComponent from "../components/ProductCategoriesComponent";
import womenWithBaskets from "../resources/women-with-baskets.jpg";
import womanHoldingNuts from "../resources/woman-holding-nuts.jpg";
import basketWithSeeds from "../resources/basket-with-seeds.jpg";
import smilingWoman from "../resources/smiling-woman.jpg";
import oils from "../resources/oils.jpg";
import tree from "../resources/tree.jpg";
import villagersWithMonica from "../resources/villagers-with-monica.jpg";
import villagersWithMonica2 from "../resources/villagers-with-monica-2.jpg";
import berries1 from "../resources/berries-1.jpg";
import berries2 from "../resources/berries-2.jpg";
import berries3 from "../resources/berries-3.jpg";
import woman1 from "../resources/woman-1.jpg";
import woman2 from "../resources/woman-2.jpg";
import logoEu from "../resources/logo-eu.svg";
import logoUsda from "../resources/logo-usda.svg";
import logoSaeopa from "../resources/logo-saeopa.svg";
import logoEcocert from "../resources/logo-ecocert.svg";
import { Link } from "react-router-dom";
import { InitialTransition } from "../components/InitialTransition";

export default function Home() {

    return (
        <main 
            className="homePage">
            <InitialTransition />
            <section className="heroSection">
                <h1>Kalahari Biocare</h1>
                <div className="square">
                    <p className="text">
                        Organic pure oils from Africa that are sourced and produced with conscience, care and concern for the future of our natural resources, ecosystem and community.
                    </p>
                </div>
                <Link to="/products">
                    <button>
                            See Our Products
                    </button>
                </Link>
            </section>

            <section className="welcomeSection">
                <h2>Welcome to Kalahari Natural Oils!</h2>
                <div className="contentContainer">
                    {/* <p className="text1">
                        For more than 2 decades we have been producing 100% organic and pure natural African oils. We make sure that your ingredients are freshly made and of best quality. Our oils are extracted to order and with integrity. 
                    </p> */}
                    <p className="text1">
                        Kalahari Natural Oils Ltd was founded in 2006. We work with communities in remote rural parts of Zambia. We follow Organic Production and Processing Rules and UN BioTrade Pinciples & Criteria for use of Terrestrial Biodiversity.
                    </p>
                    <img className="womenWithBasketsImage image" src={womenWithBaskets} alt="" />
                    <img className="womanHoldingNutsImage image" src={womanHoldingNuts} alt="" />
                    <p className="text2">
                        The wild collection from the forests is done by hand to get the best quality of fruit and seed for our products and to create jobs where jobs are difficult to find.
                    </p>
                    <img className="basketWithSeedsImage image" src={basketWithSeeds} alt="" />
                </div>
            </section>

            <section className="whyUseSection">
                <div className="smilingWomanImageContainer">
                    <img className="smilingWoman image" src={smilingWoman} alt="" />
                </div>
                <div className="textContainer">
                    <h2>Why Use Our Oils?</h2>
                    <p>
                        Our oils are extracted from certified organic kernels, nuts and seeds. Our process involves eco-friendly, ethical wild collection that benefits the people and forests in the remote areas where we operate.<br/><br/>Our golden oils are extracted by a cold press process and is used in the manufacturing of high-quality health and beauty products worldwide.
                    </p>
                </div>
                <img className="oils image" src={oils} alt="" />
            </section>

            <section className="productsSection">
                <h2>Products</h2>
                <ProductCategoriesComponent />
            </section>

            <section className="reviewsSection">

                <h2>What Our Clients Say</h2>
                <div className="contentContainer">
                    <Slider />
                </div>

                <div className="imageContainer">
                    <img className="image" src={tree} alt="" />
                </div>

            </section>

            <section className="feature1Section">

                <img className="image villagersWithMonicaImage1" src={villagersWithMonica} alt="villagers with monica" />
                <div className="contentContainer">
                    <h2>Harvesting Partners</h2>
                    <p>
                        Over the years, Kalahari has established relationships with the remote rural communities from whom we source raw materials for our products. The wild collection and primary processing are mainly done by women. <br/><br/>
                        The payments received by our producers provide crucial cash support to their household income and indirectly supports the local community shops and service suppliers where business largely depends on advancing credit or involves barter.
                    </p>
                    <img className="image villagersWithMonicaImage2" src={villagersWithMonica2} alt="villagers with monica" />
                </div>
            </section>

            <section className="feature2Section">
                <div className="textContentContainer">
                    <h2>Valuing Forests</h2>
                    <p>
                        The pressure on the forests is growing due to unsustainable forest management and high unemployment.
                    </p>
                </div>
                <div className="textContentContainer2">
                    <p>
                        By giving value to fruits and seeds people protect the and value the trees and plants. Our harvesting partners carefully wild collect and process high quality raw materials for our oils maintaining sustainable harvesting practices.
                    </p>
                </div>
                <img className="image berries1" src={berries1} alt="african berries" />
                <img className="image berries2" src={berries2} alt="african berries" />
                <img className="image berries3" src={berries3} alt="african berries" />
            </section>

            <section className="feature3Section">
                <div className="textContainer">
                    <h2>Ethical BioTrade</h2>
                    <p>
                        At Kalahari BioCare we follow the UN BioTrade Principles & Criteria for use of Terrestrial Biodiversity to ensure the fair and equitable sharing of the benefits generated from the utilisation of forest resources. 
                    </p>
                </div>
            </section>

            <section className="feature4Section">
                <div className="textContainer">
                    <h2>Empowering Women</h2>
                    <p>
                        Over the years, we have established relationships with the remote rural communities from whom we source high quality raw materials. <br/><br/>
                        The work is mainly done by women. This gives these women additional cash income, more opportunities and independence.
                    </p>
                </div>
                <img className="image woman1" src={woman1} alt="" />
                <img className="image woman2" src={woman2} alt="" />
            </section>

            <section className="certificatesSection">
                <h2>Certificates and Memberships</h2>
                <div className="certificatesContainer">
                    <div className="certificateContainer">
                        <img className="image certificate" src={logoUsda} alt="" />
                    </div>
                    <div className="certificateContainer">
                        <img className="image certificate" src={logoSaeopa} alt="" />
                    </div>
                    <div className="certificateContainer">
                        <img className="image certificate" src={logoEcocert} alt="" />
                    </div>
                    <div className="certificateContainer">
                        <img className="image certificate" src={logoEu} alt="" />
                    </div>
                </div>
            </section>

            <section className="contactSection">
                <div className="contactContainer">
                    <h2>Contact Us</h2>
                    <ContactForm />

                </div>
                <div className="imageContainer">
                </div>
            </section> 

        </main>
    );
}