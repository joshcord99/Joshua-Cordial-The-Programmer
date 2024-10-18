import "../css/Resume.css";

export default function Resume() {
  return (
    <div>
      <div>
        
        <h2 className = 'resumeHead' >EDUCATION</h2>
        <ul>
          <li className="resumeText">Long Beach City College -- Computer Science 2023 - In Progress</li>
          <li className="resumeText">University of California, Irvine -- Full Stack Web Development Bootcamp 2024 - Expected Graduation (November 23, 2024)</li>
        </ul>

        <h2 className = 'resumeHead'>TECHNICAL SKILLS</h2>
        <ul>
          <li className="resumeText"><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS</li>
          <li className="resumeText"><strong>Frameworks/Libraries:</strong> Node.js, Express.js, React, Inquirer.js</li>
          <li className="resumeText"><strong>Databases:</strong> MySQL, MongoDB</li>
          <li className="resumeText"><strong>Tools:</strong> GitHub, Visual Studio Code, PgAdmin</li>
          <li className="resumeText"><strong>Other:</strong> Problem Solving, Team Collaboration, Customer Service</li>
        </ul>

        <h2 className = 'resumeHead'>PROJECTS</h2>
        <p className="resumeText">All projects are available on GitHub: <a href="https://github.com/joshcord99" target="_blank" rel="noopener noreferrer">joshcord99</a></p>
        <ul>
          <li className="resumeText"><strong>Personal-Business-Planner (Node.js, Inquirer, and PostgreSQL):</strong> A command-line interface project that allows users to manage a business's managers and employees, including adding employees, adding roles, and assigning managers.</li>
          <li className="resumeText"><strong>Personal-README-Generator (Node.js):</strong> A tool that generates professional README files for projects using user input through Inquirer.js.</li>
        </ul>

        <h2 className = 'resumeHead'>EXPERIENCE</h2>
        <ul>
          <li className="resumeText"><strong>Fleet Mechanic, Fedex Freight; Gardena, CA:</strong> 2023 - 2024
            <ul>
              <li className="resumeText">Diagnosed and resolved mechanical issues with fleet equipment and collaborated with team members to ensure efficient repairs.</li>
              <li className="resumeText">Maintained detailed records of work performed for billing and ensured compliance with safety protocols.</li>
            </ul>
          </li>
          <li className="resumeText"><strong>Automotive Mechanic, Lucky's Auto Credit; Long Beach, CA:</strong> 2022 - 2023
            <ul>
              <li>Performed regular maintenance and communicated effectively with customers regarding vehicle repairs and services.</li>
            </ul>
          </li>
          <li className="resumeText"><strong>Automotive Mechanic, A-One Auto-Center; Gardena, CA:</strong> 2019 - 2021
            <ul>
              <li className="resumeText">Managed customer appointments, addressed their concerns, and provided support to mechanics to resolve issues effectively.</li>
              <li className="resumeText">Performed regular maintenance and communicated effectively with customers regarding vehicle repairs and services.</li>
            </ul>
          </li>
        </ul>

        <h2 className = 'resumeHead'>CERTIFICATION & AWARDS</h2>
        <ul>
          <li className="resumeText">ASE Certified A6 Electrical/Electronic Systems</li>
          <li className="resumeText">Automotive and Diesel Technology Degree</li>
        </ul>
      </div>
    </div>
  );
}








