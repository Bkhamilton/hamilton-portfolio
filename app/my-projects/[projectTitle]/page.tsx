import React from 'react';
import { notFound } from 'next/navigation';
import ProjectPage from '@/components/MyProjects/ProjectPage';

interface Project {
    title: string;
    date: string;
    description: string;
    longDescription: string;
    link: string;
    image: string;
}

export type paramsType = Promise<{ projectTitle: string }>;

// Define the list of projects and their details
const projectData: Record<string, Project> = {
    "BetSmarter": {
        title: "BetSmarter",
        date: "2024-Present",
        description: "A web application for smarter betting strategies.",
        longDescription: "BetSmarter is a platform that helps users make informed betting decisions using advanced analytics and machine learning.",
        link: "https://betsmarter.com",
        image: "/placeholder-image.jpg",
    },
    "Game%20Library": {
        title: "Game Library",
        date: "2025",
        description: "A library of mobile games for iOS and Android, built with React Native.",
        longDescription: "Game Library is a collection of fun and engaging mobile games designed for players of all ages.",
        link: "https://gamelibrary.com",
        image: "/placeholder-image.jpg",
    },
    "BudJournal": {
        title: "BudJournal",
        date: "2024",
        description: "A journal application for tracking cannabis strains and effects, built with React and Firebase.",
        longDescription: "BudJournal allows users to log their cannabis experiences, helping them find the perfect strain for their needs.",
        link: "https://budjournal.com",
        image: "/placeholder-image.jpg",
    },
    "Chloe%20Goodman%20Hair": {
        title: "Chloe Goodman Hair",
        date: "2025",
        description: "A personal website for a hair stylist, showcasing her portfolio and services.",
        longDescription: "Chloe Goodman Hair is a beautifully designed website that highlights the stylist's work and offers easy booking options.",
        link: "https://chloegoodmanhair.com",
        image: "/placeholder-image.jpg",
    },
};

// Generate static paths for all projects
export async function generateStaticParams() {
    return Object.keys(projectData).map((projectTitle) => ({
        projectTitle,
    }));
}

// Dynamic route component
export default function ProjectDetails(props: { params: paramsType }) {
    const { projectTitle } = React.use(props.params);

    const project = projectData[projectTitle];

    if (!project) {
        notFound(); // Show a 404 page if the project is not found
    }

    return <ProjectPage project={project} />;
}