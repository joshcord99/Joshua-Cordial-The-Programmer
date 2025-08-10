import "../css/Resume.css";
import resumeData from "../data/resumeData";

export default function Resume() {
  return (
    <div className="main-container page">
      <div id="resume-text">
        <div>
          {/* SUMMARY */}
          <h2 className="resumeHead text-center">SUMMARY</h2>
          <p className="resumeText">{resumeData.summary}</p>

          {/* TECHNICAL SKILLS */}
          <h2 className="resumeHead text-center">TECHNICAL SKILLS</h2>
          <ul>
            <li className="resumeText">
              <strong>Languages:</strong> {resumeData.technicalSkills.languages}
            </li>
            <li className="resumeText">
              <strong>Frameworks & Libraries:</strong>{" "}
              {resumeData.technicalSkills.frameworksLibraries}
            </li>
            <li className="resumeText">
              <strong>Backend Technologies:</strong>{" "}
              {resumeData.technicalSkills.backendTechnologies}
            </li>
            <li className="resumeText">
              <strong>Tools & Platforms:</strong>{" "}
              {resumeData.technicalSkills.toolsPlatforms}
            </li>
          </ul>

          {/* PROJECTS */}
          <h2 className="resumeHead text-center">PROJECTS</h2>
          <p className="resumeText text-center">Please see project page</p>

          {/* EXPERIENCE */}
          <h2 className="resumeHead text-center">EXPERIENCE</h2>
          <ul>
            {resumeData.experience.map((job, index) => (
              <li key={index} className="resumeText">
                <strong>{job.title}</strong> — {job.company}, {job.location} (
                {job.date})
                <ul>
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* EDUCATION */}
          <h2 className="resumeHead text-center">EDUCATION</h2>
          <ul>
            {resumeData.education.map((edu, index) => (
              <li key={index} className="resumeText">
                <strong>{edu.degree}</strong> — {edu.institution}
              </li>
            ))}
          </ul>

          <div>
            <h2 className="resumeHead text-center">Resume Download</h2>
            <a
              className="download-link"
              href="/Joshua-Cordial-Resume-pdf.pdf"
              download="/Joshua-Cordial-Resume-pdf.pdf"
            >
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
