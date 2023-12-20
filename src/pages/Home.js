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
                        We produce the best organic African oils found on the world market
                    </p>
                </div>
                <Link to="/products">
                    <button>
                            See Our Products
                    </button>
                </Link>
            </section>
{/*             

            <section className="welcomeSection">
                <h2>Welcome to Kalahari Natural Oils!</h2>
                <div className="contentContainer">
                    <p className="text1">
                        For more than 2 decades we have been producing 100% organic and pure natural African oils. We make sure that your ingredients are freshly made and of best quality. Our oils are extracted to order and with integrity. 
                    </p>
                    <img className="womenWithBasketsImage image" src={womenWithBaskets} alt="" />
                    <img className="womanHoldingNutsImage image" src={womanHoldingNuts} alt="" />
                    <p className="text2">
                        Kalahari Natural Oils Ltd was founded in 2006. We work with communities in remote rural parts of Zambia. The Wild collection from the forests is mainly done by women. We follow Organic Production and Processing Rules and UN BioTrade Pinciples & Criteria for use of Terrestrial Biodiversity.
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
                        We offer best on the market, 100% natural and pure oils. <br/><br/>
                        Kalahari oils will improve your formulations, give it that extra bit of function that you desire in your skin and hair care products. <br/><br/>
                        Our oils are cold Buttoned to order so that you will get as fresh oil as possible. Our customer service is quick and friendly.
                    </p>
                </div>
                <img className="oils image" src={oils} alt="" />
            </section>

            <section className="productsSection">
                <h2>Products</h2>
                <ProductCategoriesComponent />
            </section>

            <section className="reviewsSection">

                <div className="contentContainer">
                    <h2>What Our Clients Say</h2>
                    <Slider />
                </div>

                <div className="imageContainer">
                    <img className="image" src={tree} alt="" />
                </div>

            </section>

            <section className="feature1Section">

                <img className="image villagersWithMonicaImage1" src={villagersWithMonica} alt="villagers with monica" />
                <div className="contentContainer">
                    <h2>Sustainable Future</h2>
                    <p>
                        Everybody has the right to be treated with respect and dignity. Poverty reduction is the key to give people hope, pride and a better future.
                    </p>
                    <img className="image villagersWithMonicaImage2" src={villagersWithMonica2} alt="villagers with monica" />
                </div>
            </section>

            <section className="feature2Section">
                <div className="textContentContainer">
                    <h2>Valuing Forests</h2>
                    <p>
                        The Buttonure on the forests is growing through unsustainable timber logging, charcoal burning, illegal poaching and shifting cultivation practices.<br/><br/>
                        We give value to trees through active and continuous demand for produce. Our supplier groups process high quality raw materials for our oils maintaining sustainable harvesting practices.
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
                        Zambia is a signatory of the Nagoya protocol. At Kalahari BioCare we follow the UN BioTrade Principles & Criteria for use of Terrestrial Biodiversity to ensure the fair and equitable sharing of the benefits generated from the utilisation of forest resources.
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
            </section>  */}

        </main>
    );
}