import schoolImage from "../images/svem.jpg";
import puImage from "../images/viveka.jpg";
import clgImage from "../images/bit.jpg";

export const Bio = {
  name: "Srashti",
  roles: ["Full Stack Developer.", "CS Engineer.", "Programmer."],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  resume:
    "https://drive.google.com/file/d/18QpY5xqV4IgnMRKO4sENraa4E2VsHikm/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/srashti-r-ba1981294",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },

      {
        name: " Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },

      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "PowerBI",
        image: "https://seeklogo.com/vector-logo/400711/power-bi-microsoft",
      },
      {
        name: "Tableau",
        image: "https://seeklogo.com/vector-logo/400711/power-bi-microsoft",
      },
    ],
  },
  {
    title: "Fundamentals",
    skills: [
      {
        name: "Data Structures and Algorithms",
      },
      {
        name: "Computer Networks",
      },
      {
        name: "DBMS",
      },
      {
        name: "OOP's",
      },
      {
        name: "Operating Systems",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: clgImage,
    school: "Bangalore Institute of Technology, Bangalore",
    date: "2022 - 2026",
    grade: "8.7 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering(Data Science) at Bangalore Institute of Technology, Bangalore. I have completed 5 semesters and have a CGPA of 8.7. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. I am also a part of the Google Developers Student Club (GDSC) at BIT.",
    degree:
      "Bachelor of Engineering - B.E, Computer Science and Engineering(Data Science)",
  },
  {
    id: 1,
    img: puImage,
    school: "Viveka Pre University College, Kota",
    date: "2019 - 2021",
    grade: "98.8%",
    desc: "I completed my class 12  education at Viveka Pre University College, Kota, where I studied Physics,Chemistry,Mathematics and Biology.",
    degree: "Class 12",
  },
  {
    id: 2,
    img: schoolImage,
    school: "Sri Venkataramana English Medium School, Kundapura",
    date: "2018 - 2019",
    grade: "97%",
    desc: "I completed my class 10 education at Sri Venkataramana English Medium School, Kundapura.",
    degree: "Class 10",
  },
];

export const projects = [
  {
    id: 4,
    title: "DevConnect",
    description: [
      "Developed a full-stack web application using Node.js, React.js, Express, and MongoDB to connect developers through a real-time networking platform.",
      "Implemented key features including user authentication with JWT and cookies, profile management, and real-time connection requests (send, accept, reject).",
      "Enabled secure, real-time communication between users with integrated chat functionality for sending and receiving messages.",
    ],
    skills: [
      "Node Js",
      "Express Js",
      "MongoDB",
      "React Js",
      "DaisyUI",
      "HTML",
      "JavaScript",
    ],
    category: "web app",
  },
  {
    id: 3,
    title: "MapMySteps ",
    description: [
      " Built a Single Page Application (SPA) to track visited locations and experiences, featuring interactive map visualization using React Leaflet.",
      "Optimized performance and user experience with Context API, useReducer, React Router, lazy loading, and memoization, resulting in a 10% speed improvement.",
    ],
    skills: ["React Js", "React Router", "React Leaflet", "Context API"],
    category: "web app",
  },
  {
    id: 2,
    title: "Plant Disease Detection & Cure Recommendation System ",
    description: [
      " Developed a deep learning-based application using TensorFlow/Keras, Streamlit, and OpenCV.",
      "Trained a CNN model on 87,000+ plant leaf images across 38 disease categories.",
      "Built an interactive UI for image upload, disease detection, and treatment recommendations.",
      "Optimized image preprocessing, model performance for real-world use.",
    ],
    skills: ["TensorFlow", "CNN", "OpenCV", "Python", "Streamlit"],
    category: "machine learning",
  },
  {
    id: 1,
    title: "E-Commerce Website ",
    description: [
      " Designed and developed a responsive e-commerce website using HTML, CSS, and JavaScript.",
      "Implemented interactive UI components like buttons and modals for better user engagement.",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    category: "web app",
  },
];
