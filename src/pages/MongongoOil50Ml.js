import "../styles/productPage.css";
import productImage0 from "../resources/product-images/mongongo-oil-50ml/product-image-0.jpeg";
import productImage1 from "../resources/product-images/mongongo-oil-50ml/product-image-1.jpeg";
import productImage2 from "../resources/product-images/mongongo-oil-50ml/product-image-2.jpeg";
import productImage3 from "../resources/product-images/mongongo-oil-50ml/product-image-3.jpeg";
import dropIcon from "../resources/drop-icon.svg";
import regenerationIcon from "../resources/regeneration-icon.svg";
import restructuringIcon from "../resources/restructuring-icon.svg";
import leftArrow from "../resources/left-arrow.svg";
import rightArrow from "../resources/right-arrow.svg";
import workerWithMongongoOilBarrels from "../resources/worker-with-mongongo-oil-barrels.jpg";
import { useEffect } from "react";

export default function MongongoOil50Ml() {

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
            const imageArray = [productImage0, productImage1, productImage2, productImage3];
            image.src = imageArray[imageId];
        },
        handleRightArrowClick() {
            if (imageSlider.currentMainImageId < 3)
                imageSlider.updateMainImage(++imageSlider.currentMainImageId);
        },
        handleLeftArrowClick() {
            if (imageSlider.currentMainImageId > 0)
                imageSlider.updateMainImage(--imageSlider.currentMainImageId);
        },

    };

    return (
        <main className="productPage">
            <section className="mainInfoSection">
                <div className="photoContainer">
                    <div className="mainImageAndArrowsContainer">
                        <img className="image main" src="" alt="" />
                        <img className="leftArrow" onClick={imageSlider.handleLeftArrowClick} src={leftArrow} alt="" />
                        <img className="rightArrow" onClick={imageSlider.handleRightArrowClick} src={rightArrow} alt="" />
                    </div>
                    <div className="thumbnailsContainer">
                        <img className="image" onClick={imageSlider.handleImageClick}  imageid="0" src={productImage0} alt="" />
                        <img className="image" onClick={imageSlider.handleImageClick} imageid="1" src={productImage1} alt="" />
                        <img className="image" onClick={imageSlider.handleImageClick} imageid="2" src={productImage2} alt="" />
                        <img className="image" onClick={imageSlider.handleImageClick} imageid="3" src={productImage3} alt="" />
                    </div>
                </div>
                <div className="textContainer">
                    <h5>Properties</h5>
                    <ul className="propertiesList">
                        <li>
                            <img className="propertyIcon" src={dropIcon} alt="" />
                            hydrating
                        </li>
                        <li>
                            <img className="propertyIcon" src={regenerationIcon} alt="" />
                            regenerating

                        </li>
                        <li>
                            <img className="propertyIcon" src={restructuringIcon} alt="" />
                            restructuring
                        </li>
                    </ul>
                    <h5>Profile</h5>
                    <p>
                        Mongongo oil has a high linoleic acid content (between 30% and 54%), which is synthesised by the body to form part of the composition of cell membranes. The α-eleostearic acid (C18 3 9c, 11t, 13t) content in Mongongo oil provides protection from harmful UV rays.
                    </p>
                    <h5>Uses</h5>
                    <p>
                        Mongongo oil is used in hair and body products, such as baby care, eye creams, emollient creams for normal and dry skins, shampoos for dry, damaged and fragile hair. It can also be used in lipsticks and anti–pollution care.
                    </p>
                    <p>
                        Package: <b>50 ml.</b>
                    </p>
                    <button className="button-yellow">Contact For Pricing</button>
                </div>
            </section>
            <section className="additionalInfoSection">
                <div className="additionalInfoContainer">
                    <div className="textContainer">
                        <h3>How we make it</h3>
                        <p>
                            The frits are collected from the wild mainly by women. The oil is carefully cold Buttoned to order. This oil is certified Organic by Ecocert SA and traded according to UN BioTrade Principles and Criteria for use of Terrestrial Biodiversity.
                        </p>
                    </div>
                    <img className="image" src={workerWithMongongoOilBarrels} alt="" />
                </div>
            </section>

        </main>
    );
}