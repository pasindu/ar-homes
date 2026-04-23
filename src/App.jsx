import React, { useMemo, useState } from 'react'
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  BedDouble,
  Bath,
  Car,
  Ruler,
  Home,
  Hammer,
  ShieldCheck,
  Trees,
  TrendingUp,
  CheckCircle2,
  Star,
  ChevronDown,
  Building2,
} from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#project' },
  { label: 'Designs', href: '#designs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const timeline = [
  { title: 'Land Secured', desc: 'Development land secured and project planning underway.' },
  { title: 'Design Phase', desc: 'Modern home concepts and layouts being refined for buyers.' },
  { title: 'Approval Stage', desc: 'Planning and approvals progressing toward launch.' },
  { title: 'Construction Start', desc: 'Construction scheduled to begin after final approvals.' },
  { title: 'Completion', desc: 'Quality modern homes delivered for families and investors.' },
]

const houseDesigns = [
  {
    name: 'Model A – Harmony',
    beds: 3,
    baths: 2,
    garage: 1,
    area: '1,450 sq.ft',
    desc: 'A stylish and efficient home with open-plan living, natural light, and modern family comfort.',
  },
  {
    name: 'Model B – Serenity',
    beds: 4,
    baths: 3,
    garage: 2,
    area: '1,850 sq.ft',
    desc: 'A spacious family design with flexible living areas and private retreats for everyday life.',
  },
  {
    name: 'Model C – Prestige',
    beds: 5,
    baths: 4,
    garage: 2,
    area: '2,400 sq.ft',
    desc: 'Premium living with generous space, modern finishes, and strong visual appeal.',
  },
]

const benefits = [
  { icon: Home, title: 'Modern Design', desc: 'Contemporary architecture with practical layouts and strong curb appeal.' },
  { icon: Hammer, title: 'Quality Construction', desc: 'Built with care, workmanship, and a focus on long-term value.' },
  { icon: Trees, title: 'Family Lifestyle', desc: 'Comfortable living in a welcoming development for modern families.' },
  { icon: TrendingUp, title: 'Investment Opportunity', desc: 'An early chance to secure a future-focused new-build opportunity.' },
  { icon: ShieldCheck, title: 'Trusted Builder', desc: 'A family-owned business built on honesty, trust, and reliable service.' },
  { icon: CheckCircle2, title: 'Early Buyer Advantage', desc: 'Register early to receive updates and priority access before launch.' },
]

const faqs = [
  {
    q: 'When will the project launch?',
    a: 'The project is currently in the planning stage. Register your interest to receive launch updates and early project information.',
  },
  {
    q: 'Can I enquire before construction starts?',
    a: 'Yes. This website is designed to help buyers and investors understand the project and enquire early.',
  },
  {
    q: 'Are these floor plans final?',
    a: 'The current designs are presented as sample concepts and may be refined during the final planning and approval stages.',
  },
  {
    q: 'Who is this project suitable for?',
    a: 'The project is suitable for families, owner-occupiers, early buyers, and investors looking for quality modern homes.',
  },
]

function SectionHeader({ eyebrow, title, description, light }) {
  return (
    <div className="section-header">
      <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</p>
      <h2 className={light ? 'light-text' : ''}>{title}</h2>
      <p className={`section-description ${light ? 'section-description-light' : ''}`}>{description}</p>
    </div>
  )
}

function HouseRender({ label, tall = false }) {
  return (
    <div className={`render-card ${tall ? 'render-tall' : ''}`}>
      <div className="render-sky" />
      <div className="render-ground" />
      <div className="render-house render-house-a" />
      <div className="render-house render-house-b" />
      <div className="render-house render-house-c" />
      <div className="render-overlay">
        <strong>{label}</strong>
        <span>Premium concept render placeholder</span>
      </div>
    </div>
  )
}

function GalleryTile({ title }) {
  return (
    <div className="gallery-tile">
      <div className="gallery-gradient" />
      <div className="gallery-label">{title}</div>
    </div>
  )
}

