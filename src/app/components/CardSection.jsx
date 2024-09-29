import React from 'react';
import ReusableCard from './Reusable/ReusableCard'; // Make sure to import your ReusableCard component

const CardSection = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 text-center">
            <h1 className="text-2xl font-bold mb-2 text-green-500 dark:text-white">MSexy & Healthy</h1>
            <h2 className="text-3xl font-semibold mb-1 text-gray-700 dark:text-gray-300">Our Services</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
                This is a small sentence providing additional context about the cards displayed below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ReusableCard
                    title="Card 1 Title"
                    description="Description for card 1. This card contains relevant information."
                    link="#"
                    linkText="Learn More"
                    icon="/bonfire.svg"
                />
                <ReusableCard
                    title="Card 2 Title"
                    description="Description for card 2. This card contains relevant information."
                    link="#"
                    linkText="Learn More"
                    icon="/coconut.svg"
                />
                <ReusableCard
                    title="Card 3 Title"
                    description="Description for card 3. This card contains relevant information."
                    link="#"
                    linkText="Learn More"
                    icon="/plane.svg"
                />
                <ReusableCard
                    title="Card 4 Title"
                    description="Description for card 4. This card contains relevant information."
                    link="#"
                    linkText="Learn More"
                    icon="/bar-summer-svgrepo-com.svg"
                />
            </div>
        </div>
    );
};

export default CardSection;
