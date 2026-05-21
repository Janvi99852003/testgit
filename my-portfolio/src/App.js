import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SkillBadge from './components/SkillBadge';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import About from './components/About';

const skills = ["HTML", "CSS", "JavaScript", "React"];

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "Real-time weather data using OpenWeather API. Search any city and get live results.",
    tech: "React + API",
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Todo App",
    description: "Add, complete and delete tasks. Built with useState hook.",
    tech: "React + useState",
    link: "https://github.com"
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "This very website! Built from scratch while learning React in 30 minutes.",
    tech: "React"
  }
];

function App() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1rem' }}>

        <About />

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e1e4e8' }} />

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>My Skills</h2>
          <div>
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </section>

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e1e4e8' }} />

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>My Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </section>

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e1e4e8' }} />

        <section style={{ marginBottom: '2.5rem' }}>
          <h2>Contact Me</h2>
          <ContactForm />
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;