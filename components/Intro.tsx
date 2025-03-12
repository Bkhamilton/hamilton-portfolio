import React from 'react';

const Intro = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
                <p className="mt-4 text-lg">I am a passionate developer with a love for creating beautiful and functional web applications.</p>
            </div>
        </section>
    );
};

export default Intro;