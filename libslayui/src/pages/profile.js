import React from 'react';
import {faGift, faPencil, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from '../imgs/z5459114771324_7fe84273b41fb6a6f3f6d9d9a96d06fb.jpg';
import myfavorit from '../imgs/4e59232c36537e736e8a499031c8f2f1.png';
import avabook from '../imgs/07202f5b88571c73f99be80eda4a8cfe.jpg';
import '../css/profile.css';
import logo from '../imgs/logo.png';
import {useNavigate} from "react-router-dom";

function Profile() {
    let percentage = 90;
    const navigate = useNavigate();
    const percent = [3, 2, 3, 4, 5, 1.5, 2.5];
    return (
        <div className="container mt-6">
            <div className="row">
                <div className="row">
                    <h2 className='text-[#265073]'>Profile</h2>
                    <button
                        className="editprofile boxshadow absolute right-[14%] bg-[#265073] rounded-[50px] text-white"
                    >
                        Edit Profile
                        <FontAwesomeIcon className="ml-1" icon={faPencil} style={{color: "#ffffff",}}/>
                    </button>
                </div>
                <div className="row profile_row1">
                    <div className="col-3">
                        <div className="row profile_avatar">
                            <img
                                className="boxshadow p-0 rounded-[20px] ml-[18px]"
                                src={avatar} alt="avatar"/>
                        </div>
                        <div className="row">
                            <span className='text-left text-xl font-medium leading-9 mt-2'>
                                Details
                            </span>
                        </div>
                        <div className="row">
                            <span className='text-left mt-3'> Good man, Bến Tre, Việt Nam</span>
                        </div>
                        <div className="row flex">

                            <span className='text-left mt-2'><FontAwesomeIcon icon={faGift}/> Birthday: 15/08/2003</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            <h5 className='text-left ml-5'>WinTran IT</h5>
                        </div>
                        <div className="row ml-5 mt-3">
                            <div className="col bg-[#A4C0ED] rounded-[10px] boxshadow ml-[40px]">
                                <div className="row">
                                    <span className='text-white font-semibold leading-9 text-2xl'>100</span>
                                </div>
                                <div className="row">
                                    <span className='text-base font-medium leading-[26px]'>Books</span>
                                </div>
                            </div>
                            <div className="col bg-[#A4C0ED] rounded-[10px] boxshadow ml-[40px]">
                                <div className="row">
                                    <span className='text-white font-semibold leading-9 text-2xl'>1,245</span>
                                </div>
                                <div className="row">
                                    <span className='text-base font-medium leading-[26px]'>Friend's</span>
                                </div>
                            </div>
                            <div className="col bg-[#A4C0ED] rounded-[10px] boxshadow ml-[40px]">
                                <div className="row">
                                    <span className='text-white font-semibold leading-9 text-2xl'>8</span>
                                </div>
                                <div className="row">
                                    <span className='text-base font-medium leading-[26px]'>Following</span>
                                </div>
                            </div>
                        </div>
                        <div className="row ml-5">
                            <div className="row mt-4">
                                <h5 className='text-left ml-5'>Details</h5>
                            </div>
                            <div className="row">
                                <span className='text-left ml-5 text-[18px]'>Joined in Month DD YEAR</span>
                            </div>
                        </div>
                        <div className="row ml-5">
                            <div className="row mt-3">
                                <span className="text-left ml-5">
                                    Favorite
                                    <span className='text-[#265073] font-bold ml-1'>GENRES</span>
                                </span>
                            </div>
                            <div className="row">
                                <span className="text-[14px] text-left ml-5">
                                    Romance, Mystery/Thriller, Fantasy, Science Fiction, +5 More
                                </span>
                            </div>
                        </div>
                        <div className="row ml-5">
                            <div className="row mt-4">
                                <h5 className='text-left ml-5'>My BookShelves</h5>
                            </div>
                            <div className="row text-white mt-3">
                                <div className="col-2 bg-[#265073] rounded-[10px] boxshadow ml-[40px]">
                                    <div className="row">
                                        <span className='font-semibold leading-9 text-xl'>
                                            Read
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className='text-[16px] font-medium leading-[26px]'>(01)</span>
                                    </div>
                                </div>
                                <div className="col bg-[#265073] rounded-[10px] boxshadow ml-[40px]">
                                    <div className="row">
                                        <span className='font-semibold leading-9 text-xl'>
                                            Currently Reading
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className='text-[16px] font-medium leading-[26px]'>
                                            (00)
                                        </span>
                                    </div>
                                </div>
                                <div className="col-3 bg-[#265073] rounded-[10px] boxshadow ml-[40px]">
                                    <div className="row">
                                        <span className='font-semibold leading-9 text-xl'>
                                            To Read
                                        </span>
                                    </div>
                                    <div className="row">
                                        <span className='text-[16px] font-medium leading-[26px]'>
                                            (00)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 relative ">
                        <img src={myfavorit} alt="slay"
                        className='profile_col3'
                        />
                        <button className='profile_button_add_favorit'>
                            <FontAwesomeIcon className='profile_icon_add' icon={faPlus} style={{color: "#ffffff",}}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="row mt-4 pl-0">
                    <h5 className='text-[#265073] text-left pl-0'>
                        Reading
                    </h5>
                </div>
                <div className="row profile_row1">
                    <div className="col-2">
                        <img className='w-[153px] h-[189px] rounded-[20px]' src={avabook} alt="book"/>
                    </div>
                    <div className="col-2 text-left">
                        <div className="row mt-4">
                            <h5>Sách trong sáng</h5>
                        </div>
                        <div className="row">
                            <h6>Wintranit</h6>
                        </div>
                        <div className="row">
                            <span>
                                <FontAwesomeIcon className='mr-2' icon={faStar} style={{color: "#FFD43B",}}/>
                                <FontAwesomeIcon className='mr-2' icon={faStar} style={{color: "#FFD43B",}}/>
                                <FontAwesomeIcon className='mr-2' icon={faStar} style={{color: "#FFD43B",}}/>
                                <FontAwesomeIcon className='mr-2' icon={faStar} style={{color: "#FFD43B",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "rgba(189,189,189,0.99)",}}/>
                            </span>

                        </div>
                    </div>
                    <div className="col">
                        <div className="row mt-5">
                            <div className="flex items-center">
                                {/* Thanh tiến trình */}
                                <div className="relative w-full h-6 bg-white rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-500"
                                        style={{width: `${percentage}%`}}
                                    ></div>
                                </div>
                                {/* Phần trăm */}
                                <span className="ml-2 text-black font-semibold">{percentage}%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <button
                        className='mt-5 boxshadow px-[32px] py-[9px] rounded-[10px] bg-[#265073] text-white'
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="row  mt-5 pl-0">
                    <h5 className='text-[#265073] text-left pl-0'>
                        This Week Statistics
                    </h5>
                </div>
                <div className="row">
                    <div className="col profile_row1 relative mr-4">
                        <h6 className='text-left border-b-2 border-solid border-[#2F4F4F80] mb-4'>5h</h6>
                        <h6 className='text-left border-b-2 border-solid border-[#2F4F4F80] mb-4'>4h</h6>
                        <h6 className='text-left border-b-2 border-solid border-[#2F4F4F80] mb-4'>3h</h6>
                        <h6 className='text-left border-b-2 border-solid border-[#2F4F4F80] mb-4'>2h</h6>
                        <h6 className='text-left border-b-2 border-solid border-[#2F4F4F80] mb-4'>1h</h6>
                        <h6 className='text-left border-b-2 border-solid border-[#2F4F4F80] mb-2'>0h</h6>
                        <div className="row">
                            <div className="col ml-12"><span>Mon</span></div>
                            <div className="col"><span>Tue</span></div>
                            <div className="col"><span>Wed</span></div>
                            <div className="col"><span>Thu</span></div>
                            <div className="col"><span>Fri</span></div>
                            <div className="col"><span>Sat</span></div>
                            <div className="col"><span>Sun</span></div>
                        </div>

                        <div
                            className="profile_barchart_col profile_barchart_col1 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(0)/5)*100}%`}}
                            ></div>
                        </div>
                        <div
                            className="profile_barchart_col profile_barchart_col2 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(1)/5)*100}%`}}
                            ></div>
                        </div>
                        <div
                            className="profile_barchart_col profile_barchart_col3 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(2)/5)*100}%`}}
                            ></div>
                        </div>
                        <div
                            className="profile_barchart_col profile_barchart_col4 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(3)/5)*100}%`}}
                            ></div>
                        </div>
                        <div
                            className="profile_barchart_col profile_barchart_col5 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(4)/5)*100}%`}}
                            ></div>
                        </div>
                        <div
                            className="profile_barchart_col profile_barchart_col6 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(5)/5)*100}%`}}
                            ></div>
                        </div>
                        <div
                            className="profile_barchart_col profile_barchart_col7 transform rotate-270
                            absolute bg-white rounded-full overflow-hidden shadow-inner"
                        >
                            <div
                                className="absolute top-0 left-0 h-full bg-[#265073] rounded-full transition-all duration-500"
                                style={{width: `${(percent.at(6)/5)*100}%`}}
                            ></div>
                        </div>

                    </div>

                    <div className="col-4 profile_row1">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <img className='rounded-full ml-3' src={logo} alt='logo libslay'/>
                                    </div>
                                    <div className="col flex items-center">
                                        <h5 className='text-left font-bold'>LIBSLAY</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <h4 className='text-[30px] font-bold leading-[36px] text-[#265073] mt-4'>
                                        Go Premium
                                    </h4>
                                    <span className='text-[16px] font-medium leading-[21px] text-[#00000080]'>
                                        Explore 25k+ Books with lifetime membership
                                    </span>
                                </div>
                                <div className="row">
                                    <button className='profile_buy mt-4'>Buy!</button>
                                </div>
                            </div>
                            <div className="col">
                                <img className='h-[344px]' src={myfavorit} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row flex justify-end">
                <button
                    className='text-center profile_logout mr-5 mb-5'
                    onClick={() => {sessionStorage.clear(); navigate("/")}}
                >
                    Logout
                </button>
            </div>
        </div>

    );
}

export default Profile;