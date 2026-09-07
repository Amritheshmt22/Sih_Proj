import { useParams, Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";

function Portfolio() {
  const { person } = useParams();

  const data = portfolioData[person];

  if (!data) {
    return (
      <div className="portfolio-not-found">
        <h1>Portfolio Not Found</h1>
        <Link to="/">← Back to Aaru Bytes</Link>
      </div>
    );
  }

  return (
    <div className="portfolio-page">

      <header className="portfolio-header">
        <Link to="/" className="portfolio-back">
          ← Back to Aaru Bytes
        </Link>
      </header>

      <main>

        <section className="portfolio-hero">

          <img
            src={data.photo}
            alt={data.name}
            className="portfolio-photo"
          />

          <div className="portfolio-intro">
            <p className="portfolio-role">
              {data.role}
            </p>

            <h1>{data.name}</h1>

            <p className="portfolio-about">
              {data.about}
            </p>

            <div className="portfolio-socials">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href={`mailto:${data.email}`}>
                Email
              </a>
            </div>
          </div>

        </section>

        <section className="portfolio-section">
          <h2>Skills</h2>

          <div className="skill-list">
            {data.skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <h2>Education</h2>

          <div className="education-card">
            <h3>{data.education.degree}</h3>

            <p>{data.education.institution}</p>

            <span>{data.education.year}</span>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>Projects</h2>

          <div className="project-grid">
            {data.projects.map((project) => (
              <div
                className="project-card"
                key={project.title}
              >
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section">
          <h2>Achievements</h2>

          <div className="achievement-list">
            {data.achievements.map((achievement) => (
              <div
                className="achievement-card"
                key={achievement}
              >
                {achievement}
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="portfolio-footer">
        <p>
          © 2026 {data.name} | Aaru Bytes
        </p>
      </footer>

    </div>
  );
}

export default Portfolio;