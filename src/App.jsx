import { useEffect, useState } from 'react';
import { certInNote, credentials, duplicates, experience, placements, projects } from './data.js';

const navigation = [
  ['CVE', '#cve'],
  ['DUPLICATES', '#duplicates'],
  ['WORK', '#work'],
  ['PROOF', '#proof'],
  ['CONTACT', '#contact'],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow-mark">{diagonal ? '↗' : '→'}</span>;
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-block" />{children}</p>;
}

function SectionTitle({ index, overline, children, aside, inverse = false }) {
  return (
    <div className={`section-intro ${inverse ? 'section-intro-inverse' : ''}`} data-reveal>
      <div>
        <Eyebrow light={inverse}>{index} / {overline}</Eyebrow>
        <h2>{children}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header flex items-center">
        <a href="#top" className="wordmark inline-flex items-center" aria-label="G3NTL3M3N, back to top">
          <span className="wordmark-symbol">G<span>3</span></span>
          <span>G3NTL3M3N<span className="blink-cursor">_</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-contact" href="mailto:kumarep349@gmail.com">OPEN CHANNEL <Arrow diagonal /></a>
        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </header>
      <nav id="mobile-navigation" className={`mobile-navigation ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" hidden={!open}>
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Arrow diagonal /></a>)}
      </nav>
    </>
  );
}

function SignalArtwork() {
  return (
    <div className="signal-art" role="img" aria-label="Portrait of Praveen S with glitch-art overlays">
      <div className="signal-art-grid" />
      <div className="signal-art-stripes" />
      <img className="signal-portrait signal-portrait-main" src={`${import.meta.env.BASE_URL}praveen-glitch-portrait.png`} alt="" fetchPriority="high" />
      <img className="signal-portrait signal-portrait-cyan" src={`${import.meta.env.BASE_URL}praveen-glitch-portrait.png`} alt="" aria-hidden="true" />
      <img className="signal-portrait signal-portrait-red" src={`${import.meta.env.BASE_URL}praveen-glitch-portrait.png`} alt="" aria-hidden="true" />
      <div className="signal-portrait-shade" />
      <div className="signal-art-noise" />
      <div className="signal-scan-beam" />
      <div className="signal-breaks"><span /><span /><span /><span /><span /></div>
      <div className="signal-feed">LIVE // FEED_01 <span>●</span></div>
      <div className="art-sticker sticker-one"><span>G3//</span><strong>OBSERVE<br />REPEAT<br />VERIFY</strong></div>
      <div className="art-sticker sticker-two">THE SURFACE<br />IS NEVER FLAT</div>
      <div className="art-coordinates">13.0827° N / 80.2707° E<br />CHENNAI, INDIA</div>
      <div className="art-target">+ TARGET ACQUIRED<br />+ ASSUMPTION FAILED<br />+ EVIDENCE SAVED<span className="blink-cursor">_</span></div>
      <div className="art-index">[ FIG. 001 / PRAVEEN S ]</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy flex flex-col">
        <div className="hero-topline"><span className="status-light" /> AVAILABLE FOR SECURITY RESEARCH / CHENNAI, IN</div>
        <p className="hero-id"><strong>PRAVEEN S</strong><span>SECURITY RESEARCHER / G3NTL3M3N + DARKANGLE999</span></p>
        <h1 id="hero-title"><span className="hero-glitch-line" data-text="I LOOK FOR">I LOOK FOR</span><span className="hero-title-stroke hero-glitch-line" data-text="THE SEAM.">THE SEAM<span className="hero-period">.</span></span></h1>
        <p className="hero-description">I’m a Chennai-based security researcher and computer science graduate. I investigate web, cloud, and infrastructure systems, then turn what I find into clear evidence.</p>
        <div className="hero-now">
          <span className="hero-now-label"><span className="status-light" /> NOW BUILDING</span>
          <p><strong>CNAPP at G3 Cyberspace</strong><span>My GRC RAG agent evolved into an agentless AWS posture and compliance project.</span></p>
        </div>
        <div className="hero-actions flex flex-wrap items-center">
          <a className="button-primary" href="#duplicates">EXPLORE THE REPORTS <Arrow diagonal /></a>
          <a className="button-plain" href="#work">SEE CURRENT WORK <Arrow /></a>
        </div>
        <div className="hero-foot"><span>SCROLL TO INSPECT</span><span>↓</span><span>00 / 06</span></div>
      </div>
      <SignalArtwork />
    </section>
  );
}

function SignalTicker() {
  return (
    <div className="signal-ticker" aria-hidden="true">
      <div className="signal-ticker-track">TRUST BOUNDARIES <b>✳</b> ATTACK SURFACE <b>✳</b> EVIDENCE FIRST <b>✳</b> TRUST BOUNDARIES <b>✳</b> ATTACK SURFACE <b>✳</b> EVIDENCE FIRST <b>✳</b>&nbsp;</div>
    </div>
  );
}

function CveFeature() {
  return (
    <section id="cve" className="cve-section" aria-labelledby="cve-title">
      <div className="cve-rail"><span>[ VERIFIED CREDIT ]</span><span>01 / 06</span></div>
      <div className="cve-content grid">
        <div className="cve-main" data-reveal>
          <Eyebrow>PUBLIC VULNERABILITY RECORD / CERT-IN</Eyebrow>
          <h2 id="cve-title"><span className="cve-prefix">CVE-2026-</span><span className="cve-code">41038<span className="asterisk" aria-hidden="true">✳</span></span></h2>
          <p>Co-discovered weak password policy vulnerability in Quantum Networks QN-I-470. Credited alongside research team in CERT-In vulnerability note CIVN-2026-0200.</p>
          <a href={certInNote} target="_blank" rel="noopener noreferrer" className="text-action">READ OFFICIAL VULNERABILITY NOTE <Arrow diagonal /></a>
        </div>
        <div className="cve-side" data-reveal>
          <div className="cve-stamp"><span>PUBLIC<br />RECORD</span><strong>38</strong></div>
          <dl>
            <div><dt>CLASS</dt><dd>WEAK PASSWORD POLICY</dd></div>
            <div><dt>DEVICE</dt><dd>QN-I-470 ROUTER</dd></div>
            <div><dt>ISSUED</dt><dd>21 APR 2026</dd></div>
            <div><dt>SEVERITY</dt><dd>HIGH / CERT-IN</dd></div>
          </dl>
          <div className="cve-side-foot">RESEARCH CREDIT / PRAVEEN S + TEAM</div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section section-shell" aria-labelledby="about-title">
      <div className="about-label"><Eyebrow>WHO IS BEHIND THE HANDLE</Eyebrow><div className="about-cross">✳</div></div>
      <div className="about-copy" data-reveal>
        <h2 id="about-title">I BREAK DOWN<br /><em>ASSUMPTIONS.</em></h2>
        <p>Computer science graduate from St Joseph's College of Engineering. Current work: building an agentless AWS posture product and translating technical findings into compliance and risk views. Research spans application security, cloud, and consensus systems.</p>
        <div className="about-metrics">
          <div><strong>01</strong><span>PUBLIC CVE CREDIT</span></div>
          <div><strong>07</strong><span>DUPLICATE REPORTS</span></div>
          <div><strong>04</strong><span>SECURITY ROLES</span></div>
        </div>
      </div>
    </section>
  );
}

function DuplicateArchive() {
  const [filter, setFilter] = useState('ALL');
  const [expanded, setExpanded] = useState(null);
  const visible = duplicates.filter((item) => filter === 'ALL' || item.family === filter);
  return (
    <section id="duplicates" className="duplicate-section" aria-labelledby="duplicate-title">
      <div className="section-shell">
        <SectionTitle index="02" overline="REPORT ARCHIVE" inverse aside="Seven reports. Seven duplicate outcomes. Each entry keeps the question, technical signal, and investigation visible.">
          THE DUPLICATE<br /><span className="outline-word">FILES.</span>
        </SectionTitle>
        <div className="archive-controls flex justify-between">
          <div className="archive-count">DISPLAYING <strong>{String(visible.length).padStart(2, '0')}</strong> / 07 FILES</div>
          <div className="filter-set flex flex-wrap" role="group" aria-label="Filter reports">
            {['ALL', 'WEB', 'AI SDK', 'ARC'].map((value) => <button type="button" key={value} className={filter === value ? 'is-active' : ''} aria-pressed={filter === value} onClick={() => { setFilter(value); setExpanded(null); }}>{value}</button>)}
          </div>
        </div>
        <div className="report-list" key={filter}>
          {visible.map((report) => {
            const isExpanded = expanded === report.id;
            return (
              <article className={`report-row ${isExpanded ? 'is-expanded' : ''}`} key={report.id}>
                <button type="button" className="report-trigger" aria-expanded={isExpanded} aria-controls={`report-detail-${report.id}`} onClick={() => setExpanded(isExpanded ? null : report.id)}>
                  <span className="report-id">/{report.id}</span>
                  <span className="report-title-block"><span className="report-target">{report.target}</span><strong>{report.title}</strong></span>
                  <span className="report-family">{report.family}</span>
                  <span className="report-status">DUPLICATE</span>
                  <span className="report-plus" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                </button>
                <div id={`report-detail-${report.id}`} className="report-detail" hidden={!isExpanded}>
                  <p className="report-signal">“{report.signal}”</p>
                  <p>{report.detail}</p>
                  <span>FILED / {report.date}</span>
                </div>
              </article>
            );
          })}
        </div>
        <p className="archive-caption">STATUS LABELS FROM RESEARCHER. SUMMARIES OMIT PRIVATE REPORT MATERIAL.</p>
        <figure className="archive-intermission">
          <img src={`${import.meta.env.BASE_URL}duplicate-intermission.png`} alt="Animated fight-scene meme captioned ‘Nanomachine's son.’" loading="lazy" />
          <figcaption>
            <span className="archive-intermission-label">INTERMISSION / AFTER FILE 07</span>
            <strong>PLOT ARMOR,<br /><em>SON.</em></strong>
            <p>Every report had a plot twist. The twist was “already reported.”</p>
            <span className="archive-intermission-foot">DUPLICATE ≠ WASTED RESEARCH</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work-section section-shell" aria-labelledby="work-title">
      <SectionTitle index="03" overline="FIELD WORK" aside="From pentesting to cloud posture. Concrete work, changing vantage points.">
        WHERE I PUT<br /><span className="accent-text">IT TO WORK.</span>
      </SectionTitle>
      <div className="experience-list">
        {experience.map((job, index) => <article className="experience-row" data-reveal key={job.company}>
          <span className="experience-index">0{index + 1}</span>
          <div className="experience-place"><span>{job.period}</span><h3>{job.company}</h3><p>{job.role}</p></div>
          <p className="experience-description">{job.description}</p>
          <span className="experience-focus">{job.focus}</span>
        </article>)}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section section-shell" aria-labelledby="projects-title">
      <SectionTitle index="04" overline="BUILD LOG" aside="The GRC agent grew into a CNAPP project. Other builds cover malware detection and SIEM analysis.">
        SYSTEMS<br /><span className="outline-dark">BUILT.</span>
      </SectionTitle>
      <div className="project-grid grid">
        {projects.map((project) => <article className="project-card" data-reveal key={project.id}>
          <div className="project-top"><span>PRJ_{project.id}</span><span>{project.kind}</span></div>
          <div className="project-glyph" aria-hidden="true">{project.id === '01' ? '▧' : project.id === '02' ? '◉' : '⌁'}</div>
          {project.origin && <div className="project-origin"><span>EVOLVED FROM</span><strong>{project.origin}</strong></div>}
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>)}
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section id="proof" className="proof-section section-shell" aria-labelledby="proof-title">
      <SectionTitle index="05" overline="THE RECEIPTS" aside="Credential links open issuer records when available. Competition placements come from the supplied résumé.">
        PROOF OF<br /><span className="accent-text">PRACTICE.</span>
      </SectionTitle>
      <div className="proof-layout" data-reveal>
        <div className="credential-grid grid">
          {credentials.map((credential, index) => {
            const Tag = credential.url ? 'a' : 'div';
            return <Tag className="credential-card" key={credential.issuer} href={credential.url || undefined} target={credential.url ? '_blank' : undefined} rel={credential.url ? 'noopener noreferrer' : undefined}>
              <div className="credential-top"><span>{credential.issuer}</span><span>0{index + 1} / 06</span></div>
              <strong>{credential.name}</strong>
              <div className="credential-bottom"><span>{credential.fullName}<small>{credential.detail}</small></span><span aria-hidden="true">{credential.url ? '↗' : '■'}</span></div>
            </Tag>;
          })}
        </div>
        <div className="ctf-board"><p>COMPETITION LOG <span>///</span></p>{placements.map((item) => <div className="ctf-row" key={item.event}><span>{item.rank}</span><div><strong>{item.event}</strong><small>{item.when}</small></div><em>{item.place}</em></div>)}<span className="ctf-bottom">END OF TRANSMISSION _</span></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-noise" aria-hidden="true">G3NTL3M3N&nbsp; G3NTL3M3N&nbsp; G3NTL3M3N&nbsp;</div>
      <div className="section-shell contact-inner">
        <Eyebrow>06 / OPEN CHANNEL</Eyebrow>
        <h2 id="contact-title">FOUND A<br /><span>WEAK SIGNAL?</span></h2>
        <p>Research, security engineering, or a problem worth pulling apart. Send the details.</p>
        <div className="contact-actions flex flex-wrap"><a href="mailto:kumarep349@gmail.com">EMAIL PRAVEEN <Arrow diagonal /></a><a href="https://in.linkedin.com/in/praveen-s-052920222" target="_blank" rel="noopener noreferrer">LINKEDIN <Arrow diagonal /></a></div>
        <div className="contact-foot"><span>PRAVEEN S / CHENNAI, INDIA</span><span>ALWAYS CHECK THE ASSUMPTION.</span></div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

    document.documentElement.classList.add('motion-ready');
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return (
    <>
      <div className="boot-flash" aria-hidden="true"><span>G3 //</span><strong>LINK ESTABLISHED</strong><i /></div>
      <Header />
      <main id="main">
        <Hero />
        <SignalTicker />
        <CveFeature />
        <About />
        <DuplicateArchive />
        <Work />
        <Projects />
        <Proof />
        <Contact />
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} PRAVEEN S / G3NTL3M3N</span><span>BUILT TO BE READ. BUILT TO BE QUESTIONED.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </>
  );
}
