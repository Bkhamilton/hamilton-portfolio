import React from 'react';
import { notFound } from 'next/navigation';
import ProjectPage from '@/components/MyProjects/ProjectPage';
import projects from '@/data/projects.json';

interface Project {
    title: string;
    date: string;
    description: string;
    longDescription: string;
    link: string;
    image: string;
}

export type paramsType = Promise<{ projectTitle: string }>;

// Generate static paths for all projects
export async function generateStaticParams() {
    return Object.keys(projects).map((projectTitle) => ({
        projectTitle,
    }));
}

// Dynamic route component
export default function ProjectDetails(props: { params: paramsType }) {
    const { projectTitle } = React.use(props.params);

    const project = projects[projectTitle as keyof typeof projects];

    if (!project) {
        notFound(); // Show a 404 page if the project is not found
    }

    return <ProjectPage project={project} />;
}