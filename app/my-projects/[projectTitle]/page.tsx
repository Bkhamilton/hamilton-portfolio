import { notFound } from "next/navigation";
import Image from "next/image";

interface ProjectParams {
    projectTitle: string;
}

const ProjectDetails = ({ params }: { params: ProjectParams }) => {
    const { projectTitle } = params;

    // Example data for demonstration purposes
    const projectData = {
        "BetSmarter": {
            date: "2024-Present",
            description: "A web application for smarter betting strategies.",
            longDescription: "BetSmarter is a platform that helps users make informed betting decisions using advanced analytics and machine learning.",
            link: "https://betsmarter.com",
            image: "/placeholder-image.png",
        },
        "Game Library": {
            date: "2025",
            description: "A library of mobile games for iOS and Android, built with React Native.",
            longDescription: "Game Library is a collection of fun and engaging mobile games designed for players of all ages.",
            link: "https://gamelibrary.com",
            image: "/placeholder-image.png",
        },
        "BudJournal": {
            date: "2024",
            description: "A journal application for tracking cannabis strains and effects, built with React and Firebase.",
            longDescription: "BudJournal allows users to log their cannabis experiences, helping them find the perfect strain for their needs.",
            link: "https://budjournal.com",
            image: "/placeholder-image.png",
        },
        "Chloe Goodman Hair": {
            date: "2025",
            description: "A personal website for a hair stylist, showcasing her portfolio and services.",
            longDescription: "Chloe Goodman Hair is a beautifully designed website that highlights the stylist's work and offers easy booking options.",
            link: "https://chloegoodmanhair.com",
            image: "/placeholder-image.png",
        },
        // Add more projects here
    };

    const project = projectData[projectTitle];

    if (!project) {
        notFound(); // Show a 404 page if the project is not found
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{projectTitle}</h1>
            <Image
                src={project.image}
                alt={projectTitle}
                width={600}
                height={300}
                className="w-full h-auto object-cover mb-4"
            />
            <p className="text-lg text-green-700 mb-2">{project.description}</p>
            <p className="text-sm text-blue-500 mb-4">{project.date}</p>
            <p className="text-base text-white-800 mb-4">{project.longDescription}</p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Visit Project
            </a>
        </div>
    );
};

export default ProjectDetails;