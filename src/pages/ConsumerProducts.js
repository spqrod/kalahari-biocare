import "../styles/productsPage.css"
import { Link } from "react-router-dom";
import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import Breadcrumbs from "../components/Breadcrumbs";
import { InitialTransition } from "../components/InitialTransition";

export default function ConsumerProducts() {

    return (
        <main className="productsPage">
            <InitialTransition />
            <section className="productsSection">
                <Breadcrumbs />
                <h1>Consumer Products</h1>
                <div className="productsContainer">
                    <Link className="productContainer" to="/products/consumer-products/mongongo-oil-50ml">
                        <img className="image" src={kalahariOilIn50Ml} alt="Mongongo / Manketti Kernel Organic Oil, 50 ml" />
                        <h5 className="name">Mongongo / Manketti Kernel Oil</h5>
                        <p className="description">50 ml</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}