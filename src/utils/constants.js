// Images & Icons
import {
  FramerImg,
  FigmaImg,
  HTMLImg,
  CSSImg,
  ReactJSImg,
  NodeJSImg,
  ExpressJSImg,
  MongoDBImg,
  ReduxJSImg,
  ApexImg,
  SQLImg,
  PLSQLImg,
  JQueryImg,
  DesktopIcon,
  ProjectCardImg,
  RockPaperScissorsImg,
  PocketNotesImg,
  QuizzieImg,
  ProManageImg,
  FormBotImg,
} from "../assets";

const stacksLists = [
  {
    icon: FramerImg,
    url: "www.framer.com/",
    technology: "Framer",
    usedFor: "Web design",
    details:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development begins. It's invaluable for refining the user experience.",
  },
  {
    icon: FigmaImg,
    url: "www.figma.com/",
    technology: "Figma",
    usedFor: "Web design",
    details:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based approach streamlines the design process.",
  },
  {
    icon: HTMLImg,
    url: "developer.mozilla.org/en-US/docs/Glossary/HTML5",
    technology: "HTML 5",
    usedFor: "Structure and Content",
    details:
      "HTML5 is the backbone of my web design work. I use it to structure content, ensuring that websites are semantically meaningful and accessible. It forms the foundation upon which the visual elements of a site are built.",
  },
  {
    icon: CSSImg,
    url: "developer.mozilla.org/en-US/docs/Web/CSS",
    technology: "CSS 3",
    usedFor: "Visual Styling",
    details:
      "CSS3 is my styling and layout powerhouse. It's instrumental in creating visually appealing websites by controlling everything from fonts and colors to the responsive design that adapts to various screen sizes.",
  },
  {
    icon: ReactJSImg,
    url: "react.dev/",
    technology: "React",
    usedFor: "Dynamic Development",
    details:
      "React is my dynamic web development framework. I apply it to build interactive web applications with rich user interfaces. It's instrumental in creating engaging, responsive, and data-driven web experiences.",
  },
  {
    icon: NodeJSImg,
    url: "nodejs.org/en",
    technology: "Node",
    usedFor: "JavaScript Runtime Environment",
    details:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling server-side scripting. Its event-driven, non-blocking I/O model makes it efficient and ideal for scalable applications, allowing developers to use JavaScript for both client-side and server-side code.",
  },
  {
    icon: ExpressJSImg,
    url: "expressjs.com/",
    technology: "Express",
    usedFor: "Web Application Framework",
    details:
      "Express.js is a minimal and flexible Node.js web application framework providing robust features for web and mobile applications. It simplifies server-side code, handling routes and middleware with ease, and is widely used for building RESTful APIs and web applications due to its efficiency and simplicity.",
  },
  {
    icon: MongoDBImg,
    url: "www.mongodb.com/",
    technology: "MongoDB",
    usedFor: "NoSQL Database",
    details:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling unstructured or semi-structured data. It offers high performance, scalability, and ease of use, supporting a wide range of applications and enabling developers to build and iterate quickly.",
  },
  {
    icon: ReduxJSImg,
    url: "redux.js.org/",
    technology: "Redux",
    usedFor: "State management Library",
    details:
      "Redux is a predictable state management library for JavaScript applications, commonly used with React. It enables centralized storage of application state, making state changes predictable through actions and reducers. This simplifies debugging and enhances maintainability, especially in complex applications with shared state across multiple components.",
  },
  {
    icon: ApexImg,
    url: "apex.oracle.com/",
    technology: "Oracle APEX",
    usedFor: "Low-code Development Platform",
    details:
      "Oracle APEX (Application Express) is a low-code development platform that enables users to create and deploy responsive web applications quickly. It leverages SQL and PL/SQL, allowing developers to build applications with minimal coding and effort while ensuring scalability and security.",
  },
  {
    icon: SQLImg,
    url: "www.oracle.com/in/database/technologies/appdev/sql.html",
    technology: "SQL",
    usedFor: "Structured Query Language",
    details:
      "SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It enables users to perform operations such as querying, updating, and managing data.",
  },
  {
    icon: PLSQLImg,
    url: "www.oracle.com/in/database/technologies/appdev/plsql.html",
    technology: "PL/SQL",
    usedFor: "Procedural Language",
    details:
      "PL/SQL (Procedural Language/SQL) is Oracle's extension of SQL that combines SQL with procedural programming features. It allows developers to create complex scripts, stored procedures, and triggers, enhancing database functionality with control structures, error handling, and modular programming capabilities.",
  },
  {
    icon: JQueryImg,
    url: "jquery.com/",
    technology: "JQuery",
    usedFor: "JavaScript DOM Manipulation",
    details:
      "jQuery is a fast, lightweight JavaScript library that simplifies HTML document traversing, event handling, and animation. It provides an easy-to-use API that works across multiple browsers, making it easier to manipulate the DOM and handle AJAX requests.",
  },
];

