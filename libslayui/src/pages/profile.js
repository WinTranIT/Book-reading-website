import React from 'react';
import {faGift, faPencil, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import avatar from '../imgs/z5459114771324_7fe84273b41fb6a6f3f6d9d9a96d06fb.jpg';
import myfavorit from '../imgs/4e59232c36537e736e8a499031c8f2f1.png';
import avabook from '../imgs/07202f5b88571c73f99be80eda4a8cfe.jpg';
import '../css/profile.css';

function Profile() {
    let percentage = 90;
    const data = [
        { day: "Mon", hours: 2 },
        { day: "Tue", hours: 4 },
        { day: "Wed", hours: 3 },
        { day: "Thu", hours: 2 },
        { day: "Fri", hours: 3 },
        { day: "Sat", hours: 4 },
        { day: "Sun", hours: 1 },
    ];
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
                <div className="row">
                    <h5>This Week Statistics</h5>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="bg-beige p-6 rounded-lg shadow-lg">
                            <div className="grid grid-cols-7 gap-4 items-end">
                                {data.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div
                                            className="w-8 bg-darkBlue rounded-t-lg"
                                            style={{height: `${(item.hours / 5) * 100}%`}}
                                        ></div>
                                        <div className="w-8 h-32 bg-white rounded-b-lg border-t-2 border-beige"></div>
                                        <span className="mt-2 text-gray-700 text-sm">{item.day}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Trục thời gian */}
                            <div className="mt-4 grid grid-rows-6 h-40">
                                {[5, 4, 3, 2, 1, 0].map((hour, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-gray-700 text-sm">{hour}h</span>
                                        <hr className="flex-grow border-t border-gray-300"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

        </div>

    );
}

export default Profile;