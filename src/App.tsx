import { useState } from "react";

const documents = [
  "Foundational Constitution", "Mathematical Definitions and Notation",
  "Fundamental Axioms and Principles", "Loss-State Theory", "Loss Measurement Theory",
  "Transformation Theory", "Optimization Theory", "Information Preservation Theory",
  "Provenance and Lineage Theory", "Execution and Process Theory",
  "Recovery and Resilience Theory", "Security and Integrity Theory",
  "Uncertainty and Information Theory", "Decision Theory and Intelligence",
  "Learning and Adaptation Theory", "Algorithm Design and Analysis Theory",
  "Formal Verification and Proof Theory", "Programming Language and Computational Semantics",
  "Distributed Systems and Coordination Theory", "Cryptographic Foundations and Trust Architecture",
  "Data Architecture and Knowledge Representation", "System Architecture and Integration Theory",
  "Evaluation, Benchmarking and Experimental Methodology",
  "Governance, Ethics and Institutional Assurance", "Unified Specification and Technical Standard"
];

const pillars = [
  { n: "01", title: "Preservation", desc: "Protect information, context, provenance, and the parts of a system that must survive change." },
  { n: "02", title: "Optimization", desc: "Improve outcomes within explicit constraints instead of optimizing one metric at the expense of everything else." },
  { n: "03", title: "Recovery", desc: "Design systems to detect failure, restore valid state, and verify what has actually been recovered." },
  { n: "04", title: "Verification", desc: "Make assumptions, evidence, limitations, and claims visible enough to be tested." }
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const shownDocs = expanded ? documents : documents.slice(0, 8);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top" onClick={closeMenu}>
        <img src="/brand/LOSS_LESS_Symbol.svg" alt="" />
        <span>LOSS LESS<span className="brand-sub">FOUNDATION</span></span>
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {["Framework", "Principles", "Documentation", "Research", "About"].map(item =>
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
        )}
        <a className="nav-cta" href="#documentation" onClick={closeMenu}>Explore the work <Arrow /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> AN OPEN FRAMEWORK IN DEVELOPMENT</div>
          <h1>Build systems that<br /><span>lose less.</span></h1>
          <p className="hero-lead">A proposed framework for preserving information, improving decisions, and designing systems that can recover.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#framework">Explore the framework <Arrow /></a>
            <a className="button button-quiet" href="#documentation">Read the foundation <span>↓</span></a>
          </div>
          <p className="hero-note">A research and engineering initiative. Claims remain subject to formalization, testing, and independent review.</p>
        </div>
        <div className="hero-art" aria-label="LOSS LESS abstract infinity mark">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="art-glow"></div>
          <img src="/brand/LOSS_LESS_Symbol.svg" alt="LOSS LESS infinity-inspired symbol" />
          <div className="art-caption"><span>LL / 001</span><span>CONTINUITY BY DESIGN</span></div>
        </div>
        <div className="hero-bottom"><span>INFORMATION</span><i></i><span>INTEGRITY</span><i></i><span>RECOVERY</span><span className="scroll-cue">SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="statement-band">
        <div className="section-wrap statement-inner">
          <span className="section-kicker">THE CENTRAL IDEA</span>
          <p>Preserve what can be preserved.<br />Optimize what can be optimized.<br /><em>Recover what can be recovered.</em></p>
          <span className="statement-foot">Never claim a guarantee that has not been defined and demonstrated.</span>
        </div>
      </section>

      <section className="section-wrap content-section" id="framework">
        <div className="section-heading">
          <div><span className="section-kicker">01 / THE FRAMEWORK</span><h2>A way to think<br />about <span>system loss.</span></h2></div>
          <p>LOSS LESS explores how systems can reason about loss across their lifecycle—from information and decisions to integrity, resources, and recovery.</p>
        </div>
        <div className="loss-grid">
          {[
            ["Lᵢ", "Information loss", "What knowledge or context disappears?"],
            ["Lₐ", "Accuracy loss", "How far does an output depart from what is valid?"],
            ["L꜀", "Resource cost", "What time, compute, or effort is consumed?"],
            ["Lᴅ", "Decision loss", "How does a choice reduce decision quality?"],
            ["Lₛ", "Security loss", "What integrity or protection is weakened?"],
            ["Lᵣ", "Recovery loss", "What cannot be restored after failure?"]
          ].map(([symbol, title, desc]) => <article className="loss-card" key={symbol}>
            <span className="loss-symbol">{symbol}</span><h3>{title}</h3><p>{desc}</p>
          </article>)}
        </div>
        <p className="fine-print">These dimensions are considered separately. They are not assumed to collapse into one universally valid score.</p>
      </section>

      <section className="principles-section" id="principles">
        <div className="section-wrap">
          <div className="section-heading light-heading">
            <div><span className="section-kicker">02 / OPERATING PRINCIPLES</span><h2>Four ideas.<br /><span>One discipline.</span></h2></div>
            <p>The framework is intended to guide design and evaluation—not to replace domain expertise, evidence, or rigorous engineering.</p>
          </div>
          <div className="pillar-list">
            {pillars.map(p => <article className="pillar" key={p.n}>
              <span className="pillar-number">{p.n}</span><h3>{p.title}</h3><p>{p.desc}</p><span className="pillar-mark">+</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-wrap content-section docs-section" id="documentation">
        <div className="section-heading">
          <div><span className="section-kicker">03 / FOUNDATIONAL SERIES · VERSION 1.0</span><h2>Twenty-five documents.<br /><span>A shared foundation.</span></h2></div>
          <p>The initial series establishes the proposed vocabulary, mathematical direction, system theories, evaluation approach, and governance principles.</p>
        </div>
        <div className="doc-meta"><span><strong>25</strong> DOCUMENTS</span><span><strong>01</strong> UNIFIED SPECIFICATION</span><span><strong>2026</strong> FOUNDATION RELEASE</span></div>
        <div className="document-list">
          {shownDocs.map((doc, i) => <div className="document-row" key={doc}><span className="doc-number">{String(i + 1).padStart(3, "0")}</span><span>{doc}</span><span className="doc-arrow">↗</span></div>)}
        </div>
        <button className="text-button" onClick={() => setExpanded(!expanded)}>{expanded ? "Show fewer documents" : "View all 25 documents"} <span>{expanded ? "↑" : "↓"}</span></button>
        <div className="spec-card">
          <div><span className="section-kicker">THE CONSOLIDATED STANDARD</span><h3>LL-025 — Unified Specification and Technical Standard</h3><p>The closing volume consolidates the proposed framework, requirements, terminology, and evaluation direction.</p></div>
          <span className="spec-number">LL<br /><b>025</b></span>
        </div>
        <p className="fine-print">Document titles are listed here as a catalogue. Downloadable public editions can be linked after publication and review.</p>
      </section>

      <section className="research-band" id="research">
        <div className="section-wrap research-inner">
          <div><span className="section-kicker">04 / RESEARCH AGENDA</span><h2>From specification<br />to <span>evidence.</span></h2></div>
          <div className="research-copy"><p>A written foundation is only a starting point. The next phase is to formalize the mathematical core, build a narrow reference implementation, benchmark it against established methods, and invite independent scrutiny.</p>
            <ol><li>Technical and mathematical audit</li><li>Testable requirements and formal definitions</li><li>Reference implementation and reproducible benchmarks</li><li>Failure testing and independent review</li></ol>
          </div>
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="about-mark"><img src="/brand/LOSS_LESS_Symbol.svg" alt="" /></div>
        <div className="about-copy"><span className="section-kicker">05 / ABOUT THE FOUNDATION</span><h2>An ongoing effort<br />to make <span>better systems.</span></h2><p>LOSS LESS Foundation is the home for the development, documentation, evaluation, and responsible communication of the LOSS LESS framework.</p><p className="disclaimer">LOSS LESS is currently a proposed framework under development. Its claims, methods, and applicability require formal analysis, implementation, empirical evaluation, and independent validation. No universal guarantee is asserted.</p></div>
      </section>

      <section className="closing-cta">
        <div className="section-wrap closing-inner"><span className="section-kicker">THE WORK CONTINUES</span><h2>Less loss.<br /><span>More continuity.</span></h2><a className="button button-light" href="#documentation">Explore the foundation <Arrow /></a></div>
      </section>
    </main>

    <footer className="footer">
      <div className="section-wrap footer-main">
        <a className="brand footer-brand" href="#top"><img src="/brand/LOSS_LESS_Symbol_White_on_Dark.svg" alt="" /><span>LOSS LESS<span className="brand-sub">FOUNDATION</span></span></a>
        <p>Preserve what can be preserved.<br />Optimize what can be optimized.<br />Recover what can be recovered.</p>
        <div className="footer-links"><a href="#framework">Framework</a><a href="#documentation">Documentation</a><a href="#research">Research</a><a href="#about">About</a></div>
      </div>
      <div className="section-wrap footer-bottom"><span>© 2026 LOSS LESS FOUNDATION</span><span>VERSION 1.0 · FOUNDATIONAL SERIES</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </div>;
}
export default App;