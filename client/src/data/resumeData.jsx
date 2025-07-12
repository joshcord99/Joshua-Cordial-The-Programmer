const resumeData = {
  basicInfo: {
    name: "Joshua Cordial",
    age: 25,
    citizenship: "United States",
    location: "Long Beach, CA",
    phone: "(323) 240-4320",
    email: "joshcord99@gmail.com",
    linkedIn: "https://www.linkedin.com/in/joshua-cordial-9550ba1aa/",
    portfolio: "https://joshua-cordial-portfolio.netlify.app/",
    github: "https://github.com/joshcord99",
  },
  summary:
    "Detail-oriented U.S. citizen with strong skills in diagnosing and fixing technical problems. Experienced in solving coding challenges and working collaboratively in teams. Skilled in modern web development tools and clerical support. Currently pursuing a degree in Computer Science.",
  technicalSkills: {
    languages: "JavaScript, TypeScript, HTML, CSS, Python, C++, PHP",
    frameworksLibraries: "Node.js, Express.js, React, TailWind CSS",
    backendTechnologies: "MongoDB, MySQL, Firebase, PostgreSQL",
    toolsPlatforms: "GitHub, VS Code, Postman, Microsoft Office Suite",
  },
  administrativeSkills: {
    administrativeTools: "Microsoft Word, Excel, PowerPoint, Outlook; Google Docs, Sheets; Apple iWork: Pages, Numbers",
    officeSupport: "Data entry, record keeping, calendar management, phone/email communication",
    softSkills: "Time management, attention to detail, team collaboration, problem-solving, multitasking",
    typingSpeed: "65+ WPM",
    techAdaptability: "Tech-savvy and adaptable to new software",
  },
  projects: [
    {
      name: "TomoPudgy",
      github: "https://github.com/anthonymoon2/TomoPudgy",
      live: "https://tomopudgy.onrender.com/",
      description:
        "A full-stack MERN application helping users track daily food intake and calorie consumption.",
      role: "Back-End Developer",
      skills: "API Integration",
      tools: "Typescript, Node.js, Express.js, MongoDB, API, Apollo Server",
    },
    {
      name: "Find-A-Programmer",
      github: "https://github.com/joshcord99/Find-A-Programmer",
      live: "https://find-a-programmer.onrender.com/",
      description:
        "Connects to the GitHub API allowing employers to search and save candidates.",
      role: "Developer",
      skills: "API Integration",
      tools: "Typescript, React, HTML, CSS",
    },
    {
      name: "Personal-Business-Planner",
      description:
        "A CLI app to manage business employees and roles using PostgreSQL.",
      tools: "Node.js, Inquirer.js, PostgreSQL",
    },
    {
      name: "Personal-README-Generator",
      description:
        "A command-line tool that generates professional README files.",
      tools: "Node.js, Inquirer.js",
    },
  ],
  experience: [
    {
      title: "Software Developer",
      company: "Reality AI",
      location: "New York City, NY",
      date: "Dec 2024 - Present",
      responsibilities: [
        "Managed digital documentation and organized workflows for dev team.",
        "Facilitated team communication using Zoom, Slack, and Google Meet.",
        "Tracked progress using GitHub Issues and managed version control.",
        "Contributed to project planning and documentation updates.",
        "Implemented Vertex AI tools and supported teammates in onboarding.",
      ],
    },
    {
      title: "Fleet Mechanic",
      company: "FedEx Freight",
      location: "Gardena, CA",
      date: "2023 - 2024",
      responsibilities: [
        "Diagnosed and resolved mechanical issues with fleet equipment.",
        "Maintained detailed records for safety and compliance.",
      ],
    },
  ],
  education: [
    {
      degree: "Associate Degree in Computer Science (In Progress)",
      institution: "Long Beach City College",
      location: "Long Beach, CA",
    },
    {
      degree: "Full-Stack Web Development Boot Camp Certificate (Completed)",
      institution: "University of California, Irvine",
      location: "Irvine, CA",
    },
    {
      degree: "High School Diploma (Completed)",
      institution: "Tustin High School",
      location: "Tustin, CA",
    },
  ],
  certifications: [
    "ASE Certified A6 Electrical/Electronic Systems",
    "Automotive and Diesel Technology Degree",
    "Work Smarter with Microsoft Word with Honors Certificate – Microsoft",
    "Work Smarter with Microsoft Excel with Honors Certificate – Microsoft",
  ],
};

export default resumeData;
