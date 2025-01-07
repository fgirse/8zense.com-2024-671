import React from 'react';
import ClientWrapper from './ClientWrapper';

// Define the type for the array elements
interface Feature {
  title: string;
  icon: string;
  description: string;
}

// This is a Server Component
export default function ArrayGenerator() {
  // Generate an array on the server
  const features: Feature[] = [
    {
      title: 'Individualität',
      icon: '/images/Individualität.gif',
      description:
        'Individualität ist bei 8zense.com gross geschrieben. Jede unserer Beton-Compositionen ist ein Einzelstück!',
    },
    {
      title: 'Networking',
      icon: '/images/networking03.gif',
      description:
        'Wir pflegen beste Verbindungen zu renommierten Architekten und Designern!',
    },
    {
      title: 'Top Qualität',
      icon: '/images/qualität.gif',
      description:
        'Alle die von uns hergestellten Werkstücke sind handgefertigt! ',
    },
    {
      title: 'Exklusiv',
      icon: '/images/exclusive.svg',
      description:
        '8zense.com steht für klares Design, hohe Funktionalität und ausgezeichneter Material Qualität!',
    },
    {
      title: 'Zeitlos',
      icon: '/images/Zeitlos.png',
      description: '8zense.com Beton-Design ist zeitlos!',
    },
  ];

  return <ClientWrapper serverArray={features} />;
}

