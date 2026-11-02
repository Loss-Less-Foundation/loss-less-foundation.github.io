import { useState } from "react";

const documents = [
  { id: "LL-001", title: "Foundational Constitution", summary: "The constitution: paradigm, layers, domains, commitments, and governance." },
  { id: "LL-002", title: "Mathematical Definitions and Notation", summary: "Shared symbols and conventions, so notation does not drift across documents." },
  { id: "LL-003", title: "Fundamental Axioms and Principles", summary: "Axioms and principles later documents must not silently contradict." },
  { id: "LL-004", title: "Loss-State Theory", summary: "The state model and how loss is represented in state." },
  { id: "LL-005", title: "Loss Measurement Theory", summary: "How the six loss dimensions are measured, separately." },
  { id: "LL-006", title: "Transformation Theory", summary: "Transformations, contracts, reversibility, and composition." },
  { id: "LL-007", title: "Optimization Theory", summary: "Constrained optimisation; hard constraints are never traded for soft scores." },
  { id: "LL-008", title: "Information Preservation Theory", summary: "What preservation means, its classes, and its limits." },
  { id: "LL-009", title: "Provenance and Lineage Theory", summary: "Source, lineage, and audit evidence for outputs." },
  { id: "LL-010", title: "Execution and Process Theory", summary: "Process lifecycle, commits, and duplicate-effect prevention." },
  { id: "LL-011", title: "Recovery and Resilience Theory", summary: "Checkpoint, validation, and recovery as validated acceptance." },
  { id: "LL-012", title: "Security and Integrity Theory", summary: "Threat models, trust boundaries, and integrity limits." },
  { id: "LL-013", title: "Uncertainty and Information Theory", summary: "Entropy, Bayes, propagation, calibration; unknown is never zero." },
  { id: "LL-014", title: "Decision Theory and Intelligence", summary: "Decisions under constraints, utility, abstention, and authority." },
  { id: "LL-015", title: "Learning and Adaptation Theory", summary: "Learning as controlled state change, with gates and rollback." },
  { id: "LL-016", title: "Algorithm Design and Analysis Theory", summary: "Contracts, correctness, complexity, and resource bounds." },
  { id: "LL-017", title: "Formal Verification and Proof Theory", summary: "Proofs, obligations, and what a test does not prove." },
  { id: "LL-018", title: "Programming Language and Computational Semantics", summary: "Semantics and implementation correspondence." },
  { id: "LL-019", title: "Distributed Systems and Coordination Theory", summary: "Nodes, timing, consistency, and correlated failure." },
  { id: "LL-020", title: "Cryptographic Foundations and Trust Architecture", summary: "Established cryptography only; hash and signature limits." },
  { id: "LL-021", title: "Data Architecture and Knowledge Representation", summary: "Schemas, mappings, and declared mapping loss." },
  { id: "LL-022", title: "System Architecture and Integration Theory", summary: "Components, interfaces, contracts, and evidence." },
  { id: "LL-023", title: "Evaluation, Benchmarking and Experimental Methodology", summary: "Fair baselines, predeclared thresholds, bounded conclusions." },
  { id: "LL-024", title: "Governance, Ethics and Institutional Assurance", summary: "Accountability, ethics, and institutional limits." },
  { id: "LL-025", title: "Unified Specification and Technical Standard", summary: "The consolidation: state, contracts, loss, profiles, and roadmap." }
];

const pillars = [
  { n: "01", title: "Preservation", desc: "Protect information, context, provenance, and the parts of a system that must survive change." },
  { n: "02", title: "Optimization", desc: "Improve outcomes within explicit constraints instead of optimizing one metric at the expense of everything else." },
  { n: "03", title: "Recovery", desc: "Design systems to detect failure, restore valid state, and verify what has actually been recovered." },
  { n: "04", title: "Verification", desc: "Make assumptions, evidence, limitations, and claims visible enough to be tested." }
];

