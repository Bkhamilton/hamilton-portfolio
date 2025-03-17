import React from 'react';
import Experience from '@/components/MyWork/Experience/Experience';
import Projects from '@/components/MyWork/Projects/Projects';

const MyWork = () => {
    return (
        <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
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