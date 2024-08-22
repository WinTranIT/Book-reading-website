import React, {useState} from "react";
import logos from "../imgs/logo.png";
import faceimg from "../imgs/451112440_1898269430639898_843756217286475983_n.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faV} from "@fortawesome/free-solid-svg-icons";
import '../css/header.css';
import {useNavigate} from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const storedUserSession =JSON.parse(sessionStorage.getItem("user"));

    // Hàm để thay đổi trạng thái dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home'); // Chuyển hướng đến route /home
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="container_logoslay cursor-pointer" onClick={() => navigate("/home")}>
                        <img src={logos} alt="logo"/>
                        <h3>LIBSLAY</h3>
                    </div>
                </div>

                <div className="col flex items-center">
                    <div className="row flex-1 items-center">
                        <div className='col relative group'>
                            <a onClick={(e) => { e.preventDefault(); handleClick(); }} className="hover-underline text-xl font-medium no-underline cursor-pointer text-black"
                            >Home</a>
                        </div>

                        <div className='col-3 relative group'>
                            <a onClick={() => navigate(`/my-book`)}
                                className="hover-underline text-xl font-medium no-underline cursor-pointer text-black"
                            >My Books</a>
                        </div>

                        <div className='col-3 relative group inline-block text-left' >
                            <button
                                onClick={toggleDropdown}
                                className="hover-underline text-xl font-medium no-underline cursor-pointer text-black"
                            >Community
                                <FontAwesomeIcon icon={faV} width="11" className="relative top-1 left-1"/>
                            </button>
                            {isOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg ring-1
                                    ring-black ring-opacity-5 focus:outline-none">
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <a
                                            href="#"
                                            className="
                                            hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out
                                             no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Group
                                        </a>
                                        <a
                                            href="#"
                                            className="
                                            hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out
                                            no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Quotes
                                        </a>
                                        <a
                                            href="#"
                                            className="
                                            hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out
                                            no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Ask the Author
                                        </a>
                                        <a
                                            href="#"
                                            className="
                                            hover-underline transform scale-100 hover:scale-110 transition duration-300 ease-in-out
                                            no-underline block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            People
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='col-3 relative group'>
                            <a href="#"
                               className="hover-underline text-xl font-medium no-underline cursor-pointer text-black"
                            >Contact US
                            </a>
                        </div>

                        <div className='col cursor-pointer' onClick={() => navigate("/profile")}>
                            <img src={storedUserSession.urlavatar} alt='avatar' className='avatar rounded-full w-9 h-9'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;