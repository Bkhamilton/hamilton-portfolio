import React from 'react';
import WorkExperience from './WorkExperience';

const Experience = () => {
    return (
        <section className="h-screen flex bg-gradient-to-b from-gray-600 to-gray-500 items-center justify-center bg-gray-100 w-full">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">My Work Experience</h2>
                <WorkExperience 
                    companyName="SPI Pharma" 
                    jobTitle="IT Intern" 
                    startTime="Aug 2023" 
                    endTime="Oct 2023" 
                />
                <WorkExperience 
                    companyName="Tatum Robotics" 
                    jobTitle="Full Stack Consultant" 
                    startTime="Jan 2023" 
                    endTime="May 2023" 
                />
            </div>
        </section>
    );
};

export default Experience;