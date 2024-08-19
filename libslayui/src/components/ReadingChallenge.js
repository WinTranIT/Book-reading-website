import React from 'react';
import ReadingChallengeimg from '../imgs/readingChallenge.png';
import ButtonIncrement from "./ButtonIncrement";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function ReadingChallenge() {
    return (
        <div className="bg-bg_RecColor p-6 border-1 border-black rounded-lg shadow-lg w-full h-full">
            <h2 className="text-xl font-bold text-center mb-4">2024 READING CHALLENGE</h2>
            <span className="text-center  mb-4 ">Challenge Your Self to Read More This Year</span>
            <div className="flex flex-col justify-center items-center">
                <img src={ReadingChallengeimg} alt="Reading Challenge" className="rounded-lg bg-[#A4C0ED]"/>
                <span className="text-black px-4 py-2 rounded-full">I Want to Read</span>
            </div>
            <div className="flex items-center mb-4">
                <ButtonIncrement/>
            </div>
            <div className=" mb-4">
                <span className="text-left mb-4">You Can Change Your Goal at Any Time</span>
                <h3 className="text-lg font-bold">THE BOOK SHELVES</h3>
                <ul className="mt-2 ml-8 text-left space-y-1" >
                    <li>Want to Read (0)</li>
                    <li>Currently Reading (0)</li>
                    <li>Completed (0)</li>
                </ul>
            </div>
            <div className="grid grid-cols-5 gap-2  mt-4">
                <FaGoogle size={30}/>
                <FaApple size={30}/>
                <FaInstagramSquare size={30} />
                <FaFacebookSquare size={30}/>
                <FaSquareXTwitter size={30}/>
            </div>
        </div>
    );
}

export default ReadingChallenge;
