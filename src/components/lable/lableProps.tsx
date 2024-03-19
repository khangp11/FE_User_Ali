import React from 'react';

interface LabelProps {
    text: string;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
    return <h1 className={className}>{text}</h1>;
};

export default Label;
