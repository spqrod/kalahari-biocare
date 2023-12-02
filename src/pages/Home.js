import "../styles/home.css"

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
                <h1>Welcome Section</h1>
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