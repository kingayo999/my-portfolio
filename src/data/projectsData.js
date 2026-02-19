export const projectsData = [
    {
        id: 'student-management-system',
        title: 'Automating University Operations',
        category: 'Enterprise Web Application',
        objective: 'Reduce administrative overhead by 80% through a centralized, multi-role digital system.',
        desc: 'A full-stack platform that replaces manual academic administration with automated enrollment, fee tracking, and real-time records.',
        fullDesc: 'This system centralizes university operations — student enrollment, fee tracking, and academic records — into one unified digital environment. It was built to replace disconnected legacy workflows that caused errors and operational delays.',
        approach: 'Built with React 19 and Supabase, the system uses a schema-first design. Complex business logic and audit trails are handled directly in PostgreSQL via triggers and stored procedures for maximum reliability.',
        challenges: 'Implementing secure, multi-role data isolation. Solved by leveraging PostgreSQL Row Level Security (RLS), ensuring data integrity operates independently of the frontend.',
        results: 'Replaced 5 manual processes with automated workflows. Achieved sub-second data synchronization and tamper-resistant, database-level security enforcement.',
        tech: ['React 19', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
        link: 'https://kingayo999.github.io/student-management-system/',
        github: 'https://github.com/kingayo999/STUDENT-MANAGEMENT-SYSTEM'
    },
    {
        id: 'nexus-ecommerce',
        title: 'High-Traffic Inventory Management',
        category: 'Full-Stack Technical Prototype',
        objective: 'Ensure 100% data accuracy during concurrent inventory updates and high-load checkout flows.',
        desc: 'A technical solution for real-time inventory synchronization, using distributed locking to prevent overselling under concurrent load.',
        fullDesc: 'Built to validate technical patterns for handling high-concurrency conditions. The project mirrors architectural challenges faced by global e-commerce platforms during peak traffic — specifically inventory reliability.',
        approach: 'Used Node.js and Redis for distributed locking. The frontend implements optimistic UI updates with server-side reconciliation for a fast, accurate user experience.',
        challenges: 'Managing race conditions during simultaneous checkout simulations. Resolved through strategic Redis locks and transactional database writes.',
        results: 'Validated an architecture that prevents inventory errors under load. Maintained a responsive interface while catching all concurrent edge cases.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
        link: '#',
        github: '#'
    },
    {
        id: 'visionary-crm',
        title: 'Centralized Customer Data Integration',
        category: 'Technical Architecture Study',
        objective: 'Consolidate multi-source customer data into a single, high-speed interface with zero data loss.',
        desc: 'A technical study in schema normalization and ETL pipelines, designed to handle diverse data shapes without performance bottlenecks.',
        fullDesc: 'Visionary CRM solves a specific architectural challenge: integrating messy data sources into a consistent record without sacrificing query performance. It simulates real-world data fragmentation issues.',
        approach: 'Architected with Next.js and Prisma for type-safe database interactions. Designed a normalized relational schema with a lightweight ETL pipeline for data unification.',
        challenges: 'Designing a flexible schema for varied data formats. Resolved through strategic denormalization and indexed views for common access patterns.',
        results: 'Maintained consistent query performance under multi-source load. Successfully unified varied input formats with 100% data integrity in testing.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
        link: '#',
        github: '#'
    }
];
