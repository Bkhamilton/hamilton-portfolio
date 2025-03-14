import React from 'react';
import Service from './Service';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'; // Example icons from React Icons

const AboutMe = () => {
    return (
        <section className="h-screen flex flex-col bg-gradient-to-b from-gray-800 to-gray-700 items-center justify-center bg-gray-100 w-full px-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">My Services</h2>
                <p className="text-lg text-gray-200">
                    I am a passionate developer with a love for creating dynamic and responsive web applications.
                    My journey in tech has equipped me with a diverse skill set and a keen eye for detail.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                <Service
                    title="Front End Development"
                    description="Building responsive and dynamic websites."
                    icon={<FaCode />}
                />
                <Service
                    title="Back End Development"
                    description="Creating robust server-side applications."
                    icon={<FaMobileAlt />}
                />
                <Service
                    title="Web Development"
                    description="Building responsive and dynamic websites."
                    icon={<FaCode />}
                />
                <Service
                    title="Mobile Development"
                    description="Creating mobile apps for iOS and Android."
                    icon={<FaMobileAlt />}
                />
                <Service
                    title="Content Management (CMS)"
                    description="Managing and optimizing content for websites."
                    icon={<FaPaintBrush />}
                />
                <Service
                    title="UI/UX Design"
                    description="Designing user-friendly and visually appealing interfaces."
                    icon={<FaPaintBrush />}
                />
            </div>
        </section>
    );
};

export default AboutMe;