import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = {
  Backend: [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST",
    "gRPC",
    "Apache Camel"
  ],
  Cloud: [
    "AWS",
    "GCP",
    "Terraform"
  ],
  Data: [
    "PostgreSQL",
    "MySQL",
    "Firestore",
    "DynamoDB"
  ],
  Quality: [
    "JUnit",
    "Cucumber",
    "TDD / BDD",
    "SonarLint",
    "CI/CD"
  ],
  AI: [
    "Gemini",
    "LLM Integration",
    "AI Agents",
    "Tool Calling",
    "Prompt Engineering"
  ]
};

function App() {
  return (
    <div className="site">

      {/* Local styles for this page */}
      <style>{`
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .project-tags span {
          display: inline-block;
          padding: 7px 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          font-size: 0.78rem;
          line-height: 1.2;
          white-space: nowrap;
        }

        .project-note {
          margin-top: 42px;
          padding-top: 30px;
          padding-bottom: 24px;
        }

        .project-note strong {
          display: block;
          margin-bottom: 18px;
        }

        .project-note p {
          margin: 0;
          line-height: 1.7;
        }

        .section {
          padding-top: 55px;
          padding-bottom: 55px;
        }

        .project-card {
          margin-bottom: 40px;
        }

        .project-content {
          margin-top: 30px;
        }

        .section > h2 {
          margin-bottom: 35px;
        }

        @media (max-width: 768px) {
          .section {
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .project-tags {
            gap: 8px;
          }

          .project-tags span {
            font-size: 0.74rem;
            padding: 6px 10px;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="nav">
        <a className="brand" href="#top">
          JK<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">AI Journey</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">

        {/* Hero */}
        <section className="hero">
          <div className="hero-copy">

            <p className="eyebrow">
              JAVA BACKEND ENGINEER · GERMANY
            </p>

            <h1>
              Building reliable systems.
              <br />
              <em>Exploring intelligent ones.</em>
            </h1>

            <p className="hero-text">
              I'm Jyothi, a Java Backend Engineer with 9 years of experience
              building enterprise systems across automotive, airline and
              insurance domains. Recently, I've been applying that engineering
              mindset to Generative AI and LLM-powered applications.
            </p>

            <div className="actions">
              <a className="button primary" href="#projects">
                Explore my work
              </a>

              <a className="button secondary" href="#contact">
                Let's connect
              </a>
            </div>

          </div>

          <div className="hero-card">

            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`I am a

Java Backend Engineer

I focus on

Java & Spring Boot
Distributed Systems
Cloud Native
Generative AI

I am currently building

AI-powered applications
with real backend logic`}</pre>

          </div>
        </section>

        {/* Stats */}
        <section className="stats">

          <div>
            <strong>9+</strong>
            <span>Years engineering</span>
          </div>

          <div>
            <strong>5</strong>
            <span>Engineers led</span>
          </div>

          <div>
            <strong>3</strong>
            <span>Core domains</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>Current focus</span>
          </div>

        </section>

        {/* About */}
        <section id="about" className="section split">

          <div>
            <p className="eyebrow">
              01 · ABOUT
            </p>

            <h2>
              Backend engineering first.
              <br />
              AI as the next layer.
            </h2>
          </div>

          <div className="prose">

            <p>
              My foundation is backend engineering: designing services, APIs
              and integrations that need to be dependable in production.
              I've worked with Java, Spring Boot, microservices, cloud
              infrastructure, databases, messaging and distributed systems.
            </p>

            <p>
              I'm now extending that foundation into Generative AI. Instead of
              treating an LLM as a standalone feature, I’m interested in how it
              fits into real applications: tool calling, structured outputs,
              deterministic business logic, evaluation, error handling,
              observability and cost-aware architecture.
            </p>

          </div>

        </section>

        {/* Projects */}
        <section id="projects" className="section">

          <p className="eyebrow">
            02 · SELECTED PROJECTS
          </p>

          <h2>
            Systems I've built.
            <br />
            And what I'm exploring next.
          </h2>

          <div className="projects-list">

            {/* EV Charging */}
            <article className="project-card real-project">

              <div className="project-heading">

                <div>
                  <span className="tag">
                    JAVA · SPRING BOOT · MICROSERVICES · CLOUD
                  </span>

                  <h2>
                    Electric Vehicle Charging Platform
                  </h2>
                </div>

                <span className="project-number">
                  01
                </span>

              </div>

              <p className="project-lead">
                Backend services for an electric vehicle charging platform,
                focused on charging sessions, pricing and real-time charging
                information. I developed and maintained APIs that calculate
                the cost of charging sessions and expose live pricing
                information to consumers of the platform.
              </p>

              <div className="project-content">

                <div>

                  <h3>
                    What I worked on
                  </h3>

                  <ul>

                    <li>
                      Designed and developed REST APIs for charging session
                      management and pricing.
                    </li>

                    <li>
                      Implemented business logic to calculate charging costs
                      based on session information and pricing rules.
                    </li>

                    <li>
                      Exposed live pricing information so users can understand
                      the current cost of charging.
                    </li>

                    <li>
                      Worked with microservices and backend integrations
                      supporting the charging ecosystem.
                    </li>

                    <li>
                      Investigated production issues, analyzed failures and
                      delivered fixes and improvements.
                    </li>

                  </ul>

                </div>

                <div>

                  <h3>
                    Engineering focus
                  </h3>

                  <div className="project-tags">
                    <span>REST APIs</span>
                    <span>Spring Boot</span>
                    <span>Microservices</span>
                    <span>Pricing Logic</span>
                    <span>Production Support</span>
                    <span>Testing</span>
                    <span>Monitoring</span>
                  </div>

                </div>

              </div>

            </article>

            {/* Airline Booking */}
            <article className="project-card real-project">

              <div className="project-heading">

                <div>

                  <span className="tag">
                    JAVA · SPRING · MICROSERVICES · AIRLINE
                  </span>

                  <h2>
                    Airline Booking Platform
                  </h2>

                </div>

                <span className="project-number">
                  02
                </span>

              </div>

              <p className="project-lead">
                An airline booking platform enabling customers to complete the
                end-to-end flight booking journey. The platform integrates
                with multiple Low-Cost Carrier (LCC) airlines and coordinates
                several backend services to provide a unified booking
                experience.
              </p>

              <div className="booking-flow">

                <div className="flow-node">
                  Search
                </div>

                <div className="flow-arrow">
                  →
                </div>

                <div className="flow-node">
                  Availability
                </div>

                <div className="flow-arrow">
                  →
                </div>

                <div className="flow-node">
                  Fare
                </div>

                <div className="flow-arrow">
                  →
                </div>

                <div className="flow-node">
                  Passenger
                </div>

                <div className="flow-arrow">
                  →
                </div>

                <div className="flow-node">
                  Seat & Ancillary Allocation
                </div>

                <div className="flow-arrow">
                  →
                </div>

                <div className="flow-node highlight">
                  Booking
                </div>

              </div>

              <div className="project-content">

                <div>

                  <h3>
                    What I worked on
                  </h3>

                  <ul>

                    <li>
                      Developed backend services supporting the end-to-end
                      flight booking lifecycle.
                    </li>

                    <li>
                      Integrated with multiple LCC airline systems through
                      different APIs and integration mechanisms.
                    </li>

                    <li>
                      Worked on flight search, availability, pricing and
                      booking workflows.
                    </li>

                    <li>
                      Built and maintained integrations while normalizing
                      different airline-specific responses into common
                      backend models.
                    </li>

                    <li>
                      Focused on reliability and failure handling across
                      distributed airline integrations.
                    </li>

                  </ul>

                </div>

                <div>

                  <h3>
                    Engineering focus
                  </h3>

                  <div className="project-tags">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Microservices</span>
                    <span>REST</span>
                    <span>Apache Camel</span>
                    <span>API Integration</span>
                    <span>Distributed Systems</span>
                  </div>

                </div>

              </div>

            </article>

            {/* GenAI POC */}
            <article className="project-card ai-project">

              <div className="project-heading">

                <div>

                  <span className="tag">
                    GENAI LEARNING · SPRING BOOT · REACT · GEMINI
                  </span>

                  <h2>
                    AI-Powered Flight Rebooking Assistant
                  </h2>

                </div>

                <span className="project-number">
                  03
                </span>

              </div>

              <p className="project-lead">
                A proof of concept I built as part of my Generative AI
                learning journey. The project explores how an LLM can work
                together with deterministic backend services to help
                passengers find alternative travel options after a flight
                disruption.
              </p>

              <div className="architecture">

                <div className="node">
                  React UI
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="node">
                  Spring Boot
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="node">
                  AI Agent
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="node highlight">
                  Tool Calling
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="node">
                  Travel Services
                </div>

              </div>

              <div className="project-content">

                <div>

                  <h3>
                    What I explored
                  </h3>

                  <ul>

                    <li>
                      Integrated Gemini with a Spring Boot backend.
                    </li>

                    <li>
                      Built an AI agent capable of deciding when to invoke a
                      <code> searchFlights </code>
                      backend tool.
                    </li>

                    <li>
                      Passed structured search criteria from the LLM to Java
                      business logic.
                    </li>

                    <li>
                      Searched multiple flight and train providers in parallel
                      using CompletableFuture.
                    </li>

                    <li>
                      Used deterministic backend logic to rank recommendations
                      rather than allowing the LLM to make business decisions.
                    </li>

                    <li>
                      Added a second AI interaction to explain the
                      recommendation in a human-friendly way.
                    </li>

                  </ul>

                </div>

                <div>

                  <h3>
                    GenAI concepts
                  </h3>

                  <div className="project-tags">

                    <span>Gemini</span>
                    <span>LLM Integration</span>
                    <span>AI Agents</span>
                    <span>Tool Calling</span>
                    <span>Prompt Engineering</span>
                    <span>Structured Output</span>
                    <span>LLM + Backend</span>

                  </div>

                </div>

              </div>

              <div className="project-note">

                <strong>
                  Why I built it
                </strong>

                <p>
                  I wanted to go beyond simply calling an LLM API and
                  understand how Generative AI can be integrated into a real
                  backend architecture — where the AI handles intent and
                  interaction, while the application remains responsible for
                  business rules, data and execution.
                </p>

              </div>

            </article>

          </div>

        </section>

        {/* Skills */}
        <section id="skills" className="section">

          <p className="eyebrow">
            03 · TOOLKIT
          </p>

          <h2>
            Things I build with.
          </h2>

          <div className="skills-grid">

            {Object.entries(skills).map(([group, items]) => (

              <div
                className="skill-group"
                key={group}
              >

                <h3>
                  {group}
                </h3>

                <div className="chips">

                  {items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* AI Journey */}
        <section id="journey" className="section journey">

          <div>

            <p className="eyebrow">
              04 · AI JOURNEY
            </p>

            <h2>
              From backend logic
              <br />
              to AI-powered systems.
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">

              <span>
                01
              </span>

              <div>

                <h3>
                  LLM integration
                </h3>

                <p>
                  Connecting applications to models such as Gemini and
                  designing structured request/response flows.
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <span>
                02
              </span>

              <div>

                <h3>
                  Tool calling
                </h3>

                <p>
                  Letting the model decide when a real backend capability
                  should be invoked, while Java remains responsible for
                  execution.
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <span>
                03
              </span>

              <div>

                <h3>
                  Engineering for production
                </h3>

                <p>
                  Exploring evaluation, monitoring, security, fallbacks,
                  caching and cost controls around AI features.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Engineering */}
        <section className="section experience">

          <p className="eyebrow">
            05 · ENGINEERING
          </p>

          <h2>
            What I bring beyond code.
          </h2>

          <div className="experience-grid">

            <article>

              <span>
                01
              </span>

              <h3>
                Ownership
              </h3>

              <p>
                From architecture and implementation through production
                support and continuous improvement.
              </p>

            </article>

            <article>

              <span>
                02
              </span>

              <h3>
                Leadership
              </h3>

              <p>
                Led a backend team of 5, supporting technical decisions,
                mentoring and delivery.
              </p>

            </article>

            <article>

              <span>
                03
              </span>

              <h3>
                Reliability
              </h3>

              <p>
                Strong focus on testing, failure handling, observability,
                idempotency and resilient distributed systems.
              </p>

            </article>

          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="contact">

          <p className="eyebrow">
            06 · CONTACT
          </p>

          <h2>
            Let's build something
            <br />
            <em>meaningful.</em>
          </h2>

          <p>
            Open to conversations about backend engineering,
            AI-powered applications and interesting technical challenges.
          </p>

          <div className="actions">

            <a
              className="button primary"
              href="mailto:jyo2k14@gmail.com"
            >
              Email me
            </a>

            <a
              className="button secondary"
              href="https://www.linkedin.com/in/jyothikrishna-satheesan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="button secondary"
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>

        <span>
          © {new Date().getFullYear()} Jyothi Krishna
        </span>

        <span>
          Java · Spring Boot · AI
        </span>

      </footer>

    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);