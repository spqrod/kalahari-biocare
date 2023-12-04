import "../styles/home.css"
import womenWithBaskets from "../resources/women-with-baskets.jpg";
import womanHoldingNuts from "../resources/woman-holding-nuts.jpg";
import basketWithSeeds from "../resources/basket-with-seeds.jpg";
import smilingWoman from "../resources/smiling-woman.jpg";
import oils from "../resources/oils.jpg";
import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import oilIn1l from "../resources/oil-in-1l.jpg";

export default function Home() {
    return (
        <main className="homePage">

            <section className="heroSection">
                <h1>Kalahari Biocare</h1>
                <div className="square">
                    <p className="text">
                        We produce the best organic African oils found on the world market
                    </p>
                </div>
                <button>
                    See Our Products
                </button>
            </section>

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

                <div className="productsContainer">

                    <div className="productContainer">
                        <img className="image" src={kalahariOilIn50Ml} alt="" />
                        <h5>Consumer Products</h5>
                        <p className="description">Description</p>
                        <button className="button">
                            See Our Products
                        </button>
                    </div>

                    <div className="productContainer">
                        <img className="image" src={oilIn1l} alt="" />
                        <h5>Cosmetic Ingredients</h5>
                        <p className="description">Description</p>
                        <button className="button">
                            See Our Products
                        </button>
                    </div>

                </div>

            </section>

            <section className="reviewsSection">
                <h1>Reviews Section</h1>
            </section>
            <section className="featuresSection">
                <h1>Features Section</h1>
            </section>
            <section className="certificatesSection">
                <h1>Certificates Section</h1>
            </section>
            <section className="contactSection">
                <h1>Contact Section</h1>
            </section>
        </main>
    );
}