import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import oilIn1l from "../resources/oil-in-1l.jpg";
import "../styles/products.css";

export default function Products() {
    return (
        <main className="productsPage">
            <section className="productsSection">
                <h1>Products</h1>

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
        </main>
    );
}