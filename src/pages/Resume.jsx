import "../css/Resume.css";

export default function Resume() {
  return (
    <div>
      <div>
        <h2 className="resumeHead text-center">EDUCATION</h2>
        <ul>
          <li className="resumeText">
            <strong>Long Beach City College</strong> -- Computer Science 2023 -
            In Progress
          </li>
          <li className="resumeText">
            <strong>University of California, Irvine </strong> -- Full Stack Web
            Development Bootcamp 2024 - Expected Graduation (November 23, 2024)
          </li>
        </ul>
        <h2 className="resumeHead text-center">TECHNICAL SKILLS</h2>
        <ul>
          <li className="resumeText">
            <strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS
          </li>
          <li className="resumeText">
            <strong>Frameworks/Libraries:</strong> Node.js, Express.js, React,
            Inquirer.js
          </li>
          <li className="resumeText">
            <strong>Databases:</strong> MySQL, MongoDB
          </li>
          <li className="resumeText">
            <strong>Tools:</strong> GitHub, Visual Studio Code, PgAdmin
          </li>
          <li className="resumeText">
            <strong>Soft Skills:</strong> Problem Solving, Team Collaboration,
            Open minded.
          </li>
        </ul>
        <h2 className="resumeHead text-center">PROJECTS</h2>
        <p className="resumeText">
          All projects are available on GitHub:{" "}
          <a
            href="https://github.com/joshcord99"
            target="_blank"
            rel="noopener noreferrer"
          >
            @joshcord99
          </a>
        </p>
        <ul>
          <li className="resumeText">
            <strong>
              Personal-Business-Planner (Node.js, Inquirer, and PostgreSQL):
            </strong>{" "}
            A command-line interface project that allows users to manage a
            business's managers and employees, including adding employees,
            adding roles, and assigning managers.
          </li>
          <li className="resumeText">
            <strong>Personal-README-Generator (Node.js):</strong> A tool that
            generates professional README files for projects using user input
            through Inquirer.js.
          </li>
        </ul>
        <h2 className="resumeHead text-center">EXPERIENCE</h2>
        <ul>
          <li className="resumeText">
            <strong>Fleet Mechanic, Fedex Freight; Gardena, CA:</strong> 2023 -
            2024
            <ul>
              <li className="resumeText">
                Diagnosed and resolved mechanical issues with fleet equipment
                and collaborated with team members to ensure efficient repairs.
              </li>
              <li className="resumeText">
                Maintained detailed records of work performed for billing and
                ensured compliance with safety protocols.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="resumeHead text-center">CERTIFICATION & AWARDS</h2>
        <ul>
          <li className="resumeText">
            ASE Certified A6 Electrical/Electronic Systems
          </li>
          <li className="resumeText">
            Automotive and Diesel Technology Degree
          </li>
        </ul>
        <div>
          <h2 className="resumeHead text-center">Resume Download</h2>
          <a
            className="download-link"
            href="/resume.pdf"
            download="/Joshua_Cordial_Resume.pdf"
          >
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
