/* 
  ═══════════════════════════════════════════════════════════════════
  TEAM MEMBERS DATA
  Central data file for all team member information
  Updated: December 2025
  ═══════════════════════════════════════════════════════════════════
*/

// Import team member images
import douglasImg from "/assets/images/me.jpg";
import kennethImg from "/assets/images/2.jpeg";
import katoImg from "/assets/images/3.jpeg";
import nasurudinImg from "/assets/images/7.jpeg";
import haroldImg from "/assets/images/5.jpeg";
import ayesigaImg from "/assets/images/6.jpg";
import AèlisImg from "/assets/images/8.jpeg";

export const teamMembers = [
  {
    id: 1,
    name: "Kenneth Henry Male",
    role: "Director & Founder",
    placeholder: false,
    image: kennethImg,

    contact: {
      phone: "+256 779 413 882",
      email: "info@hematrikan.com",
      location: "Kampala, Uganda",
      linkedin: "https://www.linkedin.com/in/male-henry-kenneth/",
      portfolio: "https://hematrikan.com",
    },

    bio: "Kenneth Henry Male is the Director of HEMATRIKAN INNOVATION LIMITED, a technology-driven company specializing in cloud computing, cybersecurity, information systems, logistics, procurement, and digital capacity building. With a strong background in ICT, systems security, and enterprise technology solutions, he provides strategic leadership focused on innovation, trust, and sustainable digital transformation. As a passionate advocate for skills development and digital inclusion, Kenneth has played a key role in mentoring students and professionals, supporting technology education in universities and training institutions, and driving innovation-focused programs aimed at empowering youth and organizations across Uganda and the region.",

    // Leadership philosophy - unique to Kenneth
    philosophy:
      "Technology should not only innovate, but also protect, empower, and earn trust.",

    finalSlogan: "Innovating Technology & Securing Trust",

    // Core areas of expertise - unique to Kenneth
    expertise: [
      "Cloud Computing & Infrastructure Solutions",
      "Cybersecurity & Information Assurance",
      "Information Systems & Digital Transformation",
      "ICT Training, Capacity Building & Mentorship",
      "Technology Consultancy & Project Leadership",
      "Procurement, Logistics & Enterprise Solutions",
    ],

    skills: [
      "Cloud Architecture",
      "Cybersecurity",
      "Digital Transformation",
      "ICT Training",
      "Project Management",
      "Enterprise Solutions",
      "Information Security",
      "Strategic Planning",
      "Team Leadership",
      "Technology Consultancy",
      "Systems Security",
      "Business Development",
    ],

    experience: [
      {
        company: "HEMATRIKAN INNOVATION LIMITED",
        role: "Director & Founder",
        period: "2025 - Present",
        desc: "Leading strategic vision and operations for a technology company specializing in cloud computing, cybersecurity, and digital transformation. Driving innovation-focused programs and building partnerships across Uganda and the East African region. Overseeing logistics, procurement, and enterprise technology solutions for diverse clients.",
      },
      {
        company: "ISBAT University",
        role: "Assistant Lecturer",
        period: "2015 - Present",
        desc: "Delivered comprehensive training in cloud technologies, cybersecurity practices, and information systems to hundreds of students and professionals. Mentored emerging tech talent and supported technology education across multiple universities and training institutions throughout Uganda.",
      },
    ],

    education: [
      {
        degree: "Bachelor's Degree in Information Technology",
        school: "Uganda Christian University",
        //year: "2015",
      },
    ],

    awards: [
      "Founded HEMATRIKAN INNOVATION LIMITED - Leading Tech Innovation in Uganda",
      "Trained and Mentored 500+ Students and Professionals in ICT",
      "Successfully Led Multiple Digital Transformation Projects Across East Africa",
      "Community Recognition for Youth Empowerment Through Technology",
    ],

    languages: ["English (Fluent)", "Luganda (Native)"],
  },

  {
    id: 2,
    name: "Ayesiga Christopher",
    role: "Senior Cybersecurity & Forensics Lead",
    placeholder: false,
    image: ayesigaImg,
    //imagePosition: "center 10%",
    contact: {
      email: "info@cpinfologlegacy.com",
      location: "Kampala, Uganda",
      linkedin: "https://www.linkedin.com/in/ayesiga-christopher/", // Update with actual link if available
    },
    bio: "With over 9 years in the field of Cybersecurity, Ayesiga Christopher is a dedicated expert in digital forensics and information security. He bridges the gap between academia and industry, focusing on malware analysis, incident response, and compliance standards. His research contributes significantly to the field of memory forensics and IoT network security.",
    skills: [
      "Digital Forensics",
      "Malware Analysis",
      "Incident Response",
      "Information Security Management",
      "Machine Learning (AWS Academy)",
      "Network Security (CNSS)",
      "Digital Evidence Handling",
      "Academic Research",
    ],
    experience: [
      {
        company: "CP InfoLog Legacy (CPIL)",
        role: "Senior Cybersecurity Analyst / Technical Manager",
        period: "2019 - Present",
        desc: "Directing technical security operations and digital forensic investigations. Implementing expert-driven risk management and pioneering innovative cyber resilience solutions for organizations across Africa.",
      },
      {
        company: "ISBAT University",
        role: "Assistant Lecturer",
        period: "2024 - Present",
        desc: "Lecturing on specialized topics in Digital Forensics and Information Security, shaping the next generation of security professionals.",
      },
      {
        company: "Uganda Police Force Headquarters",
        role: "Forensic Internee",
        period: "2017",
        desc: "Gained hands-on experience in digital evidence collection and forensic analysis within the national security framework.",
      },
    ],
    education: [
      {
        degree: "Master's Degree in Digital Forensics & Information Security",
        school: "National Forensic Sciences University, India",
        year: "2023",
      },
      {
        degree: "B.Sc. in Computer Security & Forensics",
        school: "UTAMU",
        year: "2019",
      },
    ],
    awards: [
      "Certified Network Security Specialist (CNSS)",
      "Published Researcher: 'Detecting API Hooking in Memory Forensics'",
      "Former Guild President - UTAMU (2018-2019)",
    ],
  },

  {
    id: 3,
    name: "Kato Kenneth",
    role: "Data Engineer",
    placeholder: false,
    image: katoImg,
    contact: {
      phone: "+256779190915",
      email: "katokeneth@outlook.com",
      location: "Kampala, Uganda",
      linkedin: "#",
    },
    bio: "Data Engineer passionate about building secure, scalable ETL pipelines with Python, SQL, Airflow, and Dagster. Experienced in leveraging IBM data tools and Apache frameworks to transform raw data into actionable insights, I thrive on solving complex problems with practical, reusable solutions.",
    skills: [
      "Python",
      "SQL",
      "Apache Airflow",
      "Dagster",
      "ETL Pipelines",
      "IBM Data Tools",
      "Apache Spark",
      "Data Modeling",
    ],
    experience: [
      {
        company: "Information Needed",
        role: "Data Engineer",
        period: "Present",
        desc: "Building and optimizing scalable data architectures and transformation pipelines.",
      },
      {
        company: "ISBAT University",
        role: "Assistant Lecturer",
        period: "2015 - Present",
        desc: "Delivered comprehensive training in C programming, Version Control, and DevOps to hundreds of students and professionals. Mentored emerging tech talent and supported technology education across multiple universities and training institutions throughout Uganda.",
      },
    ],

    languages: ["English (Fluent)", "Luganda (Native)"],
  },
  {
    id: 4,
    name: "Kibwika Nasurudin Bashir",
    role: "Assistant Lecturer & Technical Trainer",
    placeholder: false,
    image: nasurudinImg,
    contact: {
      phone: "+256 701 603 731 ",
      email: "nass.aklieve@gmail.com",
      location: "Kampala, Uganda",
      linkedin: "https://www.linkedin.com/in/male-henry-kenneth/",
    },
    bio: "Mr. Kibwika Nasurudin Bashir is a highly experienced IT professional with over 10 years of extensive experience in university, corporate, and career institution training. He has a profound understanding of various technologies and has taught diverse groups including graduates, diplomats, and corporate professionals in multi-cultural environments. Outside of technology, he is a dynamic individual who serves as the Sports Coordinator at ISBAT University, bringing a high level of energy and effective multi-tasking to the team.",
    skills: [
      "Software Engineering",
      "Database Systems",
      "Information Systems Management",
      "Modern Training Methodologies",
      "Corporate Training",
      "Project Development",
      "Multicultural Communication",
      "Sports Coordination",
    ],
    experience: [
      {
        company: "ISBAT University",
        role: "Lecturer & Sports Coordinator",
        period: "2012 - Present",
        desc: "Delivering academic lectures in Information Technology, managing student development programs, and overseeing university-wide sports activities.",
      },
      {
        company: "Aptech Computer Education",
        role: "Academic Faculty",
        period: "2009 - 2012",
        desc: "Responsible for technical curriculum delivery and student career development in software engineering and systems management.",
      },
    ],
    education: [
      {
        degree: "MSc. in Information Technology (MSCIT)",
        school: "Specialized Post-Graduate Institution",
      },
      {
        degree: "Bachelors of Science in Information Technology",
        school: "Recognized University",
      },
      {
        degree: "Advanced Diploma in Software Engineering (ADSE)",
        school: "Professional Technical Institute",
      },
      {
        degree: "Diploma in Information System Management (DISM)",
        school: "Professional Technical Institute",
      },
    ],
    awards: [
      "Author: Article in Database Systems and Information Systems",
      "Sports Coordinator - ISBAT University",
      "10+ Years of Academic Excellence Recognition",
    ],
    languages: ["English (Fluent)", "Luganda (Native)"],
  },
  {
    id: 5,
    name: "Douglas Kings Kato",
    role: "Full Stack Developer",
    placeholder: false,
    image: douglasImg,

    contact: {
      phone: "+256 701 430 234",
      email: "douglaskings2@gmail.com",
      location: "Kampala, Uganda",
      linkedin: "https://www.linkedin.com/in/douglas-kings/",
      portfolio: "https://douglas-kings-kato-portfolio.vercel.app/",
    },

    bio: "Full Stack Developer with expertise in Java Spring Boot microservices, React.js, and database optimization. Proven track record building scalable backend systems including award-winning USSD-integrated platforms serving underserved communities. Combines 5+ years of ICT education experience with hands-on software development, delivering user-centric solutions in Agile environments. Passionate about leveraging technology to solve real-world problems while mentoring emerging tech talent.",

    skills: [
      "Java Spring Boot",
      "Microservices",
      "React.js",
      "MySQL / PostgreSQL",
      "USSD Integration",
      "RESTful APIs",
      "Docker",
      "Git / GitHub",
      "Python",
      "HTML5/CSS3",
      "Adobe Creative Suite",
    ],

    languages: [
      "English (Fluent)",
      "German (A1 - Goethe-Zentrum)",
      "Luganda (Native)",
    ],

    experience: [
      {
        company: "Sumic IT Solutions Ltd",
        role: "Full Stack Developer",
        period: "Oct 2025 - Present",
        desc: "Core developer for the 'Entrepreneurship Booster Platform' (Woord en Daad / EU Funded Project). Architected backend using Spring Boot microservices. Implemented USSD gateway APIs reaching 50,000+ rural users. Executed a migration from MySQL to PostgreSQL to optimize database performance for a 100K+ user base.",
      },
      {
        company: "Field English School (Wuhai, China)",
        role: "ICT Teacher & Multimedia Designer",
        period: "Sep 2019 - Jan 2023",
        desc: "Taught English & ICT curriculum covering programming fundamentals to 300+ students. Created multimedia educational content improving engagement by 40%. Managed computer lab infrastructure for 500+ student international school.",
      },
      {
        company: "Heritage / ISU / Kings International",
        role: "ICT Teacher & Multimedia Designer",
        period: "Jan 2017 - Sep 2019",
        desc: "Oversaw curriculum development for (I)GCSE and A-Level. Mentored students in web development projects. Increased school digital presence by 60% through marketing material design.",
      },
    ],

    education: [
      {
        degree: "B.Sc. in Applied Information Technology",
        school: "ISBAT University, Kampala",
        year: "Jan 2027 (Expected)",
      },
      {
        degree: "German Language Course (Level A1)",
        school: "Goethe-Zentrum Kampala",
        year: "July 2025 - Aug 2025",
      },
    ],

    awards: [
      "1st Place Winner - Multi-University Hackathon (Sep 2025)",
      "Galactic Problem Solver - NASA International Space Apps Challenge (Oct 2024)",
      "Certificate of Participation - EU-Funded Hackathon",
    ],
  },

  {
    id: 6,
    name: "Harold",
    role: "Java Backend Developer",
    placeholder: false,
    image: haroldImg,

    // This frames the face perfectly by ignoring the ceiling
    imagePosition: "center 20%",

    contact: {
      location: "Kampala, Uganda",
      linkedin: "#",
      email: "info@hematrikan.com",
    },

    bio: "Expert Java Backend Developer with a deep focus on cloud infrastructure and system reliability. Harold played a pivotal role as a core developer for the Entrepreneurship Booster Platform (EBP), architecting high-performance microservices and ensuring seamless backend integration for large-scale user bases. He is passionate about writing clean, maintainable code and optimizing server-side performance.",

    skills: [
      "Java Spring Boot",
      "Backend Architecture",
      "Microservices",
      "Cloud Infrastructure",
      "System Reliability Engineering",
      "MySQL",
      "RESTful APIs",
      "Docker",
    ],

    experience: [
      {
        company: "HEMATRIKAN INNOVATION LIMITED",
        role: "Java Backend Developer",
        period: "2025 - Present",
        desc: "Developing enterprise-grade digital solutions and secure backend architectures.",
      },
      {
        company: "Sumic IT Solutions Ltd",
        role: "Java Backend Developer",
        period: "2024 - 2025",
        desc: "Key contributor to the EBP (Entrepreneurship Booster Platform).",
      },
    ],

    education: [
      {
        degree: "B.Sc. in Applied Information Technology",
        school: "ISBAT University",
      },
    ],

    languages: ["English (Fluent)", "Luganda (Native)"],

    awards: [
      "Java Developer - EBP Platform Scaling Project",
      "Excellence in Microservices Architecture",
    ],
  },

  {
    id: 7,
    name: "Aèlis",
    role: "Data Analyst, Ai engineer",
    placeholder: false,
    image: AèlisImg,

    // This frames the face perfectly by ignoring the ceiling
    //imagePosition: "center 20%",

    contact: {
      location: "Kampala, Uganda",
      linkedin: "www.linkedin.com/in/alice-namagembe-18b2b22a1",
      email: "info@hematrikan.com",
    },

    bio: "Alice Namagembe is a data analyst with a strong foundation in Artificial Intelligence and Machine Learning. My expertise lies in transforming raw data into actionable insights through data cleaning, statistical analysis, and visualization. I am passionate about responsible AI, data quality, and empowering communities through technology.",

    skills: [
      "Power bi training",
      "Aws",
      "Azure",
      "SQL",
      "Data cleaning",
      "Tableau",
      "Python",
      "R",
    ],

    experience: [
      {
        company: "HEMATRIKAN INNOVATION LIMITED",
        role: "Data Analyst, Ai engineer",
        period: "2025 - Present",
        desc: "Developing enterprise-grade digital solutions and secure backend architectures.",
      },
      {
        company: "Sumic IT Solutions Ltd",
        role: "Frontend Developer",
        period: "2024 - 2025",
        desc: "Key contributor to the EBP (Entrepreneurship Booster Platform), developing frontend applications.",
      },
    ],

    education: [
      {
        degree: "B.Sc. in Artificial Intelligence",
        school: "ISBAT University",
      },
    ],

    languages: ["English (Fluent)", "Luganda (Native)"],
  },
];
