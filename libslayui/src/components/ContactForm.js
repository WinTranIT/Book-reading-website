import React, { useState } from 'react';
import imgContact from '../imgs/img-contact.png';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="bg-bg_contactForm p-8 shadow-inner rounded-md relative w-1/2">
            <div className="text-xl font-bold text-text_Secondary mb-6">
                <span className="block text-left">We’d Love To Hear From You!</span>
                <span className="block text-left">Let’s Get in Touch</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-600 text-sm font-bold text-left mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="fullName"
                            placeholder="Enter name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm text-left font-bold mb-2" htmlFor="company">
                            Company
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="company"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block text-gray-600 text-left text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 text-sm text-left font-bold mb-2" htmlFor="phone">
                            Phone number
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                            type="tel"
                            id="phone"
                            placeholder="+1 (555) 000 - 0000"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-600 text-sm font-bold text-left mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4 relative z-10">
                    <label className="block text-gray-600 text-sm text-left font-bold mb-2" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:border-blue-500 bg-white"
                        id="message"
                        rows="4"
                        placeholder="Type Your Message here"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="flex justify-start">
                    <button
                        className="bg-text_Secondary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-6"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
            <div className="absolute right-0 z-0" style={{ bottom: -85 }}>
                <img className="w-full max-w-xs h-auto" src={imgContact} alt="Contact Illustration" />
            </div>
        </div>
    );
};

export default ContactForm;
