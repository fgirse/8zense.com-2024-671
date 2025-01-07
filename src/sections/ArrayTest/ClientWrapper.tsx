import React from 'react';

// Define the type for the array elements
interface Feature {
  title: string;
  icon: string;
  description: string;
}

// Define the props type
interface ClientWrapperProps {
  serverArray: Feature[];
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ serverArray }) => {
  return (
    <div>
      {serverArray.map((feature, index) => (
        <div key={index}>
          <img src={feature.icon} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientWrapper;