const experienceList = [
  {
    icon: DesktopIcon,
    company: "Buchanan Technologies India LLP.",
    position: "Associate Software Engineer",
    duration: "June 2022 - June 2024",
    description:
      "I am part of a 5-member team tasked with rebuilding an on-site tool using Oracle APEX. My role involves both frontend and backend development, focusing on implementing custom functionalities tailored to client needs. Working closely with the backend team, I've successfully integrated various modules from the existing tool into APEX, overcoming customization challenges. Our project aims to create an intuitive ERP system, seamlessly extending EBS and supporting crucial aspects of the engineering business, including part creation, inquiries, contracts, and bill of materials management.",
  },
];

const projectsList = [
  {
    id: "kchavda#0001",
    imgPath: RockPaperScissorsImg,
    projectType: "Web Application",
    projectDescription: "Rock Paper Scissors: Classic hand-gesture game of strategy and luck.",
    projects: [
      {
        title: "Interactive Rock-Paper-Scissors Game",
        liveWebsite: "rock-paper-scissors-five-kappa.vercel.app/",
        duration: "1 Weeks",
        category: "Web Application",
        sections: [
          {
            heading: "Innovation in Web Development",
            content:
              "Our Rock-Paper-Scissors game, developed using HTML, CSS, and JavaScript, exemplifies our commitment to creating engaging and dynamic user experiences. The project showcases clean, modular code and responsive design, ensuring a smooth and enjoyable experience across all devices.",
          },
          {
            heading: "Strategic Planning and Execution",
            content:
              "The project began with a clear focus on structure and functionality. The user interface was meticulously designed to provide an intuitive and seamless experience, setting the foundation for implementing the core game logic.",
          },
          {
            heading: "Engaging User Experience",
            content:
              "Players can dive into the game with ease, selecting their move—rock, paper, or scissors—through a user-friendly interface. The game features a real-time score tracker and dynamically generated results after each round, ensuring fair and unpredictable gameplay. The straightforward UI makes it accessible and enjoyable for players of all ages.",
          },
          {
            heading: "Commitment to Excellence",
            content:
              "This project reflects our systematic approach to web development, combining innovative design with robust functionality. By prioritizing user engagement and experience, we’ve created a game that not only entertains but also demonstrates our expertise in delivering high-quality digital solutions.",
          },
        ],
      },
    ],
  },
  {
    id: "kchavda#0002",
    imgPath: ProManageImg,
    projectType: "Web Application",
    projectDescription: "Pro Manage: Task management web application for tracking and organizing projects.",
    projects: [
      {
        title: "Pro Manage Task Management Tool",
        liveWebsite: "pro-manage-frontend-alpha.vercel.app/",
        duration: "3 Weeks",
        category: "Web Application",
        sections: [
          {
            heading: "Primary Goal and Application Design",
            content:
              "The primary goal of the Pro Manage project was to create a comprehensive task management tool that enhances productivity and collaboration within teams. The application was designed to simplify the process of creating, assigning, and tracking tasks while providing a user-friendly interface for both task owners and assignees. By offering features like priority setting, due dates, and public task views, Pro Manage aims to streamline project workflows, improve communication, and ensure transparency and accountability within teams.",
          },
          {
            heading: "Structured Development Approach",
            content:
              "For development, I began by breaking the functionalities into smaller fragments and created the API using Node.js and Express. After completing the backend, I designed the pages and created small components from large pages to reduce code complexity. This approach ensured a modular and maintainable codebase while delivering a robust application.",
          },
          {
            heading: "Comprehensive Task Management Features",
            content:
              "I've developed Pro Manage as a robust task management platform featuring detailed task creation with checklists for thorough task breakdown. Each task includes priority levels and due dates for effective tracking and completion. Users can collaborate by assigning tasks to others within the project. The personalized dashboard provides an overview of assigned tasks, their statuses, priorities, and deadlines. A public view page offers read-only access to task details for sharing with stakeholders. Pro Manage includes user management features for role control and permissions, ensuring security. It sends notifications for task assignments and due dates to aid task prioritization. Additionally, there's an analytics page displaying task counts by priority and status for owners to track project progress efficiently.",
          },
          {
            heading: "Commitment to Productivity and Collaboration",
            content:
              "Pro Manage reflects a commitment to enhancing team productivity and collaboration through effective task management. By integrating features designed to simplify task creation, tracking, and sharing, the application supports efficient project workflows and transparent communication. The inclusion of detailed analytics and user management further ensures that teams can operate smoothly and stay on top of project progress.",
          },
        ],
      },
    ],
  },
  {
    id: "kchavda#0003",
    imgPath: FormBotImg,
    projectType: "Web Application",
    projectDescription: "Form Bot: Build interactive chatbots with customizable forms.",
    projects: [
      {
        title: "User-Friendly Chatbot Creation Platform",
        liveWebsite: "form-bot-frontend.vercel.app/",
        duration: "3 Weeks",
        category: "Web Application",
        sections: [
          {
            heading: "Project Overview and Objectives",
            content:
              "Develop a user-friendly platform for creating and customizing chatbots through an intuitive UI. The platform will feature two main types of elements: Bubbles for chatbot questions, including Text, Image, Video, and GIF, and Inputs for user responses, including Text, Number, Email, Phone, Date, Rating, and Button. The goal is to make chatbot creation accessible without coding, ensuring dynamic and engaging interactions.",
          },
          {
            heading: "Development Process and Technologies",
            content:
              "Gathered requirements and established the backend with MongoDB and Mongoose. Essential npm packages were installed, and backend models were planned using Excalidraw. Environment variables were created, and APIs were implemented for user registration, login, forms, form fields, user responses, and folders. The frontend was developed using React, creating components for chatbot creation, chat flow design, and user interaction. Backend APIs were integrated for dynamic data handling and real-time updates, ensuring a user-friendly experience.",
          },
          {
            heading: "Core Features and Functionality",
            content:
              "The platform features user authentication with registration and login, allowing users to create chatbots using interactive elements like bubbles (text, image, video, GIF) and inputs (text, number, email, phone, date, rating, button). It includes form management, user response handling, folder organization, and real-time updates. The user-friendly interface supports seamless interaction and management, making chatbot creation intuitive and accessible.",
          },
          {
            heading: "Commitment to User Experience and Innovation",
            content:
              "This project reflects a commitment to enhancing user experience and innovation in chatbot creation. By providing a platform that simplifies the process of building dynamic chatbots and integrates interactive elements, it aims to make advanced chatbot functionalities accessible to users without coding expertise. The focus on real-time updates and intuitive design ensures engaging and efficient interactions.",
          },
        ],
      },
    ],
  },
  {
    id: "kchavda#0004",
    imgPath: PocketNotesImg,
    projectType: "Web Application",
    projectDescription: "Pocket Notes: Simple tool for organizing and managing notes.",
    projects: [
      {
        title: "User-Friendly Notes Web Application",
        liveWebsite: "pocket-notes-topaz.vercel.app/",
        duration: "2 Weeks",
        category: "Web Application",
        sections: [
          {
            heading: "Mastering the Fundamentals of React JS",
            content:
              "This project is a user-friendly notes application developed using React JS, focusing on simplicity and engagement. As an introductory project, it serves to familiarize developers with the core concepts of React, demonstrating the power of modular design and component-based architecture.",
          },
          {
            heading: "Systematic Approach to Development",
            content:
              "The development process began by breaking down the project into smaller, manageable modules. Each feature was carefully identified and mapped to specific React components, ensuring a structured and efficient workflow. This modular approach allowed for the seamless integration of all desired functionalities.",
          },
          {
            heading: "Streamlined User Experience",
            content:
              "The application allows users to effortlessly create notes by providing a title and selecting a color for the badge. Once created, these notes can be organized into groups, enabling better management and easy retrieval. The intuitive interface ensures that users can access and manage their notes with ease, making the application both practical and engaging.",
          },
          {
            heading: "Commitment to Simplicity and Functionality",
            content:
              "This notes web application reflects a balanced approach to design and functionality, emphasizing user engagement and simplicity. By focusing on the fundamentals of React JS, the project showcases how powerful tools can be utilized to create effective, user-centric digital solutions.",
          },
        ],
      },
    ],
  },
  {
    id: "kchavda#0005",
    imgPath: QuizzieImg,
    projectType: "Web Application",
    projectDescription: "Quizzie: Create engaging quizzes and interactive polls easily.",
    projects: [
      {
        title: "Full-Stack Quiz and Poll Web Application",
        liveWebsite: "quizzie-mauve.vercel.app/",
        duration: "2 Weeks",
        category: "Web Application",
        sections: [
          {
            heading: "Delivering Seamless Audience Engagement",
            content:
              "This project is a full-stack web application designed for creating quizzes and polls, featuring an intuitive user interface and comprehensive analytics. The application enables users to easily share activity links, fostering seamless engagement with their audience and providing insightful data on participation and performance.",
          },
          {
            heading: "Structured Development Approach",
            content:
              "The backend was meticulously established using Node.js, structured into user and activity modules. Dedicated controllers were employed to ensure efficient data flow and seamless operation. On the frontend, the codebase was organized into distinct components and pages, with a strong focus on UI design and functionality. The entire system underwent thorough testing to guarantee reliability and performance.",
          },
          {
            heading: "Comprehensive Features for Users and Participants",
            content:
              "Key functionalities include user registration and login, activity creation, and easy sharing of quizzes and polls. The application supports customization of activities, allowing users to create text or image-based questions, designate correct answers for quizzes, and set optional timers for questions. Participants enjoy an interactive experience with real-time performance results, while users gain access to detailed analytics, including impressions and question-wise insights.",
          },
          {
            heading: "Commitment to Excellence in UI/UX and Analytics",
            content:
              "This project exemplifies our commitment to creating user-centric applications that combine intuitive design with powerful functionality. By offering comprehensive analytics and customization options, the quiz and poll application not only engages audiences but also provides users with valuable insights into their activities. This project is a testament to our ability to deliver full-stack solutions that drive user engagement and satisfaction.",
          },
        ],
      },
    ],
  },
];

export { stacksLists, experienceList, projectsList };