const faqs = [
  { q: "Is LOSS LESS a standard or a certification?", a: "No. LL-001 to LL-025 v1.0 is a foundational proposal. Conformance levels LL-C0 to LL-C4 are proposed internal levels, not an external certification, and no qualification, licence, or recognition is conferred." },
  { q: "Can I use the code or the documents?", a: "Not without the owner's written permission. Copyright is held by Dr. Harshvardhan Chopra and all rights are reserved. Public reading does not grant use, copying, or reuse." },
  { q: "Where is the code?", a: "In a private repository. Only research and documentation are public-facing. No source code is published on this site, and no repository links are given until the owner confirms the account and repository names." },
  { q: "Is this website live?", a: "Not yet. The site is built and verified locally. Deployment needs a host and domain decision from the owner, and that decision has not been made." },
  { q: "What is still unproved?", a: "The empirical LL-023 and LL-024 claims, a human decision-usefulness study, a real-organisation governance study, a real-data Stage 3 run, concrete LL-018 to LL-022 systems beyond small miniatures, and a whole-system formal certificate. Independent review is started, not closed." },
  { q: "Has the name or symbol been trademarked?", a: "The owner confirms there is no trademark problem for the name and symbol. No ™ or ® registration claim is made on this site." },
  { q: "Which licence applies?", a: "Published research and documentation are under the LOSS LESS Public Licence: the owner keeps all rights, and users are granted the uses of the published material — use, share, cite, and adapt with marking and attribution. Private code and source are under the LOSS LESS Private Licence: no public rights are granted, and access is only to persons expressly authorised by the owner. Both licences are in the Licenses section below." }
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [demoCelsius, setDemoCelsius] = useState("20");
  const [demoName, setDemoName] = useState("  Ada Lovelace ");
  const [demoEmail, setDemoEmail] = useState("  Ada@Example.COM ");
  const closeMenu = () => setMenuOpen(false);
  const q = query.trim().toLowerCase();
  const filteredDocs = q
    ? documents.filter((d) => `${d.id} ${d.title} ${d.summary}`.toLowerCase().includes(q))
    : documents;
  const parsedC = parseInt(demoCelsius, 10);
  const kelvin = demoCelsius.trim() !== "" && Number.isInteger(parsedC) && String(parsedC) === demoCelsius.trim()
    ? parsedC + 273
    : null;

  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top" onClick={closeMenu}>
        <img src="/brand/LOSS_LESS_Symbol.svg" alt="" />
        <span>LOSS LESS<span className="brand-sub">FOUNDATION</span></span>
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {["Framework", "How it works", "Documentation", "Implementation", "Proofs", "Evidence", "Roadmap", "Status", "Licenses", "FAQ", "About"].map(item =>
          <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} onClick={closeMenu}>{item}</a>
        )}
        <a className="nav-cta" href="#documentation" onClick={closeMenu}>Explore the work <Arrow /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A PROPOSED FRAMEWORK IN DEVELOPMENT</div>
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
        <p className="fine-print">These dimensions are considered separately. They are not assumed to collapse into one universally valid score. The controlling model is LL-025: state S = (X, K, U, P, V, C) and model M = (𝒮, 𝒯, Valid, ℒ, F, G, B). Validity may be three-valued, and unknown is not valid. Hard constraints (LL-REQ-008) are never traded for soft objectives.</p>
      </section>

      <section className="section-wrap content-section" id="how-it-works">
        <div className="section-heading">
          <div><span className="section-kicker">HOW IT WORKS</span><h2>Declare, transform,<br /><span>check, recover.</span></h2></div>
          <p>Every transformation runs under a contract: preconditions, postconditions, frame conditions, declared reductions, and failure behaviour. Nothing is silently coerced; unknown is never treated as zero.</p>
        </div>
        <div className="impl-grid">
          <article className="impl-card"><span>1</span><h3>Declare</h3><p>State what must be preserved exactly, what may change under a declared equivalence, and what is deliberately discarded.</p></article>
          <article className="impl-card"><span>2</span><h3>Transform</h3><p>Apply the change without mutating the input. A contract violation refuses the result instead of returning a quietly wrong one.</p></article>
          <article className="impl-card"><span>3</span><h3>Check</h3><p>Measure the six loss dimensions separately, ledger the step in a hash chain, and checkpoint the validated state.</p></article>
          <article className="impl-card"><span>4</span><h3>Recover</h3><p>On failure, restore the checkpointed state exactly, validate it, and only then resume. Recovery itself is ledgered.</p></article>
        </div>
        <div className="demo-box">
          <h3>Try the declared rules</h3>
          <p>This runs in your browser only. It demonstrates the two shipped profiles; it sends nothing anywhere and proves nothing about any other data.</p>
          <div className="demo-grid">
            <label>Temperature, °C (integer)<input value={demoCelsius} onChange={(e) => setDemoCelsius(e.target.value)} inputMode="numeric" /></label>
            <label>Name<input value={demoName} onChange={(e) => setDemoName(e.target.value)} /></label>
            <label>Email<input value={demoEmail} onChange={(e) => setDemoEmail(e.target.value)} /></label>
          </div>
          <div className="demo-output">
            <p><strong>Kelvin:</strong> {kelvin === null ? "Enter an integer number of °C" : `${kelvin} K — reconstructable as ${parsedC}°C only with the declared unit as side information.`}</p>
            <p><strong>Normalised name:</strong> {demoName.trim() === "" ? "—" : demoName.trim()} <span>(strip equivalence; the original spacing is not preserved)</span></p>
            <p><strong>Normalised email:</strong> {demoEmail.trim() === "" ? "—" : demoEmail.trim().toLowerCase()} <span>(strip + lower-case equivalence)</span></p>
            <p><strong>Deliberately discarded:</strong> free-text notes, by declaration — and therefore unrecoverable from the output, by design.</p>
          </div>
        </div>
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
        <input className="search-input" type="search" placeholder="Search all 25 documents — try “provenance”, “decision”, or “LL-019”…" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search documents" />
        <div className="document-list">
          {filteredDocs.length === 0
            ? <div className="document-row"><span>No document matches that search.</span></div>
            : filteredDocs.map((doc) => <div className="document-row" key={doc.id}><span className="doc-number">{doc.id}</span><span>{doc.title}</span><span className="doc-summary">{doc.summary}</span></div>)}
        </div>
        <div className="spec-card">
          <div><span className="section-kicker">THE CONSOLIDATED STANDARD</span><h3>LL-025 — Unified Specification and Technical Standard</h3><p>The closing volume consolidates the proposed framework, requirements, terminology, and evaluation direction. Originals control; summaries on this page are working notes.</p></div>
          <span className="spec-number">LL<br /><b>025</b></span>
        </div>
        <p className="fine-print">Document titles are listed here as a catalogue. Downloadable public editions can be linked after publication and review.</p>
      </section>

      <section className="section-wrap content-section" id="implementation">
        <div className="section-heading">
          <div><span className="section-kicker">IMPLEMENTATION · v0.6.0</span><h2>Built, tested,<br /><span>honestly scoped.</span></h2></div>
          <p>The reference implementation covers the implementable system in the documents — two bounded profiles, not the whole framework, and not a production system.</p>
        </div>
        <div className="impl-grid">
          <article className="impl-card"><span>88 / 88</span><h3>Python tests</h3><p>Core, extended, Stage 3, real-proofs, and universal-proofs tests, all passing from a clean copy.</p></article>
          <article className="impl-card"><span>23 / 23</span><h3>Rust tests</h3><p>Core plus uncertainty and decision ports, cross-checked against Python.</p></article>
          <article className="impl-card"><span>50,000</span><h3>Stage 3 records</h3><p>Repo-generated realistic-scale workload: L<sub>I</sub> = 0.0, L<sub>A</sub> = 0.0, 1.05 s, 47,837 records/second, recovery ok, 9 / 9 predeclared gates passed.</p></article>
          <article className="impl-card"><span>2</span><h3>Profiles</h3><p>Data normalisation, and measurement normalisation (20°C → 293 K, reconstructable with the declared unit).</p></article>
        </div>
        <div className="impl-grid" style={{ marginTop: "16px" }}>
          <article className="impl-card"><span>23 / 23</span><h3>Independent implementation</h3><p>Built separately from LL-025, LL-006, and LL-009 alone, without reading the main code. Kelvin, clean-run loss, ledger tamper behaviour, and Pareto results agree.</p></article>
          <article className="impl-card"><span>6 / 6</span><h3>Coverage, 0 false positives</h3><p>Fault injection across six fault classes, all detected at transform time; 0 false positives on 200 valid records.</p></article>
          <article className="impl-card"><span>13</span><h3>Machine-checked checks</h3><p>Z3 checks on the encoded theorems: 12 proofs plus 1 witness. They cover the theorems as encoded, not the deployed code or SHA-256 itself.</p></article>
          <article className="impl-card"><span>4 / 4</span><h3>Completeness audit</h3><p>Demo provenance now ledgers source, transform, checkpoint, and recovery — a gap found in the audit was fixed, not hidden.</p></article>
        </div>
        <div className="profile-grid">
          <article className="profile-card"><h3>Profile 1 — data normalisation</h3><p>Preserves <code>id</code> and <code>amount</code> exactly. <code>name</code> and <code>email</code> are preserved under declared equivalence (strip; strip + lower-case). <code>note</code> is deliberately discarded and declared, so it is unrecoverable by design.</p></article>
          <article className="profile-card"><h3>Profile 2 — measurement normalisation</h3><p>Preserves sensor id and timestamp exactly. Converts integer Celsius to Kelvin by exact integer arithmetic (K = C + 273), so 20°C → 293 K, −5°C → 268 K, 21°C → 294 K. Note the convention: physically 20°C = 293.15 K, a 0.15 K convention difference.</p></article>
        </div>
        <p className="fine-print">Components: state and model, transformation contracts, six-dimensional loss, hash-chained provenance, checkpoint and validated recovery, uncertainty (entropy, Bayes, propagation), decision (utility, Pareto, value of information, abstention, authorisation gate), learning gates with rollback, verification records, evaluation with a naive baseline, security and audit, execution and idempotency, data architecture, and the LL-025 §27 system map. Not implemented: distributed consensus, real cryptography beyond SHA-256 digests, production deployment, and independent review in the external sense. Conformance: LL-C1 (Instrumented), partial toward LL-C2 and LL-C3. LL-C4 is started, not closed. Unmeasured dimensions are reported as not evaluated, never zero. The code is kept in a private repository; research and docs are the public-facing part. Copyright © 2026 Dr. Harshvardhan Chopra — all rights reserved.</p>
      </section>

      <section className="section-wrap content-section" id="proofs">
        <div className="section-heading">
          <div><span className="section-kicker">PROOFS · v0.5.0 – v0.6.0</span><h2>Proved where true.<br /><span>Disproved where false.</span></h2></div>
          <p>An unconditional universal reading of several claims is false, and a false statement cannot be proved. What is proved is the strongest true universal form, with its premises stated exactly — plus the counterexample where the premises fail.</p>
        </div>
        <div className="impl-grid">
          <article className="impl-card"><span>U1</span><h3>Reconstruction, exactly</h3><p>Exact reconstruction exists if and only if the retained representation is injective. Any representation that merges two inputs cannot be inverted by any method.</p></article>
          <article className="impl-card"><span>U2</span><h3>Digest detection, exactly</h3><p>A post-hoc change is detected if and only if it changes the digest or the stored digest is not also updated. Collisions, pre-digest corruption, whole-chain rewrites, and compromised keys are the undetectable cases.</p></article>
          <article className="impl-card"><span>U3</span><h3>Resilience bounds</h3><p>For any joint failure distribution, the Fréchet bounds hold and are sharp. Independence strictly improves on the worst case; perfect correlation gives no improvement.</p></article>
          <article className="impl-card"><span>U4</span><h3>Adaptive vs fixed</h3><p>An oracle adaptive policy is never worse than a fixed one. With estimates within ε, noisy adaptive regret is at most 2ε. Without an oracle or a bound, adaptation can lose.</p></article>
        </div>
        <div className="impl-grid" style={{ marginTop: "16px" }}>
          <article className="impl-card"><span>U5</span><h3>Coverage</h3><p>If postconditions equal the declared specification, coverage is 1.0 and false positives are 0. Measured: 6 / 6 fault classes detected, 0 / 200 false positives. Output-only testing without an oracle detected 0 / 6 and cannot detect provenance loss.</p></article>
          <article className="impl-card"><span>U6</span><h3>Completeness, within a boundary</h3><p>Completeness holds within an instrumentation boundary by induction. Outside the boundary it is false by definition, and verification cannot detect an omission. Demo audit: 4 / 4 after ledgering recovery.</p></article>
          <article className="impl-card"><span>U7</span><h3>Embedding</h3><p>Every computable preservation specification can be carried by a contract whose postconditions are the specification. The core therefore preserves everything a profile declares — and nothing a profile omits.</p></article>
          <article className="impl-card"><span>§6</span><h3>What the proofs do not cover</h3><p>LL-018 to LL-022 are proved only as small concrete miniatures (tiny language, 3-node quorum, signed artifact, schema migration, composed system). The general documents remain schemas. Open conjectures LL4-C1 to LL8-C3 are each resolved in the proof notes as an existential or conditional proof, a universal disproof, or a bound.</p></article>
        </div>
        <div className="status-box" style={{ marginTop: "16px" }}>
          <p><strong>Decision usefulness, measured — not just claimed.</strong> On 2,000 random tasks, a fixed equal-weight scalar had mean regret 0.555 and hid a trade-off in 99.9% of tasks; the vector view kept a mean front of 5.35 out of 6 actions, so it barely prunes random six-dimensional tasks. A human study protocol is written; no human data exists yet, and the computation is not a substitute for it.</p>
          <p><strong>Crypto claims stay conditional.</strong> Unconditional SHA-256 collision-resistance is false by pigeonhole (2²⁵⁶ + 1 inputs into 256 bits must collide). The computational version remains an assumption, and every digest proof is conditional on it.</p>
          <p><strong>Still not proved.</strong> No whole-system formal certificate, no concrete LL-018–LL-022 systems beyond small miniatures, no human decision study, no real-organisation governance study, and no real-data Stage 3 run. Stage 3 numbers are measurements on one workload, proved non-general by rerun at other sizes.</p>
        </div>
      </section>

      <section className="section-wrap content-section" id="evidence">
        <div className="section-heading">
          <div><span className="section-kicker">EVIDENCE · MEASUREMENTS, NOT SLOGANS</span><h2>Numbers with<br /><span>their scope attached.</span></h2></div>
          <p>Every number below names the workload, seed, or scope it came from. Change the scope and the number changes — that is shown, not hidden.</p>
        </div>
        <table className="data-table">
          <thead><tr><th>Measurement</th><th>Result</th><th>Scope</th></tr></thead>
          <tbody>
            <tr><td>Stage 3, full pipeline</td><td>50,000 records, 1.0452 s, 47,836.5 records/s, 9 / 9 gates</td><td>Repo-generated workload, no real dataset</td></tr>
            <tr><td>Stage 3 rerun, transform only</td><td>1,000 records in 0.0055 s; 10,000 in 0.0521 s; 50,000 in 0.2747 s</td><td>Seed 20261102; different scope from the full pipeline, so different rates are expected</td></tr>
            <tr><td>Coverage study</td><td>6 / 6 fault classes detected; 0 / 200 false positives</td><td>Fault injection, seed 20261102</td></tr>
            <tr><td>Decision experiment</td><td>Scalar regret 0.555; hides trade-off 99.9%; front 5.35 / 6</td><td>2,000 random tasks, 6 actions × 6 loss dimensions</td></tr>
            <tr><td>Independent review</td><td>Reproduced Python 78 / 78; findings E1–E9</td><td>v0.5.0 code; E1, E3, E5, E9 fixed in v0.6.0, the rest clarified</td></tr>
            <tr><td>Independent implementation</td><td>23 / 23 tests; Kelvin, loss, ledger, Pareto agree</td><td>Built from LL-025, LL-006, LL-009 alone; hash strings differ by design</td></tr>
            <tr><td>Governance simulations</td><td>Structured agreement 0.76 vs unstructured 0.47; unowned decisions 295 / 500 before, 0 after</td><td>Simulated only — labelled simulated, not a real-organisation study</td></tr>
          </tbody>
        </table>
        <p className="fine-print">A naive baseline on the Stage 3 workload coerced 3 unknowns, allowed 1 negative amount, and coerced a missing-email record to an empty string. That comparison is scoped to that workload only.</p>
      </section>

      <section className="section-wrap content-section" id="roadmap">
        <div className="section-heading">
          <div><span className="section-kicker">ROADMAP · LL-025 §29</span><h2>Where the work<br /><span>actually stands.</span></h2></div>
          <p>Stages are reported by evidence, not by aspiration.</p>
        </div>
        <div className="document-list">
          <div className="document-row"><span className="doc-number">0</span><span>Specification freeze</span><span className="doc-summary">Done — LL-001 to LL-025 v1.0 (2 November 2026).</span></div>
          <div className="document-row"><span className="doc-number">1</span><span>Minimal formal core</span><span className="doc-summary">Done — Python core, contracts, loss vector, provenance.</span></div>
          <div className="document-row"><span className="doc-number">2</span><span>Reference algorithms</span><span className="doc-summary">Done — Rust core plus a second profile.</span></div>
          <div className="document-row"><span className="doc-number">3</span><span>Instrumentation and evaluation</span><span className="doc-summary">Done on a repo-generated workload (not real user data). Re-run needed on real data when supplied.</span></div>
          <div className="document-row"><span className="doc-number">4</span><span>Recovery and security</span><span className="doc-summary">Partial — bounded failure scenarios and a demo threat model; no real security assessment.</span></div>
          <div className="document-row"><span className="doc-number">5</span><span>Independent review</span><span className="doc-summary">Started, not closed — independent review (findings E1–E9: gaps fixed or clarified) plus an independent implementation, 23 / 23. External review still needed to close LL-C4.</span></div>
          <div className="document-row"><span className="doc-number">6</span><span>Evidence-based revision</span><span className="doc-summary">Ongoing — revise from defects, counterexamples, and measurements.</span></div>
        </div>
      </section>

      <section className="section-wrap content-section" id="status">
        <div className="section-heading">
          <div><span className="section-kicker">HONEST STATUS</span><h2>What this is not.<br /><span>Yet.</span></h2></div>
          <p>Reading this section first is the fastest way to avoid overstating the work.</p>
        </div>
        <div className="status-box">
          <p><strong>Not a standard, not a certification.</strong> LL-P-01 to LL-P-09 are proved in their exact can/may/conditional forms, and their strongest true universal forms are proved in v0.6.0 — with the false unconditional readings disproved, not faked. Each result carries its premises and its boundary in the proof notes.</p>
          <p><strong>Trademark.</strong> The owner confirms there is no trademark problem for the name and symbol. No ™ or ® registration claim is made here.</p>
          <p><strong>No registered entity, no licence to practise, no qualification.</strong> The owner and accountable authority is Dr. Harshvardhan Chopra. That naming does not create an institution, recognition, or accreditation.</p>
          <p><strong>All rights reserved.</strong> Public reading here does not grant any right to use, copy, or reuse the work without the owner's written permission.</p>
        </div>
      </section>

      <section className="section-wrap content-section" id="licenses">
        <div className="section-heading">
          <div><span className="section-kicker">LICENCES · VERSION 1.0 · 2 NOVEMBER 2026</span><h2>Two licences.<br /><span>One owner.</span></h2></div>
          <p>Copyright in all LOSS LESS material stays with Dr. Harshvardhan Chopra (ORCID 0009-0005-1087-0696), including for any Zenodo publication. The two licences below say what everyone else may — and may not — do with it.</p>
        </div>
        <div className="profile-grid">
          <article className="profile-card"><h3>LOSS LESS Public Licence</h3><p>For published research and documentation. The owner <strong>holds all the rights</strong>, and because the publication is public, users are granted the uses of it: use it for personal, educational, and research purposes, share it, cite it, and adapt it with clear marking and attribution. No ownership is transferred, no trademark right is granted, and no endorsement is implied. Commercial sale of copies and trademark use need separate written permission.</p><p><a className="text-button" href="/LOSS_LESS_PUBLIC_LICENSE.md">Read the full Public Licence <Arrow /></a></p></article>
          <article className="profile-card"><h3>LOSS LESS Private Licence</h3><p>For private code, private source, and private drafts. <strong>No public rights are granted.</strong> Access is only to persons expressly authorised by the owner, only for the authorised purpose, and it is confidential and non-transferable: no use, copying, distribution, disclosure, or sublicensing outside that authorisation. All rights, including trademark rights, stay with the owner.</p><p><a className="text-button" href="/LOSS_LESS_PRIVATE_LICENSE.md">Read the full Private Licence <Arrow /></a></p></article>
        </div>
        <p className="fine-print">If a piece of material does not say which licence it is under, treat it as private and ask before using it. Reading this website does not by itself grant any right in private material.</p>
      </section>

      <section className="section-wrap content-section" id="connect">
        <div className="section-heading">
          <div><span className="section-kicker">CONNECT</span><h2>Find LOSS LESS<br /><span>elsewhere.</span></h2></div>
          <p>Two public homes, both linked here so there is no doubt which ones are official.</p>
        </div>
        <div className="profile-grid">
          <article className="profile-card"><h3>Zenodo community</h3><p>The LOSS LESS Foundation community on Zenodo, CERN's open research archive, for citable public records. All copyrights for Zenodo publications are held by Dr. Harshvardhan Chopra (ORCID 0009-0005-1087-0696).</p><p><a className="text-button" href="https://zenodo.org/communities/loss-less-foundation" target="_blank" rel="noreferrer">Visit the Zenodo community <Arrow /></a></p></article>
          <article className="profile-card"><h3>GitHub organisation</h3><p>Loss-Less-Foundation on GitHub, home of this website's repository. Code and research repositories under the organisation are planned; only the organisation itself is linked here until those repositories exist.</p><p><a className="text-button" href="https://github.com/Loss-Less-Foundation" target="_blank" rel="noreferrer">Visit the GitHub organisation <Arrow /></a></p></article>
        </div>
      </section>

      <section className="research-band" id="research">
        <div className="section-wrap research-inner">
          <div><span className="section-kicker">04 / RESEARCH AGENDA</span><h2>From specification<br />to <span>evidence.</span></h2></div>
          <div className="research-copy"><p>A written foundation is only a starting point. The next phase is to formalize the mathematical core, build a narrow reference implementation, benchmark it against established methods, and invite independent scrutiny.</p>
            <ol><li>Technical and mathematical audit</li><li>Testable requirements and formal definitions</li><li>Reference implementation and reproducible benchmarks</li><li>Failure testing and independent review</li></ol>
          </div>
        </div>
      </section>

      <section className="section-wrap content-section" id="faq">
        <div className="section-heading">
          <div><span className="section-kicker">QUESTIONS, ANSWERED PLAINLY</span><h2>Frequently asked,<br /><span>honestly answered.</span></h2></div>
          <p>Nothing here links to a repository, paper, or contact that does not exist yet.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => <details className="faq-item" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="about-mark"><img src="/brand/LOSS_LESS_Symbol.svg" alt="" /></div>
        <div className="about-copy"><span className="section-kicker">05 / ABOUT THE FOUNDATION</span><h2>An ongoing effort<br />to make <span>better systems.</span></h2><p>LOSS LESS is a proposed framework by Dr. Harshvardhan Chopra (ORCID 0009-0005-1087-0696). “LOSS LESS Foundation” is a working name, not a registered entity, and no contact details or social links are published here.</p><p className="disclaimer">LOSS LESS is currently a proposed framework under development. Its claims, methods, and applicability require formal analysis, implementation, empirical evaluation, and independent validation. No universal guarantee is asserted.</p></div>
      </section>

      <section className="closing-cta">
        <div className="section-wrap closing-inner"><span className="section-kicker">THE WORK CONTINUES</span><h2>Less loss.<br /><span>More continuity.</span></h2><a className="button button-light" href="#documentation">Explore the foundation <Arrow /></a></div>
      </section>
    </main>

    <footer className="footer">
      <div className="section-wrap footer-main">
        <a className="brand footer-brand" href="#top"><img src="/brand/LOSS_LESS_Symbol_White_on_Dark.svg" alt="" /><span>LOSS LESS<span className="brand-sub">FOUNDATION</span></span></a>
        <p>Preserve what can be preserved.<br />Optimize what can be optimized.<br />Recover what can be recovered.</p>
        <div className="footer-links"><a href="#framework">Framework</a><a href="#how-it-works">How it works</a><a href="#documentation">Documentation</a><a href="#implementation">Implementation</a><a href="#proofs">Proofs</a><a href="#evidence">Evidence</a><a href="#roadmap">Roadmap</a><a href="#status">Status</a><a href="#licenses">Licenses</a><a href="#connect">Connect</a><a href="#faq">FAQ</a><a href="#about">About</a></div>
      </div>
      <div className="section-wrap footer-bottom"><span>© 2026 Dr. Harshvardhan Chopra — All rights reserved</span><span>IMPLEMENTATION v0.6.0 · FOUNDATIONAL SERIES v1.0</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </div>;
}
export default App;
