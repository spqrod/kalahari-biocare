import "../styles/consumerProducts.css"
import { Link } from "react-router-dom";
import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import Breadcrumbs from "../components/Breadcrums";

export default function ConsumerProducts() {

    return (
        <main className="productsPage">
            <section className="productsSection">
                <Breadcrumbs />
                <h1>Consumer Products</h1>
                <div className="productsContainer">
                    <Link className="productContainer" to="/products/consumer-products/1">
                        <img className="image" src={kalahariOilIn50Ml} alt="" />
                        <h5>Kalahari Oil</h5>
                        <p className="description">50 ml bottle</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}