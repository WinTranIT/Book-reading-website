import React from 'react';
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {
    return (

        <div className="bg-bg_primary-50 min-h-screen flex justify-center items-center p-4">
            <div className="grid">
                <h1 className=" font-bold text-text_Secondary">CONTACT US</h1>

                {/*Left Section*/}
                <div className="bg-bg_primary p-8 rounded-md flex">
                    <div className="flex items-center">
                        <div className="grid text-left" style={{width: "30%"}}>
                            <h2 className="text-xl font-bold text-gray-700">Contact Us</h2>
                            <p className="text-gray-600 text-left">
                                Not sure what you need? The team at Square Events will be happy to listen to you and suggest
                                event ideas you hadn’t considered.
                            </p>
                            <div className="flex items-center mb-4">
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.003 5.884L10 10.118l7.997-4.234A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.882l-8 4.235-8-4.235V14a2 2 0 002 2h12a2 2 0 002-2V8.882z" />
                                </svg>
                                <span className="ml-2 text-gray-600">companyname@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-gray-600"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3.18 4.257A5.57 5.57 0 0110 3c1.15 0 2.25.336 3.18.924a1 1 0 01-.92 1.736A3.57 3.57 0 0010 5c-1.19 0-2.33.4-3.25 1.08a1 1 0 01-1.57-1.034zm4.49 1.93a1 1 0 01.823-.474h1.994a1 1 0 01.823.474l1.387 2.318a1 1 0 01-.017 1.03L11.613 11h-3.226L7.3 9.535a1 1 0 01-.017-1.029l1.387-2.318zm-3.528 4.05c.354-.204.76-.316 1.178-.316h7.404a2.57 2.57 0 011.178.316l1.385 2.318a2 2 0 01-1.73 3.03H4.572a2 2 0 01-1.73-3.03l1.4-2.318z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="ml-2 text-gray-600">Support: (+98) 123 456 7890</span>
                            </div>
                        </div>
                        {/* Right Section */}
                        {/*<div className="shadow">*/}
                        <ContactForm/>
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUsPage;
