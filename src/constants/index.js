import {
  // mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  // docker,
  fcai,
  carrent,
  jobit,
  tripguide,
  threejs,
  enactus,
    python,
    java,
    cpp,
    c,
    mysql,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "AI Engineer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
    },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Project team leader",
    company_name: "Faculty of computer and artificial intelligence",
    icon: fcai,
    iconBg: "#383E56",
    date: "April 2023 - May 2023",
    points: [
      "Led a team of two computer science students in the development of an online candy webstore called Toffee.",
      "Translated customer and system requirements into robust software design with test driven approach.",
      "Collaborated with team members to design the architecture, define requirements, and allocate tasks for the project.",
      "Developed code using Java in model to code section to support digital repository frameworks and integrate systems with MVC design pattern.",
      "Developed code using Java and other programming languages to support digital repository frameworks and integrate systems with MVC design pattern.",
      "Designed, coded, tested, debugged and documented programs using agile development practices.",
      "Conducted thorough testing and debugging, resolving issues to ensure a smooth user experience.",
      "Successfully deployed the terminal application with exceptional system architecture diagram.",
      "Received positive feedback from the course instructor for the quality of the project and the team's collaboration.",
    ],
  },
  {
    title: "Social media team member",
    company_name: "Enactus Cairo University",
    icon: enactus,
    iconBg: "#E6DEDD",
    date: "December 2022 - Current",
    points: [
      "actively contributed to the social media team for Enactus Cairo University, a student-led entrepreneurial organization focused on creating positive social impact.",
      "Conducted daily updates to social media profiles to boost company's online presence.",
      "Maintained Enactus Cairo social media presence by posting messages, and monitoring responses.",
      "Increased customer engagement through social media.",
      "Managed social media accounts for clients, generating interest for existing and upcoming product or service releases.",
      "Strategized social media campaigns for clients, helping to meet goals and reach untapped potential customers.",
      "Developed social media calendar, which included scheduling email blasts, social media posts, marketing campaigns, and website updates.",
      "Collaborated with team members to develop creative ideas, plan content calendars, and ensure consistent branding and messaging across platforms.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };