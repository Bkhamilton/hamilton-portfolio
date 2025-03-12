import React from 'react';

const Resume = () => {
    return (
        <section className="h-screen flex items-center bg-gradient-to-b from-gray-400 to-gray-300 justify-center bg-gray-100 w-full">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Resume</h2>
                <p className="text-lg">
                    Here you can find my professional experience, education, and skills.
                </p>
                <a
                    href="/path-to-your-resume.pdf"
                    className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;