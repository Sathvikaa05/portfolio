import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Komara Sathvika',
  shortName: 'K. Sathvika',
  role: 'AI and ML Undergraduate',
  location: 'Hyderabad, India',
  email: 'sathvikakomara333@gmail.com',
  phone: '+91 9618651142',
  linkedin: 'https://www.linkedin.com/in/sathvika-komara',
  github: 'https://github.com/Sathvikaa05',
  summary:
    'Motivated AI and ML undergraduate with strong foundations in Python, Java, web development, and machine learning. Seeking opportunities to apply technical and problem-solving skills to develop innovative software solutions while continuously learning and contributing to organizational growth.',
};

const highlights = [
  { value: '9.17', label: 'Current B.Tech CGPA' },
  { value: '95%', label: 'Fall detection ML accuracy' },
  { value: '3', label: 'Internships completed' },
];

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'C'],
  },
  {
    title: 'Machine Learning',
    items: ['Classification Models', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation', 'Scikit-learn'],
  },
  {
    title: 'Web Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'Google Colab'],
  },
  {
    title: 'Core Concepts',
    items: ['Machine Learning', 'Data Analysis', 'Cybersecurity Fundamentals'],
  },
];

const projects = [
  {
    name: 'IoT-Based Fall Detection System for Elderly Care',
    type: 'IoT + Machine Learning',
    description:
      'Developed a wearable fall detection system using NodeMCU and MPU6050 sensors to identify risky movement patterns for elderly care use cases.',
    stack: ['NodeMCU', 'MPU6050', 'Machine Learning', 'Classification'],
    impact: 'Applied ML models for fall classification with nearly 95% accuracy.',
  },
  {
    name: 'Cervical Cancer Prediction Using Machine Learning',
    type: 'Healthcare AI',
    description:
      'Built machine learning models for cervical cancer prediction using healthcare datasets, with careful preprocessing and feature preparation.',
    stack: ['Python', 'Scikit-learn', 'Data Preprocessing', 'Model Evaluation'],
    impact: 'Practiced responsible ML workflow across feature engineering, training, and evaluation.',
  },
  {
    name: 'Automated Timetable Generator',
    type: 'Scheduling System',
    description:
      'Developed an automated timetable scheduling system that helps generate academic schedules while detecting timing conflicts.',
    stack: ['Scheduling Logic', 'Conflict Detection', 'Web Development'],
    impact: 'Converted a manual planning workflow into a structured, rule-aware system.',
  },
];

const experience = [
  {
    period: 'Feb 2025 - Mar 2025',
    title: 'AI Intern',
    company: 'Edunet Foundation, AICTE and Shell',
    detail: 'Worked on AI-driven sustainability solutions during a Green Skills internship.',
  },
  {
    period: 'Feb 2025 - Mar 2025',
    title: 'Cyber Security Intern',
    company: 'Skill Craft Technologies',
    detail: 'Explored cybersecurity fundamentals, vulnerability assessment, and threat modelling.',
  },
  {
    period: 'Jan 2025 - Feb 2025',
    title: 'Frontend Development Intern',
    company: 'Orison Technologies',
    detail: 'Built responsive web applications using React.js and Tailwind CSS.',
  },
];

const education = [
  {
    school: 'Vardhaman College of Engineering, Hyderabad',
    program: 'B.Tech in CSE (AI and ML)',
    period: '2023 - 2027',
    metric: 'CGPA: 9.17',
  },
  {
    school: 'TSWREIS Junior College, Khammam',
    program: 'Intermediate (MPC)',
    period: '2021 - 2023',
    metric: '97.6%',
  },
];

const certifications = [
  'Agentforce Specialist - Salesforce',
  'Database Management System - NPTEL',
  'CCNA: Introduction to Networks - Cisco',
  'Python Essentials - Cisco',
  'Python (Basic) - HackerRank',
];

const achievements = [
  'Tech-Lead Intern - Summer of AI 2025',
  'NCC Cadet',
  'District Youth Parliament Winner',
  'Selected for State-Level Athletic Championship',
  'Attendee - IEEE Leadership Summit',
];

