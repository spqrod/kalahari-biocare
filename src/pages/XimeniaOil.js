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
// import mongongoTree from "../resources/product-images/mongongo-oil-50ml/mongongo-tree-2.jpg";
// import handWithNuts from "../resources/product-images/mongongo-oil-50ml/hand-with-nuts.jpg";
import ximeniaFruit from "../resources/product-images/ximenia-oil/ximenia-fruit.jpg";
import { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { InitialTransition } from "../components/InitialTransition";

export default function XimeniaOil() {

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
            const imageArray = [productImage0];
            image.src = imageArray[imageId];
        },
        // handleRightArrowClick() {
        //     if (imageSlider.currentMainImageId < 3)
        //         imageSlider.updateMainImage(++imageSlider.currentMainImageId);
        // },
        // handleLeftArrowClick() {
        //     if (imageSlider.currentMainImageId > 0)
        //         imageSlider.updateMainImage(--imageSlider.currentMainImageId);
        // },

    };

    return (
        <main className="productPage">
            <InitialTransition />
            <section className="mainInfoSection">
                <Breadcrumbs />
                <h1 className="name">Ximenia Oil</h1>
                <div className="photoContainer">
                    <div className="mainImageAndArrowsContainer">
                        <img className="image main" src="" alt="oil" />
                        <img className="leftArrow" onClick={imageSlider.handleLeftArrowClick} src={leftArrow} alt="left arrow" />
                        <img className="rightArrow" onClick={imageSlider.handleRightArrowClick} src={rightArrow} alt="right arrow" />
                    </div>
                    <div className="thumbnailsContainer">
                        <img className="image" onClick={imageSlider.handleImageClick}  imageid="0" src={productImage0} alt="oil" />
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
                        Palmitic acid (16:0) 1– 2 <br></br> 
                        Stearic acid (18:0) 0.5 – 1  <br></br>
                        Oleic acid (18:1n-9) 40 – 56 <br></br>
                        11-octadecen-9-ynoic acid: Ximeninic acid (18.1n-9) 5 – 15 <br></br>
                        Linoleic acid (18:2) 0.2 – 0.5 <br></br>
                        Tetracosenoic acid (24.1) 7 – 12 <br></br>
                        Ximenic acid (26.1) 6.5 – 9.5 <br></br>
                        Octacosenoic acid (28.1) 8 – 12 <br></br>
                        Saturated Fatty acids 0.91-093 <br></br>
                        Monounsaturated Fatty Acids 1.47 <br></br>
                        Polyunsaturated Fatty Acids 68 -98 <br></br>
                        Specific gravity 0.91-093 <br></br>
                        Refractive index 1.47 <br></br>
                        Iodine value 68-98 <br></br>
                        Unsaponifiable matter &lt;1.7 g /100g <br></br>
                    </p>
                    <h5>Uses</h5>
                    <p>
                        Restructuring, regenerating, moisturising, nourishing and anti-inflammatory, stimulating the sebum production in the dermis. Ximenia caffra Oil is used in hair and body care products, such as anti-aging face and eye creams, emollient creams for aging and dry skins, shampoos for dry damaged and fragile hair. It can also be used in lipsticks and anti–pollution care. Max usage in formulation up to 100%, typical use 5-10%.
                    </p>
                    <p>
                        Package: <b>Food grade 1 kg, 4.5 kg plastic containers and 190 kg steel drums</b>
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
                            The fruits are collected from the wild mainly by women. The oil is carefully cold pressed to order to make sure that you get as fresh oil as possible. This oil is certified Organic by Ecocert and traded according to UN BioTrade Principles and Criteria for use of Terrestrial Biodiversity.
                        </p>
                    </div>
                    <img className="image" src={workerWithMongongoOilBarrels} alt="worker with mongongo oil barrels" />
                </div>
                <div className="additionalInfoContainer">
                    <div className="textContainer">
                        <h3>Ximenia Tree</h3>
                        <p>
                            The sour-plum tree is a sparsely branched shrub or small tree around 2 m in height with a shapeless untidy crown. The branches are either smooth or covered with flattened hairs and armed with spines at their bases. The bark of the tree is greyish brown to black in colour. The leaves are simple alternate, and elliptic
                            1
                             in shape. The flowers are greenish to creamy white in colour.
                        </p>
                    </div>
                    <img className="image" src={ximeniaFruit} alt="mongongo tree" />
                </div>
                {/* <div className="additionalInfoContainer">
                    <div className="textContainer">
                        <h3>Traditional Use</h3>
                        <p>
                            The Tonga, the Lozi and the Luvale tribes of Zambia have used the Mongongo tree and its fruit for generations. The trunk of the tree to make dugout canoes and drums, and the timber is used for carvings. The entire fruit is used. The nutritious kernel is pounded and used in food. The oil is extracted and used in cooking and as a moisturiser that protects the skin and hair from the harsh conditions of the Kalahari. The San people of the Kalahari have used the Mongongo fruit for centuries as part of their staple food.
                        </p>
                    </div>
                    <img className="image" src={handWithNuts} alt="hand with nuts" />
                </div> */}
            </section>
        </main>
    );
}