function FAQItem({ item, open, onClick }) {
  return (
    <button type="button" className="faq-item" onClick={onClick}>
      <div className="faq-top">
        <span>{item.q}</span>
        <ChevronDown className={open ? 'faq-icon open' : 'faq-icon'} size={18} />
      </div>
      {open ? <p>{item.a}</p> : null}
    </button>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div>
      <header className="site-header">
        <div className="container nav-row">
          <a href="#home" className="brand">
            <img src="/logo.jpg" alt="AR Homes logo" className="brand-logo" />
            <div>
              <div className="brand-name">AR Homes</div>
              <div className="brand-tag">Future Homes, Built With Trust</div>
            </div>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-actions">
            <a href="tel:+94777310724" className="btn btn-primary small-btn">
              <Phone size={16} />
              0777 310 724
            </a>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="mobile-nav">
            <div className="container mobile-nav-inner">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#register" className="btn btn-primary mobile-register" onClick={() => setMobileOpen(false)}>
                Register Interest
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="pill">AR Homes New Project Coming Soon</div>
              <h1>Future Homes, Built With Trust</h1>
              <p>
                AR Homes proudly presents an upcoming housing project in Gampola, Sri Lanka, created to help buyers and investors
                preview the vision before construction is complete.
              </p>
              <p className="hero-subtext">
                Explore the project concept, house designs, timeline, and early opportunities to register interest before launch.
              </p>
              <div className="hero-actions">
                <a href="#project" className="btn btn-primary">View Project</a>
                <a href="#register" className="btn btn-outline">Register Interest</a>
                <a href="#contact" className="btn btn-dark">Contact Us</a>
              </div>
              <div className="stats-grid">
                <div className="stat-card"><strong>12</strong><span>Planned Lots</span></div>
                <div className="stat-card"><strong>3+</strong><span>Home Designs</span></div>
                <div className="stat-card"><strong>Family</strong><span>Owned Builder</span></div>
                <div className="stat-card"><strong>Now</strong><span>Registering Interest</span></div>
              </div>
            </div>
            <div>
              <HouseRender label="Contemporary streetscape and hero home render" tall />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-column about-grid">
            <div>
              <SectionHeader
                eyebrow="About the Builder"
                title="Built on trust, workmanship, and family values"
                description="AR Homes is led by Jayasekara Amarakoon and focused on delivering modern, comfortable homes with care, honesty, and quality construction."
              />
              <div className="about-copy">
                <p>
                  As a family-owned building business, AR Homes is committed to creating homes that feel welcoming, practical, and built for real life.
                </p>
                <p>
                  Every part of the development is designed to reflect modern living, from attractive facades to buyer-friendly layouts and comfortable spaces.
                </p>
                <p>
                  The goal is simple: build trust early, communicate clearly, and help future buyers feel confident about the finished result.
                </p>
              </div>
            </div>
            <div className="feature-grid">
              {[
                'Personal service and clear communication',
                'Modern home building approach',
                'Strong focus on workmanship and detail',
                'Homes designed for comfort and lifestyle',
              ].map((item) => (
                <div className="feature-card" key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="section section-soft">
          <div className="container">
            <SectionHeader
              eyebrow="The New Project"
              title="A new AR Homes development designed for future living"
              description="This upcoming project transforms ready land into a modern housing community for families, owner-occupiers, and investors in Gampola."
            />

            <div className="project-grid">
              <div className="project-card large-card">
                <div className="badge-row">
                  <span className="badge badge-blue">Status: Planning Stage</span>
                  <span className="badge badge-outline">Location: Gampola, Sri Lanka</span>
                </div>
                <h3>Project Vision</h3>
                <p>
                  AR Homes Gampola is a prototype project concept showcasing a boutique housing development with approximately 12 quality homes.
                  The purpose is to give buyers and investors an early view of the vision before construction is completed.
                </p>
                <div className="metric-grid">
                  <div className="metric-box"><strong>12</strong><span>Planned homes / lots</span></div>
                  <div className="metric-box"><strong>3</strong><span>Sample house designs</span></div>
                  <div className="metric-box"><strong>2026</strong><span>Indicative timeline</span></div>
                </div>
              </div>

              <div className="project-card dark-card">
                <p className="mini-label">Why this matters</p>
                <h3>Present the future before it is built</h3>
                <p>
                  This website helps buyers imagine the end result, understand the builder’s direction, and express interest early.
                </p>
                <a href="#register" className="btn btn-light full-width">Enquire About This Project</a>
              </div>
            </div>

            <div className="timeline-grid">
              {timeline.map((step, index) => (
                <div className="timeline-card" key={step.title}>
                  <div className="timeline-number">{index + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="designs" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="House Designs / Floor Plans"
              title="Explore sample home concepts"
              description="Preview a selection of modern house designs prepared as part of the AR Homes project concept."
            />
            <div className="design-grid">
              {houseDesigns.map((house) => (
                <div className="design-card" key={house.name}>
                  <HouseRender label={`${house.name} facade concept`} />
                  <div className="design-body">
                    <h3>{house.name}</h3>
                    <div className="spec-grid">
                      <span><BedDouble size={16} /> {house.beds} Beds</span>
                      <span><Bath size={16} /> {house.baths} Baths</span>
                      <span><Car size={16} /> {house.garage} Garage</span>
                      <span><Ruler size={16} /> {house.area}</span>
                    </div>
                    <p>{house.desc}</p>
                    <div className="button-row">
                      <button className="btn btn-primary">Download Floor Plan</button>
                      <button className="btn btn-outline">Enquire Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section section-soft">
          <div className="container">
            <SectionHeader
              eyebrow="Gallery / Visual Preview"
              title="See the project vision come to life"
              description="A visual preview area for future 3D renders, facade concepts, interiors, and streetscape imagery."
            />
            <div className="gallery-grid">
              {[
                'Streetscape preview',
                'Modern facade concept',
                'Kitchen and living render',
                'Master bedroom interior',
                'Outdoor entertaining concept',
                'Project overview render',
              ].map((title) => (
                <GalleryTile key={title} title={title} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Why Buy in This Project"
              title="A compelling opportunity for buyers and investors"
              description="This project combines modern design, quality construction, lifestyle appeal, and the advantage of getting in early."
            />
            <div className="benefit-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div className="benefit-card" key={benefit.title}>
                    <div className="benefit-icon"><Icon size={24} /></div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <SectionHeader
              eyebrow="Testimonials"
              title="A presentation built to inspire confidence"
              description="Professional placeholder testimonials for buyer and investor presentations."
              light
            />
            <div className="testimonial-grid">
              {[
                'The presentation gave us confidence in the builder’s vision. The homes look modern, practical, and very well planned.',
                'A professional concept with strong buyer appeal. It is easy to see the long-term value in the development.',
                'We liked the clear floor plans, quality feel, and the trust that comes from a family-owned building business.',
              ].map((text, index) => (
                <div className="testimonial-card" key={text}>
                  <div className="star-row">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{text}”</p>
                  <strong>{index === 0 ? 'Future Buyer Placeholder' : index === 1 ? 'Investor Placeholder' : 'Family Client Placeholder'}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="register" className="section">
          <div className="container register-grid">
            <div className="register-info">
              <p className="mini-label light-blue">Register Interest</p>
              <h2>Register your interest before launch</h2>
              <p>
                Submit your details to receive project updates, floor plan information, and early access opportunities as the development moves forward.
              </p>
              <ul>
                <li><CheckCircle2 size={18} /> Early buyer updates</li>
                <li><CheckCircle2 size={18} /> Project release notifications</li>
                <li><CheckCircle2 size={18} /> Priority enquiry access</li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Preferred House Type" />
                <textarea placeholder="Message" rows="5" />
              </div>
              <button className="btn btn-primary full-width" type="submit">Register Your Interest Before Launch</button>
            </form>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="container faq-container">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions from future buyers"
              description="A simple FAQ section to help explain the project clearly and build confidence during the early interest stage."
            />
            <div className="faq-list">
              {faqs.map((item, index) => (
                <FAQItem key={item.q} item={item} open={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="contact-card">
              <p className="eyebrow">Contact</p>
              <h2>Talk to the builder</h2>
              <div className="contact-list">
                <div><Building2 size={18} /> <span><strong>Owner:</strong> Jayasekara Amarakoon</span></div>
                <div><Phone size={18} /> <span>+94 77 731 0724</span></div>
                <div><Mail size={18} /> <span>arhomeslk@gmail.com</span></div>
                <div><MapPin size={18} /> <span>22 Sandasiriwatta, Gampola, Sri Lanka, 20500</span></div>
              </div>
              <div className="office-box">
                <strong>Office hours</strong>
                <p>Monday – Saturday: 9:00 AM – 5:00 PM</p>
                <p>Appointments available by enquiry</p>
              </div>
            </div>

            <div className="contact-side">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-grid small-gap">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="How can we help you?" rows="5" />
                </div>
                <button className="btn btn-primary" type="submit">Send Enquiry</button>
              </form>

              <div className="map-card">
                <div className="map-placeholder">
                  <MapPin size={36} />
                  <h3>Map Placeholder</h3>
                  <p>Project site and office location can be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.jpg" alt="AR Homes logo" className="footer-logo" />
            <p>
              AR Homes is a trusted building firm in Sri Lanka, committed to delivering quality homes with honesty, transparency, and care.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>{item.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4>Contact Info</h4>
            <div className="footer-links">
              <a href="tel:+94777310724">+94 77 731 0724</a>
              <a href="mailto:arhomeslk@gmail.com">arhomeslk@gmail.com</a>
              <span>22 Sandasiriwatta, Gampola, Sri Lanka, 20500</span>
              <a href="https://www.facebook.com/share/18T11q1k4Y/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook Page: AR Homes</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-row">
            <span>© {year} AR Homes. All rights reserved.</span>
            <span>Prototype website for pre-launch marketing and buyer presentations.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
