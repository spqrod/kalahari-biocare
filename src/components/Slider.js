import quoteIcon from "../resources/quote.svg";
import starIcon from "../resources/star.svg";
import arrowLeft from "../resources/arrow-left.svg";
import arrowRight from "../resources/arrow-right.svg";
import "../styles/slider.css";

export default function Slider() {

    let currentReviewIndex = 0;
    let arrowButtonsDisabled = false;

    const controller = {
        handleRightArrowClick() {
            if (currentReviewIndex < 3 && !arrowButtonsDisabled) {
                arrowButtonsDisabled = true;
                controller.moveCurrentReviewLeft();
                controller.revealReviewFromRight(++currentReviewIndex);
                controller.updatePagination();
                setTimeout(() => {
                    controller.clearClasses();
                    arrowButtonsDisabled = false;
                }, 1000);
            }
        },
        handleLeftArrowClick() {
            if (currentReviewIndex > 0 && !arrowButtonsDisabled) {
                arrowButtonsDisabled = true;
                controller.moveCurrentReviewRight();
                controller.revealReviewFromLeft(--currentReviewIndex);
                controller.updatePagination();
                setTimeout(() => {
                    controller.clearClasses();
                    arrowButtonsDisabled = false;
                }, 1000);
            }
        },
        moveCurrentReviewLeft() { 
            const currentReview = document.querySelector(`.reviewContainer[reviewId='${currentReviewIndex}']`);
            currentReview.classList.add("moveLeft");
            setTimeout(() => currentReview.classList.add("hidden"), 1000);

        },
        moveCurrentReviewRight() { 
            const currentReview = document.querySelector(`.reviewContainer[reviewId='${currentReviewIndex}']`);
            currentReview.classList.add("moveRight");
            setTimeout(() => currentReview.classList.add("hidden"), 1000);
        },
        revealReviewFromRight(reviewId) {
            const nextReview = document.querySelector(`.reviewContainer[reviewId='${reviewId}']`);
            nextReview.classList.add("revealFromRight");
            nextReview.classList.remove("hidden");
        },
        revealReviewFromLeft(reviewId) {
            const nextReview = document.querySelector(`.reviewContainer[reviewId='${reviewId}']`);
            nextReview.classList.add("revealFromLeft");
            nextReview.classList.remove("hidden");
        },
        clearClasses() {
            const reviewContainers = document.querySelectorAll(".reviewContainer");
            reviewContainers.forEach(item => {
                item.classList.remove("moveLeft");
                item.classList.remove("moveRight");
                item.classList.remove("revealFromRight");
                item.classList.remove("revealFromLeft");
            });
        },
        updatePagination() {
            const pagination = document.querySelector(".paginationText");
            pagination.textContent = `${currentReviewIndex + 1} / 4`;
        }
    }

    return (
        <div className="sliderContainer">
            <div className="reviewsContainer">
                <div className="reviewContainer" reviewId="0">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p>
                            We are extremely pleased with the quality of service received from Kalahari Natural Oils. I sincerely appreciate the responsiveness, efficiency and gracious customer service received from Monica and the manner that business is conducted. We are most definitely a satisfied customer and recommend Kalahari Natural Oils as a supplier.
                        </p>
                        <h6 className="reviewAuthor">
                            woribeauty.com
                        </h6>

                </div>
                <div className="reviewContainer hidden" reviewId="1">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p>
                            8 years ago we fell in love with Kalahari Biocare’s certified organic mongongo oil, and we still are!! Their service is impeccable too!
                        </p>
                        <h6 className="reviewAuthor">
                            Paola, CEO Essential Skincare
                        </h6>

                </div>
                <div className="reviewContainer hidden" reviewId="2">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p>
                            Thank you for doing the business with us. I always expect you to introduce a new product and culture. I am looking forward to seeing you in the future.
                        </p>
                        <h6 className="reviewAuthor">
                            A Japanese customer
                        </h6>
                </div>
                <div className="reviewContainer hidden" reviewId="3">
                    <img className="quoteIcon" src={quoteIcon} alt="" />
                        <p className="recommendedText">Recommended Kalahari Natural Oils as a supplier</p>
                        <div className="starsContainer">
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <p>
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