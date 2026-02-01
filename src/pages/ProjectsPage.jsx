import Projects from '../components/Projects';

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <Projects />
            <div style={{ textAlign: 'center', paddingBottom: '100px' }}>
                <p className="hero-description">Explore more of my work on GitHub.</p>
                <a
                    href="https://github.com/kingayo999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-secondary"
                    style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                    Visit GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectsPage;
