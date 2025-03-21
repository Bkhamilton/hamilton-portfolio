import React from 'react';
import './ShootingStars.css'; // Create a CSS file for the styles

interface ShootingStarsProps {
    count?: number; // Number of shooting stars (default is 5)
}

const ShootingStars: React.FC<ShootingStarsProps> = ({ count = 5 }) => {
    return (
        <div className="shooting-stars">
            {[...Array(count)].map((_, index) => (
                <span key={index} className={`shoot-star star-${index + 1}`}></span>
            ))}
        </div>
    );
};

export default ShootingStars;