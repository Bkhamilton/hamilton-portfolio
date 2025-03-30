import React from 'react';
import { notFound } from 'next/navigation';
import ProjectPage from '@/components/MyProjects/ProjectPage';
import projects from '@/data/projects.json';

export type paramsType = Promise<{ projectTitle: string }>;

// Generate static paths for all projects
export async function generateStaticParams() {
    return Object.keys(projects).map((projectTitle) => ({
        projectTitle: projectTitle.replace(/\s+/g, '-'), // Convert spaces to hyphens
      }));
}

// Dynamic route component
export default function ProjectDetails(props: { params: paramsType }) {
    const { projectTitle } = React.use(props.params);
    // Extract the project title from the params and replace hyphens with spaces
    const lookupTitle = projectTitle.replace(/-/g, ' ');
    const project = projects[lookupTitle as keyof typeof projects];

    if (!project) {
        notFound(); // Show a 404 page if the project is not found
    }

    return <ProjectPage project={project} />;
}