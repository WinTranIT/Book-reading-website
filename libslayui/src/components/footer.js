import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../css/footer.css';
import {faApple, faFacebook, faInstagram, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import gg_play from '../imgs/95bf7a3df8f6f393c4a255e6d6f4226a.png';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row border-b border-custom-gray">
                    <div className="col">
                        <div className="row mb-2.5">
                            <h4 className="text-[#265073] text-lg font-bold leading-6 text-left">COMPANY</h4>
                        </div>
                        <div className="row cursor-pointer">
                            <span
                                className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out
                         mb-2.5 text-left text-base font-normal">
                                About us
                            </span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Careers</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Terms</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Privacy</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Interest Based Ads</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Ads Preferences</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Help</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row mb-2.5">
                            <h4 className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out text-[#265073] text-lg font-bold leading-6 text-left">WORK
                                WITH US</h4>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Authors</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Advertise</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Author & Ads blog</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">API</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row mb-2.5">
                            <h4 className="text-[#265073] text-lg font-bold leading-6 text-left">CONTACT</h4>
                        </div>
                        <div className="row mb-4">
                            <div className="col cursor-pointer
                            transform scale-100 hover:scale-110 transition duration-300 ease-in-out hover:text-[#FFA146]
                            ">
                                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6"/>
                            </div>
                            <div className="col cursor-pointer
                            transform scale-100 hover:scale-110 transition duration-300 ease-in-out hover:text-[#FFA146]
                            ">
                                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6"/>
                            </div>
                            <div className="col cursor-pointer
                            transform scale-100 hover:scale-110 transition duration-300 ease-in-out hover:text-[#FFA146]
                            ">
                                <FontAwesomeIcon icon={faInstagram}
                                                 className="w-6 h-6"/></div>
                            <div className="col cursor-pointer
                            transform scale-100 hover:scale-110 transition duration-300 ease-in-out hover:text-[#FFA146]
                            ">
                                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="row mb-2.5">
                            <h4 className="text-[#265073] text-lg font-bold leading-6 text-left">SUPPORT</h4>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">FAQ</span>
                        </div>
                        <div className="row cursor-pointer"><span
                            className="hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out mb-2.5 text-left text-base font-normal">Search Guide</span>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="row mb-10">
                            <h1>LIBSLAY</h1>
                        </div>

                        <div className="row">
                            <div className="col cursor-pointer">
                                <div className="row bg-[#265073] rounded-2xl h-full w-full  gradient-button">
                                    <div className="col-4 flex items-center justify-end">
                                        <FontAwesomeIcon className="text-[50px]" icon={faApple}
                                                         style={{color: "#ffffff",}}/>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <span className="text-white text-[13px]">Download on The</span>
                                        </div>
                                        <div className="row">
                                            <span className="text-white text-xl">App Store</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col cursor-pointer">
                                <div className="row bg-[#265073] rounded-2xl  gradient-button">
                                    <div className="col-4 flex items-center justify-end">
                                        <img src={gg_play} alt="Google Play" width="40px"/>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <span className="text-white text-[13px]">GET IT ON</span>
                                        </div>
                                        <div className="row">
                                            <span className="text-white text-xl">Google Play</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <span
                        className="text-[16px] font-normal leading-snug ">
                        Copyright © 2019 - 2025 ZanSlay. All rights reserved
                    </span>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
