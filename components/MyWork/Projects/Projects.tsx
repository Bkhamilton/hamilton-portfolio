import React from 'react';
import ProjectBox from './ProjectBox';
import projects from '@/data/projects.json'

type Project = {
    title: string;
    date: string;
    description: string;
    longDescription: string;
    link: string;
    image: string;
};

const Projects = () => {
    return (
        <section className="md:h-screen flex items-center justify-center w-full text-white">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-lg">
                    Here are some of the projects I have worked on:
                </p>
                <ul className="mt-6">
                        {Object.keys(projects).map((key) => {
                            const typedProjects: Record<string, Project> = projects;
                            const project = typedProjects[key];
                            return (
                                <ProjectBox
                                    key={key} // Use the project key as a unique identifier
                                    projectName={project.title}
                                    date={project.date}
                                    projectDescription={project.description}
                                />
                            );
                        })}
                </ul>
            </div>
        </section>
    );
};

export default Projects;