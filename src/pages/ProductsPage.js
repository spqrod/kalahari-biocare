import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import oilIn1l from "../resources/oil-in-1l.jpg";
import "../styles/productsPage.css";
import ProductsComponent from "../components/ProductsComponent";

export default function ProductsPage() {
    return (
        <main className="productsPage">
            <section className="productsSection">
                <h1>Products</h1>
                {/* Breadcrums */}
                <ProductsComponent />
            </section>
        </main>
    );
}