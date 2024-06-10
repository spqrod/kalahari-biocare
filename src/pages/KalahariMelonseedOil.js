import "../styles/productPage.css";
import productImage0 from "../resources/product-images/ximenia-oil/ximenia.jpg";
// import productImage1 from "../resources/product-images/mongongo-oil-50ml/product-image-1.jpeg";
// import productImage2 from "../resources/product-images/mongongo-oil-50ml/product-image-2.jpeg";
// import productImage3 from "../resources/product-images/mongongo-oil-50ml/product-image-3.jpeg";
import dropIcon from "../resources/drop-icon.svg";
import regenerationIcon from "../resources/regeneration-icon.svg";
import restructuringIcon from "../resources/restructuring-icon.svg";
import leftArrow from "../resources/left-arrow.svg";
import rightArrow from "../resources/right-arrow.svg";
import workerWithMongongoOilBarrels from "../resources/product-images/mongongo-oil-50ml/worker-with-mongongo-oil-barrels.jpg";
import melon from "../resources/product-images/kalahari-melonseed-oil/melon.jpg";
import seeds from "../resources/product-images/kalahari-melonseed-oil/seeds.jpeg";
import { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { InitialTransition } from "../components/InitialTransition";

export default function KalahariMelonseedOil() {

    useEffect(() => {  
        imageSlider.loadInitialImage();
    }, []);

    const imageSlider = {
        currentMainImageId: 0,
        loadInitialImage() {
            const image = document.querySelector(".image.main");
            image.src = productImage0;
        },
        handleImageClick(e) {
            const imageId = e.target.attributes["imageid"].value;
            imageSlider.updateMainImage(imageId);
            imageSlider.currentMainImageId = imageId;
        },
        updateMainImage(imageId) {
            const image = document.querySelector(".image.main");
            // const imageArray = [productImage0, productImage1, productImage2, productImage3];
            const imageArray = [productImage0];
            image.src = imageArray[imageId];
        },
        handleRightArrowClick() {
            // if (imageSlider.currentMainImageId < 3)
            //     imageSlider.updateMainImage(++imageSlider.currentMainImageId);
        },
        handleLeftArrowClick() {
            // if (imageSlider.currentMainImageId > 0)
            //     imageSlider.updateMainImage(--imageSlider.currentMainImageId);
        },

    };

    return (
        <main className="productPage">
            <InitialTransition />
            <section className="mainInfoSection">
                <Breadcrumbs />
                <h1 className="name">Kalahari Melonseed Oil</h1>
                <div className="photoContainer">
                    <div className="mainImageAndArrowsContainer">
                        <img className="image main" src="" alt="oil" />
                        <img className="leftArrow" onClick={imageSlider.handleLeftArrowClick} src={leftArrow} alt="left arrow" />
                        <img className="rightArrow" onClick={imageSlider.handleRightArrowClick} src={rightArrow} alt="right arrow" />
                    </div>
                    <div className="thumbnailsContainer">
                        <img className="image" onClick={imageSlider.handleImageClick}  imageid="0" src={productImage0} alt="ximenia" />
                        {/* <img className="image" onClick={imageSlider.handleImageClick} imageid="1" src={productImage1} alt="oil" />
                        <img className="image" onClick={imageSlider.handleImageClick} imageid="2" src={productImage2} alt="oil" />
                        <img className="image" onClick={imageSlider.handleImageClick} imageid="3" src={productImage3} alt="oil" /> */}
                    </div>
                </div>
                <div className="textContainer">
                    <h5>Properties</h5>
                    <ul className="propertiesList">
                        <li>
                            <img className="propertyIcon" src={dropIcon} alt="hydrating icon" />
                            hydrating
                        </li>
                        <li>
                            <img className="propertyIcon" src={regenerationIcon} alt="regenerating icon" />
                            regenerating

                        </li>
                        <li>
                            <img className="propertyIcon" src={restructuringIcon} alt="restructuring icon" />
                            restructuring
                        </li>
                    </ul>
                    <h5>Profile</h5>
                    <p>
                        Palmitic acid (16:0) 7 – 13 %<br></br>
                        Stearic acid (18:0) 5 – 11 %<br></br>
                        Oleic acid (18:1) 10 – 24 %<br></br>
                        Linoleic acid (18:2) 55– 70 %<br></br>
                        Saturated Fatty acids c.a. 18.7 %<br></br>
                        Monounsaturated Fatty Acids c.a. 15.4 %<br></br>
                        Polyunsaturated Fatty Acids c.a. 65.9 %<br></br>
                        Specific gravity 0.92-093<br></br>
                        Refractive index 1.48<br></br>
                        Iodine value 120-130<br></br>
                        Unsaponifiable matter &lt;1 g /100g
                    </p>
                    <h5>Uses</h5>
                    <p>
                        Kalahari Melon seed oil is light and absorbs quickly by the skin leaving a soft silky feel to the skin. It is used in hair and body products, such as baby care, emollient creams, eye creams suitable for all skin types.
                        Max usage in formulation up to 100%.
                    </p>
                    <p>
                        Package: <b>In food grade 1 kg, 4.5 kg plastic containers.</b>
                    </p>
                    <p>
                        Origin: <b>Zambia</b>
                    </p>
                    <Link to="/contact">
                        <button className="button yellow">Contact For Pricing</button>
                    </Link>
                </div>
            </section>
            <section className="additionalInfoSection">
                <div className="additionalInfoContainer">
                    <div className="textContainer">
                        <h3>How We Make It</h3>
                        <p>
                            The frits are collected from the wild mainly by women. The oil is carefully cold pressed to order to make sure that you get as fresh oil as possible. This oil is certified Organic by Ecocert SA and traded according to UN BioTrade Principles and Criteria for use of Terrestrial Biodiversity.
                        </p>
                    </div>
                    <img className="image" src={workerWithMongongoOilBarrels} alt="worker with mongongo oil barrels" />
                </div>
                <div className="additionalInfoContainer">
                    <div className="textContainer">
                        <h3>Kalahari Melonseed</h3>
                        <p>
                            Species: Citrullus lanatus <br></br>
                            Origin: Southern Africa <br></br>
                            Annual creeping herb with hairy stems, bright yellow flower and green leaves, found in the deep, well drained Kalahari sand conditions throughout Southern Africa.
                        </p>
                    </div>
                    <img className="image" src={melon} alt="melon" />
                </div>
                {/* 
                <div className="additionalInfoContainer">
                    <div className="textContainer">
                        <h3>Traditional Use</h3>
                        <p>
                            The Tonga, the Lozi and the Luvale tribes of Zambia have used the Mongongo tree and its fruit for generations. The trunk of the tree to make dugout canoes and drums, and the timber is used for carvings. The entire fruit is used. The nutritious kernel is pounded and used in food. The oil is extracted and used in cooking and as a moisturiser that protects the skin and hair from the harsh conditions of the Kalahari. The San people of the Kalahari have used the Mongongo fruit for centuries as part of their staple food.
                        </p>
                    </div>
                    <img className="image" src={seeds} alt="seeds" />
                </div>
                 */}

            </section>
        </main>
    );
}