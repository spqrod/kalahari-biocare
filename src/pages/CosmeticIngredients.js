import "../styles/productsPage.css"
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { InitialTransition } from "../components/InitialTransition";
import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import melon from "../resources/product-images/kalahari-melonseed-oil/melon.jpg";
import ximenia from "../resources/product-images/ximenia-oil/ximenia.jpg";





export default function CosmeticIngredients() {

    return (
        <main className="productsPage">
            <InitialTransition />
            <section className="productsSection">
                <Breadcrumbs />
                <h1>Cosmetic Ingredients</h1>
                <div className="productsContainer">
                    <Link className="productContainer" to="/products/cosmetic-ingredients/mongongo-oil-50ml">
                        <img className="image" src={kalahariOilIn50Ml} alt="Mongongo / Manketti Kernel Organic Oil, 50 ml" />
                        <h5 className="name">Mongongo / Manketti Kernel Oil</h5>
                        {/* <p className="description">50 ml</p> */}
                    </Link>
                    <Link className="productContainer" to="/products/cosmetic-ingredients/kalahari-melonseed-oil">
                        <img className="image" src={melon} alt="kalahari melonseed oil" />
                        <h5 className="name">Kalahari Melonseed Oil</h5>
                        {/* <p className="description">50 ml</p> */}
                    </Link>
                    <Link className="productContainer" to="/products/cosmetic-ingredients/ximenia-oil">
                        <img className="image" src={ximenia} alt="ximenia oil" />
                        <h5 className="name">Ximenia Oil</h5>
                        {/* <p className="description">50 ml</p> */}
                    </Link>
                    <Link className="productContainer" to="/products/cosmetic-ingredients/sunflower-oil">
                        <img className="image" src={kalahariOilIn50Ml} alt="sunflower oil" />
                        <h5 className="name">Sunflower Oil</h5>
                        <p className="description">50 ml</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}