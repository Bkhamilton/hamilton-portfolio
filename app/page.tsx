import React from 'react';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import MyStack from '../components/MyStack';
import MyProjects from '../components/MyProjects';
import Resume from '../components/Resume';

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
                <MyProjects />
            </section>
            <section className="h-screen w-full">
                <Resume />
            </section>
        </div>
    );
}