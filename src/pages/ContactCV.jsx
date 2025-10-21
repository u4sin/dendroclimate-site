import { useState } from "react";
import Section from "../components/Section";
import { Mail, FileText, Globe, Copy } from "lucide-react";

export default function ContactCV() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000); // hide tooltip after 2s
  };

  const emails = [
    "pushpendra.pec@gmail.com",
    "pushpendra.pandey@bsip.res.in",
  ];

  return (
    <Section
      title="Contact & CV"
      lead="For collaborations, questions, or access to datasets, feel free to reach out:"
    >
      <div className="contact-grid">
        {/* Email Section */}
        <div className="contact-card">
          <div className="card-icon">
            <Mail size={28} />
          </div>
          <div className="card-content">
            <h4>Email</h4>
            {emails.map((email) => (
              <div key={email} className="email-row">
                <a href={`mailto:${email}`}>{email}</a>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(email)}
                  title="Copy Email"
                >
                  <Copy size={16} />
                </button>
                {copiedEmail === email && <span className="copied-tooltip">Copied!</span>}
              </div>
            ))}
          </div>
        </div>

        {/* CV Section */}
        <div className="contact-card">
          <div className="card-icon">
            <FileText size={28} />
          </div>
          <div className="card-content">
            <h4>Curriculum Vitae</h4>
            <p>
              <a
                href="./docs/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV (PDF)
              </a>
            </p>
          </div>
        </div>

        {/* Research Profiles */}
        <div className="contact-card">
          <div className="card-icon">
            <Globe size={28} />
          </div>
          <div className="card-content">
            <h4>Research Profiles</h4>
            <p>
              <a
                href="https://www.researchgate.net/profile/Pushpendra_Pandey3?ev=hdr_xprf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ResearchGate
              </a>{" "}
              /{" "}
              <a
                href="https://scholar.google.com/citations?user=9ktmvE4AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>{" "}
              /{" "}
              <a
                href="https://www.linkedin.com/in/pushpendra-pandey-9ba8061a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
