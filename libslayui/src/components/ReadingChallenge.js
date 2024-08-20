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
        <div className="bg-bg_RecColor p-6 border-1 border-black rounded-lg w-full h-full">
            <h2 className="text-2xl font-bold text-center mb-3">2024 READING CHALLENGE</h2>
            <span className="text-center text-xl mb-4 ">Challenge Your Self to Read More This Year</span>
            <div className="flex flex-col justify-center items-center mt-3">
                <img src={ReadingChallengeimg} alt="Reading Challenge" className="rounded-lg bg-[#A4C0ED] h-full w-4/6"/>
                <span className="text-black px-4 py-2 text-xl rounded-full">I Want to Read</span>
            </div>
            <div className="flex flex-col items-center mb-4">
                <ButtonIncrement/>
                <span className="text-left text-xl mt-4">You Can Change Your Goal at Any Time</span>
            </div>
            <div className="mb-4">
                <h3 className="font-bold">THE BOOK SHELVES</h3>
                <ul className="mt-2 text-left text-xl space-y-1">
                    <li className="flex justify-between">
                        <span>Want to Read</span>
                        <span>(0)</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Currently Reading</span>
                        <span>(0)</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Completed</span>
                        <span>(0)</span>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-5 gap-1  mt-4">
                <FaGoogle size={50}/>
                <FaApple size={50}/>
                <FaInstagramSquare size={50}/>
                <FaFacebookSquare size={50}/>
                <FaSquareXTwitter size={50}/>
            </div>
        </div>
    );
}

export default ReadingChallenge;
