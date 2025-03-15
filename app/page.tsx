import React from 'react';
import Intro from '@/components/Intro/Intro';
import Services from '@/components/Services/Services';
import MyStack from '@/components/MyStack/MyStack';
import Resume from '@/components/Resume/Resume';
import Experience from '@/components/MyWork/Experience/Experience';
import Projects from '@/components/MyWork/Projects/Projects';

export default function Home() {
    return (
        <div className="overflow-y-scroll">
            <section id="intro" className="h-screen w-full">
                <Intro />
            </section>
            <section id="about-me" className="h-screen w-full">
                <Services />
            </section>
            <section id="my-stack" className="h-screen w-full">
                <MyStack />
            </section>
            <section id="my-work" className="h-screen w-full flex flex-col md:flex-row bg-gradient-to-b from-gray-600 to-gray-500 items-center justify-center">
                <div className="w-full md:w-1/2 h-full">
                    <Experience />
                </div>
                <div className="w-full md:w-1/2 h-full">
                    <Projects />
                </div>
            </section>
            <section id="resume" className="h-screen w-full">
                <Resume />
            </section>
        </div>
    );
}