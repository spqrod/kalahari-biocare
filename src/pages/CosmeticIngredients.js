import "../styles/productsPage.css"
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { InitialTransition } from "../components/InitialTransition";

export default function CosmeticIngredients() {

    return (
        <main className="productsPage">
            <InitialTransition />
            <section className="productsSection">
                <Breadcrumbs />
                <h1>Cosmetic Ingredients</h1>
            </section>
        </main>
    );
}