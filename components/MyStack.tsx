import React from 'react';

const MyStack = () => {
    return (
        <section className="flex items-center bg-gradient-to-b from-gray-600 to-gray-500 justify-center h-screen bg-gray-100 w-full">
            <div className="flex w-full max-w-6xl mx-auto p-8">
                <div className="w-1/3 text-left">
                    <h2 className="text-4xl font-bold mb-4">My Tech Stack</h2>
                </div>
                <div className="w-2/3 text-left">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-2">Front End</h3>
                        <ul className="space-y-2">
                            <li className="text-xl">JavaScript</li>
                            <li className="text-xl">TypeScript</li>
                            <li className="text-xl">React</li>
                            <li className="text-xl">Next.js</li>
                            <li className="text-xl">Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-2">Back End</h3>
                        <ul className="space-y-2">
                            <li className="text-xl">Node.js</li>
                            <li className="text-xl">Express</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-2">Database</h3>
                        <ul className="space-y-2">
                            <li className="text-xl">MongoDB</li>
                            <li className="text-xl">PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Tools</h3>
                        <ul className="space-y-2">
                            <li className="text-xl">Git</li>
                            <li className="text-xl">Docker</li>
                            <li className="text-xl">Webpack</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyStack;