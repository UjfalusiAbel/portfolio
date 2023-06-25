import {
  web,
  mobile,
  backend,
  game,
  reea,
  csharp,
  javascript,
  typescript,
  unity,
  reactjs,
  nodejs,
  mongodb,
  postgres,
  docker,
  git,
  drg,
  adrenaline,
  therapiano,
  sicordia
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: ".Net Backend Developer",
    icon: backend,
  },
  {
    title: "Unity Developer",
    icon: game,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Unity & .Net intern",
    company_name: "REEA",
    icon: reea,
    iconBg: "#383E56",
    date: "June 2021 - August 2021",
    points: [
      "My first position in the software development industry",
      "Creating 3D interactive visuals for webapps with Unity.",
      "Implementing new backend features in .Net projects.",
      "Learning how to work on commercial projects with a team",
    ],
  },
  {
    title: "Unity developer",
    company_name: "REEA",
    icon: reea,
    iconBg: "#383E56",
    date: "June 2022 - September 2022",
    points: [
      "Developing a game in Unity for mobile & PC together with a team",
      "Collaborating with cross-functional teams including designers, artists and other developers to create high-quality product.",
      "Implementing file handling, save/load system, designing and implementing sound engine and randomized procedural generations ",
      "Working on parts of AI, UI functionality, participating in bug fixing and code reviews",
    ]
  }
];

const projects = [
  {
    name: "DRG Grouper",
    description:
      "An application created for medics and other people working in the field for calculating insurance claims. I was responsible for implementing new backend features in .Net for creating statistics.",
    tags: [
      {
        name: ".Net",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: drg,
    link: "https://drgrouper.ro/",
  },
  {
    name: "Adrenaline Dungeon",
    description:
      "A top-down dungeon crawler 2D game made in Unity for mobile and PC about beeing captive in a time loop inside a dungeon. I worked on many parts in the game code, like UI, file handling, randomised generation and AI ",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
    ],
    image: adrenaline,
    link: "https://store.steampowered.com/app/2320340/Adrenaline_Dungeon/",
  },
  {
    name: "Therapiano",
    description:
      "A mobile application which can be used for music therapy, watching in it beautiful drawings and illustrations, while listening to calming piano plays. I created both the Android mobile app and the backend written in C# together with an admin website.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: therapiano,
    link: "https://play.google.com/store/apps/details?id=com.ujfalusi.abel.Therapiano",
  },
  {
    name: "Sicordia",
    description:
      "A complete blog about philosophy subjects, creativity and self-knowledge with useful resources. It was written entirely by me in React and .Net, deployed in a Docker container.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: ".Net",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: sicordia,
    link: "https://sicordia.com/",
  },
];

export { services, experiences, technologies, projects }

