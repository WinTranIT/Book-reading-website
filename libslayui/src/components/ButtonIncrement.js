import React, { useState } from 'react';

const ButtonIncrement = () => {
    const [quantity, setQuantity] = useState(12);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    return (
        <form className="w-1/3 mx-auto">
            <div className="flex flex-row justify-center bg-white rounded-md p-2">
                <button
                    type="button"
                    id="decrement-button"
                    onClick={handleDecrement}
                    className="flex-shrink-0 bg-transparent hover:bg-gray-200 inline-flex items-center justify-center border border-black rounded-full h-8 w-8 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                    <svg
                        className="w-4 h-4 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <span
                    id="counter-span"
                    data-input-counter
                    className="text-gray-900 border-0 bg-transparent text-2xl font-medium focus:outline-none focus:ring-0 text-center ml-4 mr-4"
                >
            {quantity}
        </span>
                <button
                    type="button"
                    id="increment-button"
                    onClick={handleIncrement}
                    className="flex-shrink-0 bg-transparent hover:bg-gray-200 inline-flex items-center justify-center border border-black rounded-full h-8 w-8 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                >
                    <svg
                        className="w-4 h-4 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default ButtonIncrement;
