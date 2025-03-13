import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
    return (
        <section className="h-screen flex items-center bg-gradient-to-b from-gray-500 to-gray-400 md:from-gray-600 md:to-gray-500 justify-center bg-gray-100 w-full">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-lg">
                    Here are some of the projects I have worked on:
                </p>
                <ul className="mt-6 space-y-4">
                    <ProjectBox
                        projectName="Project 1"
                        date="2021"
                        projectDescription="This is a project I worked on in 2021."
                    />
                    <ProjectBox
                        projectName="Project 2"
                        date="2020"
                        projectDescription="This is a project I worked on in 2020."
                    />
                    <ProjectBox
                        projectName="Project 3"
                        date="2019"
                        projectDescription="This is a project I worked on in 2019."
                    />
                </ul>
            </div>
        </section>
    );
};

export default Projects;