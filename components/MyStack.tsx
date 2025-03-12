import React from 'react';

const MyStack = () => {
    return (
        <section className="flex items-center bg-gradient-to-b from-gray-600 to-gray-500 justify-center h-screen bg-gray-100 w-full">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">My Tech Stack</h2>
                <p className="text-lg">
                    Here are the technologies I work with:
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="text-xl">JavaScript</li>
                    <li className="text-xl">TypeScript</li>
                    <li className="text-xl">React</li>
                    <li className="text-xl">Next.js</li>
                    <li className="text-xl">Tailwind CSS</li>
                    <li className="text-xl">Node.js</li>
                    <li className="text-xl">Express</li>
                </ul>
            </div>
        </section>
    );
};

export default MyStack;