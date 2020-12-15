import React, { useState } from 'react'
import "./Hotitems.css"

function Hotitems() {
    const [items, setitems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [stars, setStars] = useState([1, 2, 3, 4, 5])
    return (
        <div className={"hotitems-container "}>
            { items.map(i => (<div className={` hot-item${i}`} >
                <div className="hotitem-card">
                    <div className="hotitem-img">
                        <h5 className="hotitem-name">Fusion backpack</h5>
                        <h6 className="hot-item-prize">$50</h6>
                        {stars.map(i => (<svg className={`star${i}`} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#828282" />
                        </svg>


                        ))}



                    </div>
                    <h6 className="reviews">3 reviews</h6>
                    <h6 className="addreviews">add your review</h6>
                    <button className="button-style">Add to cart</button>
                    <div class="likecontainer">
                        <svg className='like-button' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16L7.695 14.849C3.06 10.7771 0 8.08283 0 4.79564C0 2.10136 2.178 0 4.95 0C6.516 0 8.019 0.706267 9 1.81362C9.981 0.706267 11.484 0 13.05 0C15.822 0 18 2.10136 18 4.79564C18 8.08283 14.94 10.7771 10.305 14.849L9 16Z" fill="#828282" />
                        </svg>
                    </div>

                </div>






            </div>))}


        </div>)

}

export default Hotitems
