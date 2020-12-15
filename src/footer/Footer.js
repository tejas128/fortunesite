import React from 'react'
import "./footer.css"
function Footer() {
    return (
        <div class="footer">
            <div className="footer-top">
                <div className="footerlink-container">
                    <div className="footerlinks1">
                        <li className="footerlink">About us</li>
                        <li className="footerlink">Customer Service</li>
                    </div>
                    <div className="footerlinks2">
                        <li className="footerlink">Privacy and Cookie Policy</li>
                        <li className="footerlink">Search Terms</li>
                        <li className="footerlink">Orders and Returns </li>
                        <li className="footerlink">Advanced Search Contact Us</li>
                        <li className="footerlink">Contact Us</li>


                    </div>

                </div>






            </div>
            <div className="email-input-holder">

                <div className="email-input-box">
                    <div className="email-logo-holder"><svg className="email-logo" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3 3L8.5 6.75L1.7 3V1.5L8.5 5.25L15.3 1.5V3ZM15.3 0H1.7C0.7565 0 0 0.6675 0 1.5V10.5C0 10.8978 0.179107 11.2794 0.497918 11.5607C0.81673 11.842 1.24913 12 1.7 12H15.3C15.7509 12 16.1833 11.842 16.5021 11.5607C16.8209 11.2794 17 10.8978 17 10.5V1.5C17 0.6675 16.235 0 15.3 0Z" fill="#828282" />
                    </svg></div>

                    <input className="email-input" type="text" placeholder="Enter your email address"></input>
                </div>



                <div className="subscribe-button">Subscribe</div>
            </div>
            <div className="footer-bottom">
                <h6 className="footer-bottom-text">Copyright © 2020 Code Partner IT Solutions Pvt. Ltd. All rights reserved.</h6>
            </div>


        </div>
    )
}

export default Footer
