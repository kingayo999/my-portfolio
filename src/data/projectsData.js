export const projectsData = [
    {
        id: 'student-management-system',
        title: 'Student Management System',
        category: 'Full-Stack System',
        desc: 'A robust, multi-role academic administration hub with database-level security and automated workflows.',
        fullDesc: 'This flagship project centralizes university operations, including student enrollment, fee tracking, and academic record management. It replaces fragmented legacy workflows with a unified, real-time digital environment.',
        approach: 'Built with React 19 and Supabase, the system uses a schema-first approach. Complex logic like matriculation number generation and audit logging is handled directly in PostgreSQL via triggers and stored procedures.',
        challenges: 'The primary challenge was implementing secure, multi-tenant-style isolation. I solved this by leveraging PostgreSQL Row Level Security (RLS) and custom RBAC functions to ensure data integrity across Admin, Staff, and Student roles.',
        results: 'Achieved sub-second data synchronization and industrial-grade security enforcement that operates independently of the frontend logic.',
        tech: ['React 19', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        link: 'https://kingayo999.github.io/student-management-system/',
        github: 'https://github.com/kingayo999/STUDENT-MANAGEMENT-SYSTEM'
    },
    {
        id: 'nexus-ecommerce',
        title: 'E-Commerce Inventory Prototype',
        category: 'Development Study',
        desc: 'An exploratory project focused on handling state management and simulated real-time updates for product catalogs.',
        fullDesc: 'The Nexus project served as a deep dive into React state management and asynchronous data fetching. It explores how to handle inventory synchronization in a simplified e-commerce context.',
        approach: 'I used Node.js and Redis to experiment with distributed locking and caching mechanisms, focusing on the technical hurdles of concurrent checkouts.',
        challenges: 'Managing race conditions during peak checkout simulation was the main engineering challenge addressed.',
        results: 'Validated a pattern for optimistic UI updates and robust server-side validation.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
        link: '#',
        github: '#'
    },
    {
        id: 'visionary-crm',
        title: 'CRM Integration Study',
        category: 'Technical Prototype',
        desc: 'A study on integrating Prisma with a relational database to manage customer data and basic predictive logic.',
        fullDesc: 'Visionary CRM was built to explore the trade-offs between different ORMs and database normalization strategies. It features a custom ETL pipeline study for data normalization.',
        approach: 'Architected with Next.js and Prisma to understand type-safe database interactions and the scalability of relational schemas.',
        challenges: 'The main goal was integrating diverse simulated data sources into a unified schema without performance bottlenecks.',
        results: 'Successfully implemented a normalized schema that maintains high performance under simulated load.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
        link: '#',
        github: '#'
    }
];
