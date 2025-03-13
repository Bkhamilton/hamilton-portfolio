import React from 'react';
import Experience from '@/components/MyWork/Experience/Experience';
import Projects from '@/components/MyWork/Projects/Projects';

const MyWork = () => {
    return (
        <section className="h-screen w-full flex flex-col md:flex-row bg-gradient-to-b from-gray-600 to-gray-500 items-center justify-center bg-gray-100">
            <div className="w-full md:w-1/2 h-full">
                <Experience />
            </div>
            <div className="w-full md:w-1/2 h-full">
                <Projects />
            </div>
        </section>
    );
};

export default MyWork;