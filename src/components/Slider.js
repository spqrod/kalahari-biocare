import quoteIcon from "../resources/quote.svg";
import starIcon from "../resources/star.svg";
import arrowLeft from "../resources/arrow-left.svg";
import arrowRight from "../resources/arrow-right.svg";
import "../styles/slider.css";
import { useEffect, useState } from "react";

export default function Slider() {

    const [sliderContainerWidth, setSliderContainerWidth] = useState();

    let currentReviewIndex = 0;
    let arrowButtonsDisabled = false;

    const controller = {
        handleRightArrowClick() {
            if (currentReviewIndex < 3 && !arrowButtonsDisabled) {
                arrowButtonsDisabled = true;
                controller.moveReviewsContainerLeft();
                controller.hideCurrentReview();
                controller.unhideNextReview(++currentReviewIndex);
                controller.updatePagination();
                setTimeout(() => {
                    arrowButtonsDisabled = false;
                }, 1000);
            }
        },
        handleLeftArrowClick() {
            if (currentReviewIndex > 0 && !arrowButtonsDisabled) {
                arrowButtonsDisabled = true;
                controller.moveReviewsContainerRight();
                controller.hideCurrentReview();
                controller.unhideNextReview(--currentReviewIndex);
                controller.updatePagination();
                setTimeout(() => {
                    arrowButtonsDisabled = false;
                }, 1000);
            }
        },
        moveReviewsContainerLeft() {
            const reviewsContainer = document.querySelector(".reviewsContainer");
            const currentMargin = reviewsContainer.style.marginLeft = "" ? "0" : reviewsContainer.style.marginLeft.replace("px", "").replace("-", "");
            reviewsContainer.style.marginLeft = `-${Number(currentMargin) + Number(sliderContainerWidth) * 3}px`;
        },
        moveReviewsContainerRight() {
            const reviewsContainer = document.querySelector(".reviewsContainer");
            const currentMargin = reviewsContainer.style.marginLeft = "" ? "0" : reviewsContainer.style.marginLeft.replace("px", "");
            reviewsContainer.style.marginLeft = `${Number(currentMargin) + Number(sliderContainerWidth) * 3}px`;
        },
        hideCurrentReview() { 
            const currentReview = document.querySelector(`.reviewContainer[reviewId='${currentReviewIndex}']`);
            setTimeout(() => currentReview.classList.add("hidden"), 1000);
        },
        unhideNextReview(reviewId) {
            const nextReview = document.querySelector(`.reviewContainer[reviewId='${reviewId}']`);
            nextReview.classList.remove("hidden");
        },
        updatePagination() {
            const pagination = document.querySelector(".paginationText");
            pagination.textContent = `${currentReviewIndex + 1} / 4`;
        },
        setInitialReviewsContainerWidth() {
            const sliderContainer = document.querySelector(".sliderContainer");
            setSliderContainerWidth(sliderContainer.offsetWidth);
            const reviewsContainer = document.querySelector(".reviewsContainer");
            reviewsContainer.style.gridTemplateColumns = `repeat(4, ${sliderContainer.offsetWidth}px)`;
            reviewsContainer.style.gap = `${sliderContainer.offsetWidth * 2}px`;
        }
    }

    useEffect(() => {
        controller.setInitialReviewsContainerWidth();
    }, []);

    return (
        <div className="sliderContainer">
            <div className="reviewsContainer">
                <div className="reviewContainer" reviewid="0">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p className="reviewText">
                            We are extremely pleased with the quality of service received from Kalahari Natural Oils. I sincerely appreciate the responsiveness, efficiency and gracious customer service received from Monica and the manner that business is conducted. We are most definitely a satisfied customer and recommend Kalahari Natural Oils as a supplier.
                        </p>
                        <h6 className="reviewAuthor">
                            woribeauty.com
                        </h6>
                </div>
                <div className="reviewContainer hidden" reviewid="1">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p className="reviewText">
                            8 years ago we fell in love with Kalahari Biocare’s certified organic mongongo oil, and we still are!! Their service is impeccable too!
                        </p>
                        <h6 className="reviewAuthor">
                            Paola, CEO Essential Skincare
                        </h6>

                </div>
                <div className="reviewContainer hidden" reviewid="2">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p className="reviewText">
                            Thank you for doing the business with us. I always expect you to introduce a new product and culture. I am looking forward to seeing you in the future.
                        </p>
                        <h6 className="reviewAuthor">
                            A Japanese customer
                        </h6>
                </div>
                <div className="reviewContainer hidden" reviewid="3">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p className="reviewText">
                            I have enjoyed working with Kalahari Natural Oils as their quality is always high. They are timely in responding to our requests, and have always been easy to work with. I highly recommend KNO for their product and respectful staff.
                        </p>
                        <h6 className="reviewAuthor">
                            Mary Jo K - USA
                        </h6>
                </div>
            </div>
            <div className="paginationContainer">
                <img src={arrowLeft} onClick={controller.handleLeftArrowClick} alt="left arrow" />
                <p className="paginationText">1 / 4</p>
                <img src={arrowRight} onClick={controller.handleRightArrowClick} alt="right arrow" />
            </div>
        </div>
    )
}