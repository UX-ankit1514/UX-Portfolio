import { useState } from 'react';
import './App.css';
import { caseStudies, contactContent, type CaseStudy } from './portfolioContent';
import heroPhoto from './assets/ankit-portrait.jpg';
import blinkitCover from './assets/Blinkit.png';
import gharSeCover from './assets/Ghar se front.png';
import twtCover from './assets/The whole truth.png';

function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(caseStudies[0] ?? null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContactClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Reset animation if it's already running
    el.classList.remove('glow-animation');
    // Force a reflow to restart animation seamlessly
    void el.offsetWidth;
    el.classList.add('glow-animation');

    setTimeout(() => {
      el.classList.remove('glow-animation');
    }, 2000); // 1s spin * 2 iterations
  };

  return (
    <div className="page">
      <header className="page-header">
        <div className="page-header__brand">Ankit Anand</div>
        <nav className="page-header__nav">
          <button type="button" onClick={() => handleScrollTo('work')} className="link-button">
            Selected work
          </button>
          <button type="button" onClick={() => handleContactClick('hero-contact-cta')} className="link-button">
            Contact
          </button>
        </nav>
      </header>

      <main className="page-main">
        <section className="section section--hero" aria-labelledby="hero-heading">
          <div className="section-inner section-inner--hero">
            <div className="hero-photo-wrapper" aria-hidden="true">
              <div className="hero-photo-frame">
                <img src={heroPhoto} alt="Ankit Anand" className="hero-photo" loading="lazy" />
              </div>
            </div>

            <div className="hero-text-container">
              <p className="hero-greeting">Hey, I&apos;m Ankit 👋</p>

              <h1 id="hero-heading" className="hero-heading">
                <span className="hero-heading-primary">
                  UX designer turning confusing products
                </span>
                <span className="hero-heading-secondary">
                  into clear, intuitive experiences.
                </span>
              </h1>

              <p className="hero-text">
                I design for that moment when a user goes from &ldquo;Why is this so hard?&rdquo; to
                &ldquo;Oh, that makes sense.&rdquo;
              </p>

              <div className="hero-contact-block">
                <div className="hero-divider" />
                <div className="hero-contact-row">
                  <a href="mailto:ankitanand812@gmail.com" className="hero-contact-item">
                    <span className="hero-contact-label">Email</span>
                    <span className="hero-contact-value">ankitanand812@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="hero-actions">
                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => handleScrollTo('work')}
                >
                  <span>View My Case Studies</span>
                  <span className="button-arrow">↗</span>
                </button>
                <a id="hero-contact-cta" className="button button--ghost button--glow-wrap" href="mailto:ankitanand812@gmail.com">
                  <div className="button__inner">
                    <span>Let&apos;s Connect</span>
                    <span className="button-arrow">↗</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--featured">
          <div className="featured-inner">
            <h2 className="featured-heading">Featured Case Studies</h2>
            <p className="featured-subheading">
              End-to-end UX work focused on clarity, usability, and measurable impact
            </p>
          </div>
        </section>

        <section className="section section--work" id="work" aria-labelledby="work-heading">
          <div className="section-inner section-inner--work">

            <div className="case-study-list">
              {caseStudies.map((study) => (
                <article key={study.slug} className="case-card">
                  <button
                    type="button"
                    className="case-card__inner"
                    onClick={() => setActiveCaseStudy(study)}
                    aria-pressed={activeCaseStudy?.slug === study.slug}
                  >
                    <div className="case-card__image-wrapper">
                      <img
                        src={
                          study.slug === 'blinkit'
                            ? blinkitCover
                            : study.slug === 'ghar-se'
                              ? gharSeCover
                              : twtCover
                        }
                        alt={study.title}
                        className="case-card__image"
                        loading="lazy"
                      />
                    </div>
                    <div className="case-card__body">
                      <div className="case-card__meta">
                        <h3 className="case-card__title">{study.title}</h3>
                        {study.subtitle ? (
                          <p className="case-card__subtitle">{study.subtitle}</p>
                        ) : null}
                      </div>
                      <p className="case-card__summary">{study.summary}</p>
                      {study.externalCaseStudyUrl ? (
                        <a
                          href={study.externalCaseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="case-card__link"
                          onClick={(event) => event.stopPropagation()}
                        >
                          View project <span aria-hidden="true">↗</span>
                        </a>
                      ) : null}
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>

        </section>

        <section className="section" id="contact" aria-labelledby="contact-heading">
          <div className="section-inner section-inner--two-column">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-heading" className="section-heading">
                Let&apos;s work together
              </h2>
            </div>
            <div className="section-body">
              <p>
                {contactContent.emailLabel} —{' '}
                <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
              </p>
              <p>
                Whether it&apos;s refining an existing product, exploring a new idea, or building a
                thoughtful experience from the ground up, I&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-column footer-column--primary">
              <h2 className="footer-heading">
                Ready to transform your next product with intuitive design?
              </h2>
              <p className="footer-subtext">Currently available for new opportunities.</p>
              <a
                href="mailto:ankitanand812@gmail.com"
                id="footer-contact-cta"
                className="footer-cta"
              >
                <div className="footer-cta__inner">
                  <span>Let&apos;s talk</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </a>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Navigate</h3>
              <nav className="footer-links">
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => handleScrollTo('top')}
                >
                  Home
                </button>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => handleScrollTo('work')}
                >
                  Work
                </button>
                <button
                  type="button"
                  className="footer-link"
                  onClick={() => handleContactClick('footer-contact-cta')}
                >
                  Contact
                </button>
              </nav>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Elsewhere</h3>
              <div className="footer-links">
                <a
                  href="https://www.behance.net/ankitanand41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link--external"
                >
                  <span>Behance</span>
                  <span aria-hidden="true" className="footer-link-arrow">
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ankitanand-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-link--external"
                >
                  <span>Linkedin</span>
                  <span aria-hidden="true" className="footer-link-arrow">
                    ↗
                  </span>
                </a>
                <a
                  href="mailto:ankitanand812@gmail.com"
                  className="footer-link footer-link--external"
                >
                  <span>Email</span>
                  <span aria-hidden="true" className="footer-link-arrow">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2026 Ankit Anand. Designed and crafted with intention &amp; love ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
