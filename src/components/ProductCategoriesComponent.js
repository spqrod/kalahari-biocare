import kalahariOilIn50Ml from "../resources/kalahari-oil-in-50ml.jpg";
import oilIn1l from "../resources/oil-in-1l.jpg";
import "../styles/productCategoriesComponent.css";
import { Link } from "react-router-dom";

export default function ProductCategoriesComponent() {

    return (
        <div className="productCategoriesContainer">
            <Link className="productContainer" to="/products/consumer-products">
                <img className="image" src={kalahariOilIn50Ml} alt="" />
                <h5 className="name">Consumer Products</h5>
                <p className="description">Description</p>
                <button className="button">
                    See Consumer Products
                </button>
            </Link>
            <Link className="productContainer" to="/products/cosmetic-ingredients">
                <img className="image" src={oilIn1l} alt="" />
                <h5 className="name">Cosmetic Ingredients</h5>
                <p className="description">Description</p>
                <button className="button">
                    See Cosmetic Ingredients
                </button>
            </Link>
        </div>
    );
}

