import React, { ReactNode } from 'react';

interface BackgroundSectionProps {
    image: string;
    className?: string;
    backgroundPosition?: string;
    children?: ReactNode;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
    image,
    className = '',
    backgroundPosition = 'center',
    children
}) => {
    return (
        <div
            className={`counter-area relative mt-16 ${className}`}
            style={{
                backgroundImage: `url('${image}')`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: backgroundPosition,
                filter: 'brightness(50%)',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="row h-32">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BackgroundSection;
