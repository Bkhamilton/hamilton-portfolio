import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
    return (
        <section className="md:h-screen flex items-center justify-center w-full text-white">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-lg">
                    Here are some of the projects I have worked on:
                </p>
                <ul className="mt-6">
                    <ProjectBox
                        projectName="BetSmarter"
                        date="2024-Present"
                        projectDescription="A web application for smarter betting strategies."
                    />
                    <ProjectBox
                        projectName="Game Library"
                        date="2025"
                        projectDescription='A library of mobile games for iOS and Android, built with React Native.'
                    />
                    <ProjectBox
                        projectName='BudJournal'
                        date='2024'
                        projectDescription='A journal application for tracking cannabis strains and effects, built with React and Firebase.'
                    />
                    <ProjectBox
                        projectName='Chloe Goodman Hair'
                        date='2025'
                        projectDescription='A personal website for a hair stylist, showcasing her portfolio and services.'
                    />
                </ul>
            </div>
        </section>
    );
};

export default Projects;