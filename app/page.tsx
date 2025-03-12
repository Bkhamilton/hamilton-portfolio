import React from 'react';
import Intro from '@/components/Intro/Intro';
import AboutMe from '@/components/AboutMe/AboutMe';
import MyStack from '@/components/MyStack/MyStack';
import Experience from '@/components/Experience/Experience';
import MyProjects from '@/components/MyProjects/MyProjects';
import Resume from '@/components/Resume/Resume';

export default function Home() {
    return (
        <div className="overflow-y-scroll">
            <section className="h-screen w-full">
                <Intro />
            </section>
            <section className="h-screen w-full">
                <AboutMe />
            </section>
            <section className="h-screen w-full">
                <MyStack />
            </section>
            <section className="h-screen w-full">
                <Experience />
            </section>
            <section className="h-screen w-full">
                <MyProjects />
            </section>
            <section className="h-screen w-full">
                <Resume />
            </section>
        </div>
    );
}