const strengths = [
  'Combines AI and ML fundamentals with practical web development',
  'Comfortable with data preprocessing, model building, and evaluation',
  'Builds responsive React interfaces with Tailwind CSS',
  'Brings leadership experience through NCC, youth parliament, and tech programs',
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <Nav />
      <Hero />
      <Section id="about" eyebrow="Profile" title="AI and ML learner with a builder mindset.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-ink/10 bg-white/75 p-6 shadow-soft backdrop-blur">
            <p className="text-lg leading-8 text-ink/78">{profile.summary}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="flex gap-3 rounded-md bg-cloud/70 p-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-coral" />
                  <p className="text-sm leading-6 text-ink/78">{strength}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="rounded-lg border border-ink/10 bg-ink p-6 text-white shadow-soft animate-reveal"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <p className="text-4xl font-black">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/65">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="skills" eyebrow="Technical Skills" title="A practical stack across AI, data, and frontend engineering.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skills.map((group, index) => (
            <article
              key={group.title}
              className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft animate-reveal"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-basil/20 bg-basil/10 px-3 py-1.5 text-sm font-semibold text-basil"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="projects" eyebrow="Projects" title="Applied work in machine learning, healthcare AI, IoT, and scheduling.">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-coral/40"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-coral">{project.type}</p>
              <h3 className="mt-3 text-2xl font-black">{project.name}</h3>
              <p className="mt-4 leading-7 text-ink/70">{project.description}</p>
              <p className="mt-5 rounded-md bg-marigold/12 p-4 text-sm leading-6 text-ink/75">
                <strong className="text-ink">Outcome:</strong> {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-ink px-3 py-1 text-xs font-bold text-white">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="experience" eyebrow="Experience" title="Internships across AI, cybersecurity, and frontend development.">
        <div className="grid gap-4">
          {experience.map((item) => (
            <article
              key={`${item.title}-${item.company}`}
              className="grid gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-soft md:grid-cols-[180px_1fr]"
            >
              <p className="text-lg font-black text-basil">{item.period}</p>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 font-semibold text-coral">{item.company}</p>
                <p className="mt-2 leading-7 text-ink/70">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section id="education" eyebrow="Education" title="Strong academic foundation in computer science and AI.">
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-basil">{item.period}</p>
              <h3 className="mt-3 text-2xl font-black">{item.school}</h3>
              <p className="mt-3 text-lg font-semibold text-ink/75">{item.program}</p>
              <p className="mt-4 inline-flex rounded-full bg-coral/12 px-4 py-2 font-black text-coral">{item.metric}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="credentials" eyebrow="Credentials" title="Certifications, leadership, and communication strengths.">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.8fr]">
          <ListCard title="Certifications" items={certifications} />
          <ListCard title="Achievements and Leadership" items={achievements} />
          <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold">Languages</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {['English', 'Telugu', 'Hindi'].map((language) => (
                <span key={language} className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">
                  {language}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Section>
      <Contact />
    </main>
  );
}

function Nav() {
  const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-base font-black">
          {profile.shortName}
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="rounded-md px-3 py-2 text-sm font-semibold capitalize text-ink/68 transition hover:bg-ink hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="rounded-md bg-coral px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-ink">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] px-5 pb-16 pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 hero-grid" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_430px]">
        <div className="animate-reveal">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-basil">
            {profile.location} based {profile.role}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            {profile.name} builds AI-aware, user-focused software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            B.Tech CSE (AI and ML) student with hands-on work in machine learning, React development, cybersecurity fundamentals, and IoT-based problem solving.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-md bg-ink px-6 py-3 text-center font-bold text-white shadow-soft transition hover:bg-basil">
              View Projects
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-md border border-ink/20 bg-white/70 px-6 py-3 text-center font-bold transition hover:border-coral hover:text-coral">
              Hire Sathvika
            </a>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
            <div className="portfolio-portrait">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Open To</p>
                <p className="mt-3 text-4xl font-black text-white">AI, ML, Frontend and Software Roles</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md bg-cloud p-4">
                <p className="text-sm font-bold text-ink/60">Current CGPA</p>
                <p className="mt-1 font-black">9.17</p>
              </div>
              <div className="rounded-md bg-coral/12 p-4">
                <p className="text-sm font-bold text-ink/60">Best Fit</p>
                <p className="mt-1 font-black">AI + Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-coral">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ListCard({ title, items }) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-md bg-cloud/70 p-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-basil" />
            <p className="text-sm font-semibold leading-6 text-ink/78">{item}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-16 md:py-20">
      <div className="mx-auto max-w-7xl rounded-lg bg-ink p-7 text-white shadow-soft md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-marigold">Contact</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Ready for internships, projects, and interviews.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/72">
              Sathvika is interested in opportunities across AI, machine learning, frontend development, and software engineering.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a href={`mailto:${profile.email}`} className="rounded-md bg-white px-5 py-3 text-center font-bold text-ink transition hover:bg-marigold">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`} className="rounded-md border border-white/20 px-5 py-3 text-center font-bold transition hover:bg-white hover:text-ink">
              {profile.phone}
            </a>
            <a href={profile.linkedin} className="rounded-md border border-white/20 px-5 py-3 text-center font-bold transition hover:bg-white hover:text-ink">
              LinkedIn Profile
            </a>
            <a href={profile.github} className="rounded-md border border-white/20 px-5 py-3 text-center font-bold transition hover:bg-white hover:text-ink">
              GitHub Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
