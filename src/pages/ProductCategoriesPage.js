import "../styles/productCategoriesPage.css";
import ProductCategoriesComponent from "../components/ProductCategoriesComponent";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductCategoriesPage() {
    return (
        <main className="productCategoriesPage">
            <section className="productsSection">
                <Breadcrumbs />
                <h1>Products</h1>
                <ProductCategoriesComponent />
            </section>
        </main>
    );
}