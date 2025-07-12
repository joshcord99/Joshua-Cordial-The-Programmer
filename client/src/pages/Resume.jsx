import "../css/Resume.css";
import resumeData from "../data/resumeData";

export default function Resume() {
  return (
    <div className="main-container page">
      <div id="resume-text">
        <div>
          <h2 className="resumeHead text-center">EDUCATION</h2>
          <ul>
            {resumeData.education.map((item, idx) => (
              <li key={idx} className="resumeText">
                <strong>{item.degree}</strong> — {item.institution},{" "}
                {item.location}
              </li>
            ))}
          </ul>

          <h2 className="resumeHead text-center">TECHNICAL SKILLS</h2>
          <ul>
            <li className="resumeText">
              <strong>Languages:</strong> {resumeData.technicalSkills.languages}
            </li>
            <li className="resumeText">
              <strong>Frameworks/Libraries:</strong>{" "}
              {resumeData.technicalSkills.frameworksLibraries}
            </li>
            <li className="resumeText">
              <strong>Backend Technologies:</strong>{" "}
              {resumeData.technicalSkills.backendTechnologies}
            </li>
            <li className="resumeText">
              <strong>Tools/Platforms:</strong>{" "}
              {resumeData.technicalSkills.toolsPlatforms}
            </li>
          </ul>

          <h2 className="resumeHead text-center">
            ADMINISTRATIVE & SOFT SKILLS
          </h2>
          <ul>
            <li className="resumeText">
              <strong>Administrative Tools:</strong>{" "}
              {resumeData.administrativeSkills.administrativeTools}
            </li>
            <li className="resumeText">
              <strong>Office Support:</strong>{" "}
              {resumeData.administrativeSkills.officeSupport}
            </li>
            <li className="resumeText">
              <strong>Soft Skills:</strong>{" "}
              {resumeData.administrativeSkills.softSkills}
            </li>
            <li className="resumeText">
              <strong>Typing Speed:</strong>{" "}
              {resumeData.administrativeSkills.typingSpeed}
            </li>
            <li className="resumeText">
              <strong>Tech Adaptability:</strong>{" "}
              {resumeData.administrativeSkills.techAdaptability}
            </li>
          </ul>

          <h2 className="resumeHead text-center">PROJECTS</h2>
          <p className="resumeText">
            All projects are available on GitHub:{" "}
            <a
              href={resumeData.basicInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              @joshcord99
            </a>
          </p>
          <ul>
            {resumeData.projects.map((project, idx) => (
              <li key={idx} className="resumeText">
                <strong>{project.name}</strong>
                {project.live && (
                  <>
                    {" "}
                    (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    )
                  </>
                )}
                <br />
                {project.description && (
                  <span>
                    {project.description}
                    <br />
                  </span>
                )}
                {project.github && (
                  <span>
                    GitHub:{" "}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.github}
                    </a>
                    <br />
                  </span>
                )}
                {project.role && (
                  <span>
                    Role: {project.role}
                    <br />
                  </span>
                )}
                {project.skills && (
                  <span>
                    Skills: {project.skills}
                    <br />
                  </span>
                )}
                {project.tools && <span>Tools: {project.tools}</span>}
              </li>
            ))}
          </ul>

          <h2 className="resumeHead text-center">EXPERIENCE</h2>
          <ul>
            {resumeData.experience.map((exp, idx) => (
              <li key={idx} className="resumeText">
                <strong>{exp.title}</strong> — {exp.company}, {exp.location} (
                {exp.date})
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="resumeText">
                      {resp}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <h2 className="resumeHead text-center">CERTIFICATION & AWARDS</h2>
          <ul>
            {resumeData.certifications.map((cert, idx) => (
              <li key={idx} className="resumeText">
                {cert}
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
