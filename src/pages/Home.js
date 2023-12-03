import "../styles/home.css"
import womenWithBaskets from "../resources/women-with-baskets.jpg";
import womanHoldingNuts from "../resources/woman-holding-nuts.jpg";
import basketWithSeeds from "../resources/basket-with-seeds.jpg";

export default function Home() {
    return (
        <main>
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
                <h1>Welcome to Kalahari Natural Oils!</h1>
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
                <h1>Why Use Section</h1>
            </section>
            <section className="productsSection">
                <h1>Products Section</h1>
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