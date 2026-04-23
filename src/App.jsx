export default function App() {
  return (
    <>
      <header className="hero">
        <div className="overlay"></div>

        <nav className="navbar">
          <div className="brand">AR Homes</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Modern Construction • Trusted Quality</p>
          <h1>Future Homes Designed for Modern Living</h1>
          <p className="hero-text">
            AR Homes presents a stylish upcoming housing project in Gampola,
            built to give families comfort, value, and long-term confidence.
          </p>
          <div className="hero-buttons">
            <a className="btn primary" href="#project">View Project</a>
            <a className="btn secondary" href="#contact">Contact Us</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="container two-col">
            <div>
              <p className="section-tag">About AR Homes</p>
              <h2>Building homes with care, style, and trust</h2>
              <p>
                AR Homes is focused on delivering modern house designs with a
                clean finish, practical layouts, and quality construction.
                This website helps future buyers and investors see the project
                vision before construction is fully completed.
              </p>
            </div>

            <div className="card-grid">
              <div className="info-card">
                <h3>Modern Design</h3>
                <p>Beautiful exterior style with elegant finishing and open spaces.</p>
              </div>
              <div className="info-card">
                <h3>Trusted Builder</h3>
                <p>Reliable workmanship and careful attention to project quality.</p>
              </div>
              <div className="info-card">
                <h3>Future Value</h3>
                <p>Created to attract homeowners and investors with strong appeal.</p>
              </div>
              <div className="info-card">
                <h3>Prime Location</h3>
                <p>Planned for Gampola with a calm setting and attractive environment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light" id="project">
          <div className="container">
            <p className="section-tag">Upcoming Project</p>
            <h2>Project highlights</h2>

            <div className="features">
              <div className="feature-box">
                <span>01</span>
                <h3>Modern architecture</h3>
                <p>Bold roof lines, glass features, and a clean premium look.</p>
              </div>
              <div className="feature-box">
                <span>02</span>
                <h3>Comfortable living</h3>
                <p>Designed for family life with bright spaces and practical use.</p>
              </div>
              <div className="feature-box">
                <span>03</span>
                <h3>Buyer-ready presentation</h3>
                <p>Perfect for sharing with clients before the full build is complete.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-box">
            <div>
              <p className="section-tag">Contact</p>
              <h2>Let’s talk about your future home</h2>
              <p>
                Reach out to AR Homes to learn more about the project,
                availability, and early buyer opportunities.
              </p>
            </div>

            <div className="contact-card">
              <p><strong>Phone:</strong> 0777 310724</p>
              <p><strong>Email:</strong> arhomeslk@gmail.com</p>
              <p><strong>Location:</strong> Gampola</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
