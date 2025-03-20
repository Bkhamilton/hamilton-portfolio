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

            {/* Main Content */}
            <section id="intro" className="md:h-screen w-full">
                <Intro />
            </section>
            <section id="about-me" className="md:h-screen w-full">
                <Services />
            </section>
            <section id="my-stack" className="md:h-screen w-full">
                <MyStack />
            </section>

            {/* Phone Layout */}
            <div className="block md:hidden">
                <section id="experience" className="h-screen w-full">
                    <Experience />
                </section>
                <section id="projects" className="h-screen w-full">
                    <Projects />
                </section>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
                <section id="my-work" className="h-screen w-full flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/2 h-full">
                        <Experience />
                    </div>
                    <div className="w-full md:w-1/2 h-full">
                        <Projects />
                    </div>
                </section>
            </div>

            <section id="resume" className="md:h-screen w-full">
                <Resume />
            </section>
        </div>
    );
}