import React from "react";
import logos from "../imgs/logo.png";
import faceimg from "../imgs/451112440_1898269430639898_843756217286475983_n.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faV} from "@fortawesome/free-solid-svg-icons";
import '../css/header.css';
function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="container_logos">
                        <img src={logos} alt="logo"/>
                        <h3>LIBSLAY</h3>
                    </div>
                </div>

                <div className="col">
                    <div className="row">
                        <div className='col'>
                            <a>Home</a>
                        </div>

                        <div className='col'>
                            <a>My Books</a>
                        </div>

                        <div className='col'>
                            <a>Reviews</a>
                            <FontAwesomeIcon icon={faV} />
                        </div>

                        <div className='col'>
                            <a>Community</a>
                            <FontAwesomeIcon icon={faV} />
                        </div>

                        <div className='col'>
                            <img src={faceimg} alt='avatar' className='avatar'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;