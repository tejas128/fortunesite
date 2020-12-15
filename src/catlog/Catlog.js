import React, { useState } from 'react'
import Card from './Card'
import "./Catlog.css"
import Options from "./Option"
function Catlog() {

    const [noofoptions, setnoofoptions] = useState(["STYLE", "CATEGORY", "STYLE", "SIZE", "PRICE", "COLOR", "ACTIVITY", "MATERIAL", "STRAP/HANDLE", "FEATURES", "GENDER", "PATTERN", "CLIMATE"])
    const [collecitonnames, setcollectionnames] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    return (
        <>
            <div className="nav-track">
                <h5 className='home-text'>Home</h5>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.5 5.5L1 10" stroke="#828282" />
                </svg>

                <h5 className="collection-name-text">New Luma Yoga Collection </h5>
            </div>
            <h1 className="collection-name">New Luma Yoga Collection</h1>
            <div className="collection-container">
                <div className="catlog-shopping-options">
                    <h5 className="shopping-option">Shopping option</h5>
                    <div className="shopping-option-container">


                        {noofoptions.map((i) => (
                            <Options option={i} />
                        ))}


                    </div>
                    <h6 className="compare-Product-text">CompareProduct<span>(2 items)</span></h6>
                    <div className="summit-watch">

                        <div className="cross-holder">
                            <svg className="cross" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8995 1L1.00004 10.8995" stroke="#4F4F4F" />
                            </svg>
                            <svg className="cross" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00012 1L10.8996 10.8995" stroke="#4F4F4F" />
                            </svg>


                        </div>
                        <h6 className="watch-style">Summit Watch</h6>

                    </div>
                    <div className="cruise-watch">

                        <div className="cross-holder">
                            <svg className="cross" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8995 1L1.00004 10.8995" stroke="#4F4F4F" />
                            </svg>
                            <svg className="cross" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00012 1L10.8996 10.8995" stroke="#4F4F4F" />
                            </svg>


                        </div>
                        <h6 className="watch-style">Cruise Dual Analog Watch</h6>

                    </div>
                    <div className="compare-clear-holder">
                        <div className="compare-button">Compare</div>
                        <div className="clear-button">Clear all</div>
                    </div>
                    <h6 className="my-wish-list">My Wish List</h6>
                    <h4 className="no-items-wishlist">You have no items in your wish list</h4>
                </div>

                <div className="collection-box">

                    <div className="collection">
                        <div className="views-button-holder">
                            <div className="rect-views-button-holder">
                                <div className="view-button-holder">

                                    <div className="rect-holder">
                                        <svg className="rec1" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec2" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec3" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec4" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec5" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec6" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec7" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec8" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="rec9" width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="4" height="4" fill="#7D7D7D" />
                                        </svg>


                                    </div>

                                </div>
                                <div className="view-button-holder2">
                                    <div className="rect-holder2">
                                        <svg className="v2-rect" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="7" height="7" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="v2-rect2" width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="7" height="3" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="v2-rect3" width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="7" height="3" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="v2-rect4" width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="7" height="3" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="v2-rect5" width="7" height="3" viewBox="0 0 7 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="7" height="3" fill="#7D7D7D" />
                                        </svg>
                                        <svg className="v2-rect6" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="7" height="7" fill="#7D7D7D" />
                                        </svg>


                                    </div>
                                </div>
                            </div>

                            <h6 className="itemsrange">Items 1-9 of 32</h6>
                        </div>
                        <div className="sort-by-button">
                            <div className="sort-container">
                                <h6 className="sortby">Sort By</h6>
                                <div className="sort-button">
                                    <h6 className="sort-button-text">Position</h6>
                                    <svg className="sort-dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5 5L1 1" stroke="#4F4F4F" />
                                    </svg>

                                </div>
                                <svg className="up-sign" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 6H3.85V12H7.15V6H11L5.5 0L0 6Z" fill="#828282" />
                                </svg>
                            </div>

                        </div>
                        {collecitonnames.map((i) => (<Card collectioncardno={i} />))}
                    </div>
                    <div className="sizes">
                        <div className="size"><h6 className="size-text">32</h6></div>
                        <div className="size"><h6 className="size-text">33</h6></div>
                        <div className="size"><h6 className="size-text">34</h6></div>
                        <div className="size"><h6 className="size-text">36</h6></div>
                    </div>
                    <div className="colorofitem">
                        <div className="color1"></div>
                        <div className="color2"></div>
                        <div className="color3"></div>
                    </div>
                    <div className="pageno-box">
                        <div className="pagenoslide">
                            <div className="pageno-container first-no">
                                <h6 className="page-no">1</h6>
                            </div>
                            <div className="pageno-container">
                                <h6 className="page-no">2</h6>
                            </div>
                            <div className="pageno-container">
                                <h6 className="page-no">3</h6>
                            </div>
                            <div className="pageno-container">
                                <h6 className="page-no">4</h6>
                            </div>
                            <div className="pagenochangebutton">
                                <svg className="page-change-logo" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5.5 5.5L1 10" stroke="#828282" />
                                </svg>

                            </div>
                        </div>
                        <div className="noofitemperpage">
                            <h6 className="show-text">show</h6>
                            <div className="noofitemperpageselector">
                                <h6 className="itemsperpage">9</h6>
                                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1.25L5.5 5.75L1 1.25" stroke="#828282" />
                                </svg>

                            </div>
                            <h6 className="perpage-text">per page</h6>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default Catlog
