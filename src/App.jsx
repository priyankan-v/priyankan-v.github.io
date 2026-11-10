import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  GraduationCap,
  Layers,
  Mail,
  Menu,
  Moon,
  Sun,
  Wrench,
  X,
} from 'lucide-react'
import Github from './components/Github'
import Reveal from './components/Reveal'
import ProjectArtwork from './components/ProjectArtwork'
import {
  categories,
  projects,
  profile,
  resumeRequestUrl,
  skillGroups,
  education,
  experience,
} from './data/portfolio'
import './App.css'

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
const skillIcons = [Code2, Bot, Cpu, BrainCircuit, Layers, Wrench]

function getInitialTheme() {
  try {
    return localStorage.getItem('portfolio-theme') === 'light'
      ? 'light'
      : 'dark'
  } catch {
    return 'dark'
  }
}

function SectionHeading({ number, label, title, description, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [filter, setFilter] = useState('All projects')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const dialogRef = useRef(null)
  const copyTimer = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1120' : '#f8fafc')
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* Browsing without storage still supports theme switching. */
    }
  }, [theme])

  useEffect(() => {
    const sections = navigation.map(({ id }) => document.getElementById(id))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.15, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!selectedProject) return
    dialogRef.current.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedProject])

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setCopyFailed(false)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopyFailed(true)
    }
  }

  const visibleProjects = projects.filter(
    (project) => filter === 'All projects' || project.category === filter,
  )

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner wrap">
          <a
            className="brand"
            href="#home"
            aria-label="Home"
            onClick={() => {
              setMenuOpen(false)
              setActiveSection('')
            }}
          >
            <img src="/favicon.svg?v=pv-2" width="38" height="38" alt="" />
          </a>
          <nav
            id="main-navigation"
            className={`navigation ${menuOpen ? 'is-open' : ''}`}
            aria-label="Main navigation"
          >
            {navigation.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="resume-link"
              href={resumeRequestUrl}
              title="Request resume by email"
              onClick={() => setMenuOpen(false)}
            >
              Resume <Mail size={14} />
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle icon-button"
              type="button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              ref={menuButtonRef}
              className="menu-toggle icon-button"
              type="button"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="page-content">
        <Reveal
          as="section"
          direction="left"
          className="hero wrap"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="status-dot" /> ROBOTICS · EMBEDDED SYSTEMS ·
              CONTROL
            </p>
            <p className="hero-greeting">Research & Engineering Portfolio</p>
            <h1 id="hero-title">
              {profile.name}
              <span>.</span>
            </h1>
            <p className="hero-role">
              Robotics & <span>Embedded Systems</span> Engineer
            </p>
            <p className="hero-description">
              I work on robotics software and embedded systems, with a focus on
              motion control, autonomous navigation, and hardware–software
              integration.
            </p>
            <p className="hero-study">
              <GraduationCap size={17} />
              <span>
                MS student at <strong>Oklahoma State University</strong>
              </span>
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View projects <ArrowUpRight size={17} />
              </a>
              <a className="button button-outline" href="#contact">
                Contact me <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-socials">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Priyankan on LinkedIn"
              >
                <BriefcaseBusiness size={19} />
                <span>LinkedIn</span>
              </a>
              <span className="social-divider" />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Priyankan on GitHub"
              >
                <Github size={19} />
                <span>GitHub</span>
              </a>
              <span className="social-divider" />
              <a href={`mailto:${profile.email}`} aria-label="Email Priyankan">
                <Mail size={19} />
                <span>Email</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-orbit">
              <div className="orbit-dot" />
              <div className="portrait-frame">
                <img
                  className="portrait"
                  src="/images/priyankan.jpg"
                  alt="Priyankan Vettivel"
                  width="334"
                  height="334"
                  fetchPriority="high"
                />
              </div>
              <span className="portrait-bracket bracket-one" aria-hidden="true">
                +
              </span>
              <span className="portrait-bracket bracket-two" aria-hidden="true">
                +
              </span>
            </div>
            <div className="portrait-caption">
              <span className="caption-icon">
                <Cpu size={21} />
              </span>
              <div>
                <span>RESEARCH & DEVELOPMENT</span>
                <p>Robotics and embedded systems.</p>
              </div>
            </div>
            <span className="visual-coordinate" aria-hidden="true">
              HARDWARE ↔ SOFTWARE
            </span>
          </div>
          <a className="scroll-cue" href="#about">
            <span>PROFESSIONAL PROFILE</span>
            <ArrowDown size={14} />
          </a>
        </Reveal>

        <Reveal
          as="section"
          direction="right"
          className="about-section section wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <SectionHeading
            number="01"
            label="PROFESSIONAL BACKGROUND"
            title={
              <span id="about-title">
                Profile<span className="heading-dot">.</span>
              </span>
            }
          />
          <div className="about-layout">
            <div className="about-copy">
              <p className="about-lead">
                Engineering across hardware,
                <br />
                <span>software, and robotic systems.</span>
              </p>
              <p>
                I am pursuing an MS in Mechanical and Aerospace Engineering at
                Oklahoma State University, following undergraduate study in
                Electronic and Telecommunication Engineering at the University
                of Moratuwa.
              </p>
              <p>
                My technical interests include robot motion control, autonomous
                navigation, embedded software, and computer vision. My projects
                address the integration of sensing, control algorithms, and
                hardware interfaces.
              </p>
              <p>
                My experience includes graduate research and teaching,
                university laboratory instruction, and an embedded systems
                engineering internship.
              </p>
            </div>
            <aside
              className="profile-card"
              aria-label="Academic background and focus"
            >
              <div className="profile-card-heading">
                <span className="status-dot" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <dl>
                <div>
                  <dt>GRADUATE STUDY</dt>
                  <dd>MS · Mechanical & Aerospace Engineering</dd>
                </div>
                <div>
                  <dt>INSTITUTION</dt>
                  <dd>Oklahoma State University</dd>
                </div>
                <div>
                  <dt>UNDERGRADUATE STUDY</dt>
                  <dd>Electronic & Telecommunication Engineering</dd>
                </div>
                <div>
                  <dt>INSTITUTION</dt>
                  <dd>University of Moratuwa</dd>
                </div>
              </dl>
              <div className="profile-focus">
                <span>FOCUS AREAS</span>
                <div className="tag-list">
                  <span>Robotics</span>
                  <span>Embedded systems</span>
                  <span>Intelligent software</span>
                </div>
              </div>
            </aside>
          </div>
        </Reveal>

        <Reveal
          as="section"
          direction="left"
          className="skills-section section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="wrap">
            <SectionHeading
              number="02"
              label="LANGUAGES, PLATFORMS & TOOLS"
              title={
                <span id="skills-title">
                  Technical skills<span className="heading-dot">.</span>
                </span>
              }
              description="Programming languages, robotics frameworks, embedded platforms, and software development tools."
            />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index]
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-heading">
                      <span className="skill-icon">
                        <Icon size={20} />
                      </span>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="tag-list">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          direction="right"
          className="work-section section wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <SectionHeading
            number="03"
            label="ENGINEERING & ACADEMIC WORK"
            title={
              <span id="work-title">
                Selected projects
                <span className="heading-dot">.</span>
              </span>
            }
            description="Projects in robot control, autonomous navigation, embedded software, and machine learning."
          >
            <a
              className="text-link"
              href={`${profile.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub repositories <ArrowUpRight size={16} />
            </a>
          </SectionHeading>
          <div className="project-toolbar">
            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects by field"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter ${filter === category ? 'is-active' : ''}`}
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="project-count" aria-live="polite">
              {String(visibleProjects.length).padStart(2, '0')} projects
            </span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project" key={project.id}>
                <button
                  className={`project-artwork artwork-${project.artwork}`}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Read about ${project.title}`}
                >
                  <ProjectArtwork
                    type={project.artwork}
                    image={project.image}
                    alt={project.imageAlt || project.title}
                  />
                  <span className="artwork-label">{project.shortLabel}</span>
                  <span className="project-open">
                    <ArrowUpRight size={19} />
                  </span>
                </button>
                <div className="project-body">
                  <p className="project-category">
                    <span className="category-dot" />
                    {project.category}
                    <span className="project-number">{project.number}</span>
                  </p>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </button>
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list project-tools">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button
                      type="button"
                      className="read-more"
                      onClick={() => setSelectedProject(project)}
                    >
                      Project details <ArrowRight size={15} />
                    </button>
                    <a
                      className="source-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visibleProjects.some((project) => !project.image) && (
            <p className="artwork-footnote">
              Projects without photographs use conceptual illustrations. Refer
              to the linked repositories for source code and technical
              documentation.
            </p>
          )}
        </Reveal>

        <Reveal
          as="section"
          direction="left"
          className="experience-section section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="wrap">
            <SectionHeading
              number="04"
              label="RESEARCH, TEACHING & INDUSTRY"
              title={
                <span id="experience-title">
                  Experience<span className="heading-dot">.</span>
                </span>
              }
              description="Research, teaching, and industry roles in robotics, electronics, and embedded systems."
            >
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                View on LinkedIn <ArrowUpRight size={17} />
              </a>
            </SectionHeading>
            <div className="experience-timeline">
              {experience.map((item) => (
                <article className="experience-item" key={item.id}>
                  <div className="experience-period">
                    <span className="experience-node">
                      <BriefcaseBusiness size={19} />
                    </span>
                    <span>{item.period}</span>
                    {item.current && (
                      <span className="current-badge">CURRENT</span>
                    )}
                  </div>
                  <div className="experience-content">
                    <div className="experience-topline">
                      <span>{item.employment}</span>
                      <span>{item.workplace}</span>
                    </div>
                    <h3>{item.role}</h3>
                    <p className="experience-organization">
                      {item.organization}
                    </p>
                    <p className="experience-location">{item.location}</p>
                    {item.description && (
                      <p className="experience-description">
                        {item.description}
                      </p>
                    )}
                    <div className="tag-list experience-skills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          direction="right"
          className="education-section section"
          id="education"
          aria-labelledby="education-title"
        >
          <div className="wrap">
            <SectionHeading
              number="05"
              label="ACADEMIC QUALIFICATIONS"
              title={
                <span id="education-title">
                  Education
                  <span className="heading-dot">.</span>
                </span>
              }
              description="Graduate and undergraduate engineering education."
            >
              <a className="text-link" href={resumeRequestUrl}>
                Request résumé <ArrowUpRight size={16} />
              </a>
            </SectionHeading>
            <div className="education-timeline">
              {education.map((item, index) => (
                <article className="education-item" key={item.institution}>
                  <div className="education-period">
                    <span className="timeline-node">
                      <GraduationCap size={18} />
                    </span>
                    <span>{item.label}</span>
                    {index === 0 && (
                      <span className="current-badge">CURRENT</span>
                    )}
                  </div>
                  <div className="education-content">
                    <h3>{item.institution}</h3>
                    <p className="education-degree">{item.degree}</p>
                    <p className="education-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          direction="left"
          className="contact-section section wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="section-kicker">
                <span>06</span> / CONTACT
              </p>
              <h2 id="contact-title">
                Professional enquiries
                <br />
                <span>& collaboration.</span>
              </h2>
              <p>
                Please contact me regarding research collaborations, engineering
                opportunities, or technical discussions in robotics and embedded
                systems.
              </p>
              <div className="contact-links">
                <a
                  className="button button-primary"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={17} /> Send an email <ArrowUpRight size={17} />
                </a>
                <a
                  className="text-link"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} /> GitHub profile <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="email-detail">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button
                  className="icon-button copy-button"
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
                <span className="copy-status" role="status">
                  {copied
                    ? 'Email copied'
                    : copyFailed
                      ? 'Copy the email address manually.'
                      : ''}
                </span>
              </div>
              <div className="resume-request">
                <h3>Resume</h3>
                <p>
                  My resume is available on request. Email me with your name,
                  organization, and reason for requesting access. I review each
                  request before sharing a copy.
                </p>
                <a className="text-link" href={resumeRequestUrl}>
                  <Mail size={17} /> Request resume by email{' '}
                  <ArrowUpRight size={16} />
                </a>
                <p className="resume-request-note">
                  Opens a prefilled request in your email app. Send it to submit
                  your request.
                </p>
              </div>
            </div>
            <div className="contact-decoration" aria-hidden="true">
              <span>robotics</span>
              <strong>
                R&D<span>↗</span>
              </strong>
              <span>EMBEDDED SYSTEMS & CONTROL</span>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()}</span>
        <a href="#home" className="back-to-top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>

      {selectedProject && (
        <dialog
          ref={dialogRef}
          className="project-dialog"
          onClose={() => setSelectedProject(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialogRef.current.close()
          }}
          aria-labelledby="dialog-title"
        >
          <div className="dialog-content">
            <div className="dialog-top">
              <span className="project-category">
                {selectedProject.category} / {selectedProject.number}
              </span>
              <button
                className="icon-button dialog-close"
                type="button"
                onClick={() => dialogRef.current.close()}
                aria-label="Close project"
              >
                <X size={21} />
              </button>
            </div>
            <div
              className={`dialog-artwork artwork-${selectedProject.artwork}`}
            >
              <ProjectArtwork
                type={selectedProject.artwork}
                image={selectedProject.image}
                alt={selectedProject.imageAlt || selectedProject.title}
              />
            </div>
            <h2 id="dialog-title">{selectedProject.title}</h2>
            <p className="dialog-description">{selectedProject.detail}</p>
            <h3>Technical scope</h3>
            <ul className="project-highlights">
              {selectedProject.highlights.map((highlight) => (
                <li key={highlight}>
                  <ChevronRight size={16} />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="tag-list dialog-tags">
              {selectedProject.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <a
              className="button button-primary"
              href={selectedProject.url}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> View source code <ArrowUpRight size={16} />
            </a>
            <p className="artwork-footnote">
              {!selectedProject.image && 'Conceptual illustration. '}Technical
              documentation is available in the repository.
            </p>
          </div>
        </dialog>
      )}
    </>
  )
}
export default App
