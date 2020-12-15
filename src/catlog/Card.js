import React from 'react'
import "./card.css"

function Card({ collectioncardno }) {
    return (
        <div className={`collection-card ccard${collectioncardno}`}>
            <div className="card-img-holder"></div>
            <h6 className="collection-card-name">Fusion Backpack</h6>
            <div className="rating-reviews-holder">
                <div className="rating">
                    <svg className="collectionstar-1" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#828282" />
                    </svg>
                    <svg className="collectionstar-2" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#828282" />
                    </svg>
                    <svg className="collectionstar-3" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#828282" />
                    </svg>
                    <svg className="collectionstar-4" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#828282" />
                    </svg>
                    <svg className="collectionstar-5" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#828282" />
                    </svg>
                </div>


                <h6 className="collection-reviews">3 reviews</h6>
            </div>

            <h6 className="collection-price">$59.00</h6>
        </div>
    )
}

export default Card
