export const projectsData = [
    {
        id: 'nexus-ecommerce',
        title: 'Nexus E-Commerce',
        category: 'Web Application',
        desc: 'A premium, high-conversion e-commerce ecosystem featuring real-time inventory management across global warehouses.',
        fullDesc: 'The Nexus E-Commerce project was designed to solve the critical problem of inventory synchronization for multi-national retailers. By implementing a distributed locking mechanism with Redis and a reactive frontend using React, we achieved real-time updates across multiple time zones.',
        approach: 'I adopted a microservices-inspired architecture using Node.js to separate the order processing engine from the inventory management system. This allowed for independent scaling during high-traffic events like Black Friday.',
        challenges: 'Handling race conditions during peak checkout times was the major hurdle. I implemented a robust queuing system using BullMQ to ensure data integrity and a seamless user experience.',
        results: '20% increase in average order value and a 99.9% uptime during the largest sales event of the year.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
        link: '#',
        github: '#'
    },
    {
        id: 'visionary-crm',
        title: 'Visionary CRM',
        category: 'Enterprise Solutions',
        desc: 'A next-generation customer relationship management platform designed for scale with advanced predictive analytics.',
        fullDesc: 'Visionary CRM is more than a database; it is an intelligent engine. We integrated machine learning models to predict customer churn and suggest automated outreach strategies, transforming raw data into actionable business intelligence.',
        approach: 'Using Next.js and Tailwind for a lightning-fast, responsive UI, while architecting the backend with Prisma for type-safe database interactions. The system was designed to handle millions of records without performance degradation.',
        challenges: 'Integrating diverse data sources without creating bottlenecks. I designed a custom ETL pipeline that normalized data from various marketing tools into a unified schema.',
        results: 'Reduced customer churn by 15% for early-adopter clients and improved sales team efficiency by 30%.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
        link: '#',
        github: '#'
    },
    {
        id: 'athletix-pro',
        title: 'Athletix Pro',
        category: 'Mobile First',
        desc: 'A high-performance sports performance tracking application engineered for sub-millisecond live data synchronization.',
        fullDesc: 'Athletix Pro brings elite-level performance tracking to the palm of your hand. By leveraging React Native and low-latency Firebase listeners, we provided athletes with instantaneous feedback on their biometric data during training sessions.',
        approach: 'A focus on "Offline-First" architecture. Data is captured locally and synced to the cloud whenever a connection is available, ensuring no workout data is ever lost.',
        challenges: 'Optimizing battery consumption while continuously polling biometric sensors. I implemented a sophisticated polling strategy that adjusts frequency based on heart rate variability.',
        results: 'Currently used by 10+ professional sports teams with a 4.9/5 rating on the App Store.',
        tech: ['React Native', 'Firebase', 'Redux', 'External API'],
        link: '#',
        github: '#'
    }
];
