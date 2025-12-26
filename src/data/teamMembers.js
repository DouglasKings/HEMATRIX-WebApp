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
import haroldImg from "/assets/images/5.jpeg";

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
    name: "Team Member 2",
    role: "Technical Lead",
    bio: "Expert in cloud infrastructure architecture and system reliability engineering.",
    placeholder: true,
    // image: member2Img,
  },

  {
    id: 3,
    name: "Kato Kenneth",
    role: "Data Engineer",
    placeholder: false,
    image: katoImg,
    contact: {
      phone: "+256 ...",
      email: "...",
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
    id: 5,
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
        role: "Technical Lead",
        period: "2025 - Present",
        desc: "Directing technical strategy and leading development for enterprise-grade digital solutions and secure backend architectures.",
      },
      {
        company: "Sumic IT Solutions Ltd",
        role: "Java Backend Developer",
        period: "2024 - 2025",
        desc: "Key contributor to the EBP (Entrepreneurship Booster Platform). Developed core microservices using Spring Boot, handling data synchronization and user authentication for thousands of platform users.",
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
      "Core Developer - EBP Platform Scaling Project",
      "Excellence in Microservices Architecture",
    ],
  },
];
