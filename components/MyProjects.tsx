import React from 'react';

const MyProjects = () => {
    return (
        <section className="h-screen flex items-center bg-gradient-to-b from-gray-500 to-gray-400 justify-center bg-gray-100 w-full">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-lg">
                    Here are some of the projects I have worked on:
                </p>
                <ul className="mt-6 space-y-4">
                    <li className="border p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">Project 1</h3>
                        <p>A brief description of Project 1.</p>
                    </li>
                    <li className="border p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">Project 2</h3>
                        <p>A brief description of Project 2.</p>
                    </li>
                    <li className="border p-4 rounded shadow">
                        <h3 className="text-xl font-semibold">Project 3</h3>
                        <p>A brief description of Project 3.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default MyProjects;