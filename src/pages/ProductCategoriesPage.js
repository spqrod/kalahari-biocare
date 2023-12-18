import "../styles/productCategoriesPage.css";
import ProductCategoriesComponent from "../components/ProductCategoriesComponent";
import Breadcrumbs from "../components/Breadcrumbs";
import { InitialTransition } from "../components/InitialTransition";

export default function ProductCategoriesPage() {
    return (
        <main className="productCategoriesPage">
            <InitialTransition />
            <section className="productsSection">
                <Breadcrumbs />
                <h1>Products</h1>
                <ProductCategoriesComponent />
            </section>
        </main>
    );
}