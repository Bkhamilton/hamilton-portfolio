"use client";
import React from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Intro = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById('about-me');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="flex flex-col items-center justify-between md:h-screen text-white w-full bg-space-background bg-cover bg-center py-10">
            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-8">
                {/* Section A with Glassmorphism Effect */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 p-8 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
                    <h1 className="text-5xl font-bold">Ben Hamilton</h1>
                    <h2 className="text-3xl font-semibold mt-2">Software Developer</h2>
                    <p className="mt-4 text-lg">
                        I am a passionate developer of websites and mobile apps, creating beautiful and functional experiences.
                    </p>
                    <div className="flex justify-center md:justify-start mt-6 space-x-4">
                        {/* Icons */}
                        <a href="https://www.linkedin.com/in/benkhamilton/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400">
                            <AiFillLinkedin /> {/* LinkedIn icon from react-icons */}
                        </a>
                        <a href="https://github.com/Bkhamilton" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
                            <AiFillGithub /> {/* GitHub icon from react-icons */}
                        </a>
                        <a href="mailto:bkhamilton310@gmail.com" className="text-3xl hover:text-red-400">
                            <AiFillMail /> {/* Mail icon from react-icons */}
                        </a>
                    </div>
                    <div className="mt-6">
                        <iframe
                            src="https://ghchart.rshah.org/1062/Bkhamilton" // Replace with your GitHub username
                            width="100%"
                            height="150"
                            title="GitHub Contribution Chart"
                            loading="lazy"
                            className='bg-gray/10 backdrop-blur-lg rounded-lg border border-white/10 shadow-lg p-4'
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                overflow: "hidden",
                            }}
                        ></iframe>
                    </div>
                </div>

                {/* Section B */}
                <div className="md:w-1/2 flex justify-center">
                    <div
                        className="w-48 h-48 rounded-full bg-gray-700 flex items-center justify-center text-lg font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300 relative"
                        onMouseEnter={(e) => {
                            const message = document.createElement('div');
                            message.textContent = 'Hi there!';
                            message.className =
                                'absolute bottom-0 translate-y-full bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg';
                            e.currentTarget.appendChild(message);
                        }}
                        onMouseLeave={(e) => {
                            const message = e.currentTarget.querySelector('div');
                            if (message) {
                                e.currentTarget.removeChild(message);
                            }
                        }}
                    >
                        {/* Placeholder for image */}
                        <Image
                            src="/logo.png" // Replace with your profile image path
                            alt="Profile"
                            width={192} // Adjust width as needed
                            height={192} // Adjust height as needed
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Arrow */}
            <div className="mt-8">
                <button
                    onClick={handleScroll}
                    className="text-white text-4xl opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                    ↓
                </button>
            </div>
        </section>
    );
};

export default Intro;