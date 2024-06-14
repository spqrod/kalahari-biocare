import "../styles/productPage.css";
import productImage0 from "../resources/product-images/sunflower-oil/sunflower.jpg";
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
import sunflowerSeeds from "../resources/product-images/sunflower-oil/sunflower-seeds.jpg";
import { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import { InitialTransition } from "../components/InitialTransition";

export default function SunflowerOil() {

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
                <h1 className="name">Sunflower Oil</h1>
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
                        Palmitic acid (16:0) 5 – 8  <br/>
                        Stearic acid (18:0) 2 – 5 <br/>
                        Arachidic acid (20:0) &lt;1.0 <br/>
                        Oleic acid (18:1) 22 – 30 <br/>
                        Linoleic acid (18:2) 55 – 65 <br/>
                        α-Linolenic acid (18:3) 0 – 0.2 <br/>
                        Saturated Fatty acids c.a. 10 % <br/>
                        Monounsaturated Fatty Acids c.a. 30 % <br/>
                        Polyunsaturated Fatty Acids c.a. 60 % <br/>
                        Specific gravity 0.91-09 <br/>
                        Refractive index 1.47 <br/>
                        Iodine value 120 – 140 <br/>
                        Unsaponifiable matter &lt;1.5 /100g <br/>
                    </p>
                    <h5>Uses</h5>
                    <p>
                        Sunflower seed oil is interesting because of the high content of linoleic acid that gives the oil moisturising, regenerating and restructuring, properties. Sunflower seed oil is used in hair and body care products. It is suitable for normal to dry skin, baby care and eye contour products, lipsticks and in shampoo for dry, damaged and fragile hair.
                    </p>
                    <p>
                        Package: <b>Food grade 1 kg, 4.5 kg food grade plastic containers and 190 kg food grade steel drums</b>
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
                        <h3>Sunflower Plant</h3>
                        <p>
                            Sunflower is an annual non-woody plant belonging to the Compositae family. It can grow up to 3 m tall and has one or more sun-shaped bright yellow flowers. The oil is extracted from the seeds. Organic Sunflower oil is extracted from seed that is grown using organic farming practises, such as non-use of synthetic fertilizers, no pesticide use and propagated from non GMO seed.
                        </p>
                    </div>
                    <img className="image" src={sunflowerSeeds} alt="mongongo tree" />
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