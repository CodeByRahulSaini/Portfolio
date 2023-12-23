// import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import reactnativeicon from "../../assets/icons/reactnativeicon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import yogaicon from "../../assets/icons/yogaicon.svg";
// import instorMockup from "../../assets/img/instor_mockup.webp";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import recommendation1 from "../../assets/img/recommendation1.webp";
import recommendation2 from "../../assets/img/recommendation2.webp";
import recommendation3 from "../../assets/img/recommendation3.webp";
import recommendation4 from "../../assets/img/recommendation4.webp";
import recommendation5 from "../../assets/img/recommendation5.webp";
import recommendation6 from "../../assets/img/recommendation6.webp";
import recommendation7 from "../../assets/img/recommendation7.webp";
import profilepicture from "../img/me3.jpeg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import flowicon from "../../assets/icons/flowicon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import graphqlicon from "../../assets/icons/graphqlicon.svg";
import githubicon from "../../assets/icons/githubicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import jesticon from "../../assets/icons/jesticon.svg";
// import cypressicon from "../../assets/icons/cypressicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import reduxicon from "../../assets/icons/reduxicon.svg";
import websocketicon from "../../assets/icons/websocketicon.svg";
import web3 from "../../assets/icons/web3.svg";
import chatgpt from "../../assets/icons/chatgpt.svg";

import { GoHome, GoPerson, GoMail, GoStack, GoProject , GoSmiley} from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import { TbBrandOpenai } from "react-icons/tb";

// import Imprint from "../../components/Imprint";
// import Privacy from "../../components/Privacy";
export const personalData = {
  email: 'rahul_saini_@outlook.com',
  linkedin: 'https://www.linkedin.com/in/rahul-saini-profile/',
  github: 'https://github.com/CodeByRahulSaini',
  chatgpt: 'https://chat.openai.com/g/g-NESK8QsGG-hellorahul',
} as const;


export const headerIntroData = {
  title: {
    de: "",
    en: "Hi, I'm Rahul",
  },
  subtitle: " ",
  description: {
    de: "",
    en: "With over 6 years of experience in building mobile and web applications, I have worked with numerous startups and companies to develop products across various domains, including Education, SaaS, E-commerce, Travel, Food, Cybersecurity, Music, and Beauty. I am a problem-solver, a quick learner, and I love working with new technologies while sharpening my skills in existing ones.",
  },
  initials: "RS",
  buttons: [
    {
      name: "",
      label: {
        de: "",
        en: "Ask ChatGPT about me",
      },
      link: personalData.chatgpt,
      icon: TbBrandOpenai,
      color: "secondary-btn",
    },
    {
      name: "Contact",
      label: {
        de: "",
        en: "Contact me",
      },
      link: '',
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "",
        en: "My Projects",
      },
      icon: FiGithub,
      link: '',
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Gobble",
    description:"",
    description_EN:
      "Contributed to the development of Gobble, a social group ordering app for discounted meals that achieved 47% MoM growth on revenue, 42% second month retention, and secured $1.6M in funding.",
    tasks: [
      'The entire cart functionality with the ability to apply discounts.',
      'Integrated Firebase analytics into Gobble App to track user activities, uncover user journey insights, and analyze user behavior patterns; leveraged data-driven insights to optimize user experience and increase retention.',
      'Worked on major gobble party feature with real-time operations using Socket.io',
      'Restaurant search along with a map and banners to show promotions.',
      'Payment functionality using Stripe.',
      'Referral feature (utilized deferred deep linking).',
      'Fixed major performance issues in the Gobble app, reducing significant RAM consumption. Its code was originally written by an inexperienced team, so we had to rewrite most of it.',
      'Handled TestFlight builds, Play Store internal testing builds, and utilized Android Studio and Xcode for builds, icons, splash screens, and package linkings.',
      "Managed releases and listings on the Google Play Store and Apple's App Store",
    ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "React Native", icon: htmlicon },
      { name: "Redux", icon: cssicon },
      { name: "GraphQL", icon: cssicon },
      { name: "Firebase", icon: reacticon },
      { name: "Stripe", icon: reacticon },
      { name: "App Store Listing", icon: reacticon },
      { name: "Codepush", icon: reacticon },
      { name: "Node JS", icon: javascripticon },
      { name: "MongoDB", icon: apiicon },
      { name: "AWS", icon: reacticon },
    ],
    // image: tastyMockup,
    // deploymenturl: "",
    // githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Labelcaster",
    description:
      "",
    description_EN:
      "An automated platform for music distribution, contract management, reporting, and payouts between labels and artists.",
    tasks: [
      'Developed various features for artists, labels, admins, and managers in React native app and React Website.',
      'Implemented a Music player for labels and artists to listen songs.',
      'Integrated Payments using Paypal & Github actions for CI/CD.',
      'Implemented responsive web design for cross-device compatibility.',
      'Architected a multi-user single entity system with role-based functionalities.',
      'Integrated DocuSign for dynamic contract management in the platform.',
      'Implemented SendGrid for platform-wide email communication.',
      'Handled API integrations with Spotify, Twitch, and other music platforms for data synchronization.',
      'Managed the MongoDB database, designing efficient data storage and retrieval systems.',
      'Developed Node.js APIs for backend functionality including contract management, distribution, reporting, and payouts.',
    ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "React Native", icon: figmaicon },
      { name: "Redux", icon: figmaicon },
      { name: "Node JS", icon: javascripticon },
      { name: "MongoDB", icon: apiicon },
      { name: "Docusign", icon: apiicon },
      { name: "Paypal", icon: apiicon },
      { name: "Github Actions", icon: apiicon },
      { name: "IAM", icon: apiicon },
      { name: "RBAC", icon: apiicon },
      { name: "CI/CD", icon: apiicon },
      { name: "Git", icon: reacticon },
    ],
    // image: instorMockup,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },

  {
    title: "MyStylist",
    description:
      "",
    description_EN:
      "Create an app allowing users to book hairstylists and salon services, complete with an extensive booking system.",
    tasks:[
      "Led a team of 5 members in developing an app for booking hairstylists and salon services.",
      "Designed and implemented an extensive booking system with a calendar module.",
      "Implemented user authentication and social media logins.",
      "Utilized Redux for state management in the app.",
      "Added Push Notifications using firebase.",
      "Integrated a map feature to show nearby salons.",
    ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "React Native", icon: htmlicon },
      { name: "GraphQL", icon: figmaicon },
      { name: "Node JS", icon: javascripticon },
      { name: "MongoDB", icon: apiicon },
      { name: "App Store Listing", icon: reacticon },
      { name: "Codepush", icon: reacticon },
      { name: "Git", icon: reacticon },
    ],
    // image: instorMockup,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Pwayz",
    description:
      "",
    description_EN:
      "Developed an app that facilitates renting parking spaces, including those in front of houses, personal garages, and similar locations.",
    tasks:[
      "Integrated map for users to easily find nearby available parking spaces.",
      "Implemented booking functionality within the app.",
      "Integrated Stripe for payment processing.",
      "Utilized Redux for efficient state management of the app.",
      "Set up the initial boilerplate for the application's development.",
      "Developed Node.js APIs with MongoDB database"
    ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "React Native", icon: htmlicon },
      { name: "Redux", icon: htmlicon },
      { name: "App Store Listing", icon: reacticon },
      { name: "Codepush", icon: reacticon },
      { name: "Git", icon: reacticon },
    ],
    // image: instorMockup,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "TopperQ",
    description:
      "",
    description_EN:
      "Empowered students to engage in subject-specific quizzes crafted by teachers, complete with a leaderboard for tracking progress and generating detailed reports.",
      tasks:[
        "Enabled students to participate in subject-specific quizzes created by teachers.",
        "Integrated a leaderboard feature for tracking student progress.",
        "Developed functionality for generating detailed reports on quiz performance.",
        "Utilized Redux for state management within the application.",
        "Added functionality for students to play quizzes effectively.",
        "Developed Node.js APIs with MongoDB database"
      ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "React Native", icon: htmlicon },
      { name: "Redux", icon: htmlicon },
      { name: "Node JS", icon: javascripticon },
      { name: "MongoDB", icon: apiicon },
      { name: "App Store Listing", icon: reacticon },
      { name: "Codepush", icon: reacticon },
      { name: "Git", icon: reacticon },
    ],
    // image: instorMockup,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Truesafe",
    description:"",
    description_EN:
      "Collaborated on the development of a cybersecurity training platform tailored for employees, delivering engaging training modules.",
    tasks: [
      "Developed engaging training modules using interactive slides.",
      "Integrated videos, quizzes, and games into the training modules.",
      "Implemented simulated phishing email exercises for practical learning.",
      "Contributed to the creation of comprehensive reporting features.",
      "Crafted an interactive educational game within the platform to enhance hands-on learning of crucial cybersecurity concepts.",
      "Developed Node.js APIs with MongoDB database"
    ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "Typescript", icon: cssicon },
      { name: "Next JS", icon: cssicon },
      { name: "GraphQL", icon: cssicon },
      { name: "Apollo cache", icon: figmaicon },
      { name: "Node JS", icon: javascripticon },
      { name: "Nest JS", icon: apiicon },
      { name: "MongoDB", icon: apiicon },
      { name: "AWS", icon: reacticon },
      { name: "Tailwind", icon: reacticon },

    ],
    // image: silentmoonMockup,
    deploymenturl: "",
    githuburl:"",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  
  {
    title: "VidSpy",
    description:
      "",
    description_EN:
      "Created an advanced YouTube analytics platform enabling creators to monitor their video performance and access their competition's data. The platform offers daily updates through an intuitive dashboard, helping users make informed decisions.",
      tasks:[
        "Worked on creating and maintaining the React.js website for the platform.",
        "Integrated OAuth 2.0 for Google authentication.",
        "Enabled access to competitors data within the platform.",
        "Designed and implemented a daily update feature through an intuitive dashboard.",
        "Developed backend functionalities using Node.js APIs.",
        "Managed data storage and retrieval with MongoDB database.",
        "Utilized YouTube APIs to fetch relevant data for the platform.",
      ],
    technologies: [
      { name: "React", icon: htmlicon },
      { name: "Redux", icon: figmaicon },
      { name: "Youtube/Google APIs", icon: figmaicon },
      { name: "Node JS", icon: javascripticon },
      { name: "Auth2.0", icon: javascripticon },
      { name: "MongoDB", icon: apiicon },
      { name: "Chrome Extension", icon: apiicon },
      { name: "Git", icon: reacticon },
    ],
    // image: instorMockup,
    deploymenturl: "",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  // {
  //   title: "Grail",
  //   description:
  //     "",
  //   description_EN:
  //     "Developed an e-commerce platform specializing in the buying, bidding, and selling of vintage footwear. Implemented a robust bidding system, allowing sellers to choose the highest bidders or propose higher values for their products.",
  //   technologies: [
  //     { name: "React", icon: htmlicon },
  //     { name: "Redux", icon: figmaicon },
  //     { name: "Node JS", icon: javascripticon },
  //     { name: "MongoDB", icon: apiicon },
  //     { name: "HTML", icon: reacticon },
  //     { name: "CSS", icon: reacticon },
  //     { name: "Git", icon: reacticon },
  //   ],
  //   // image: instorMockup,
  //   deploymenturl: "",
  //   githuburl: "",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
  // {
  //   title: "AngelLift",
  //   description:
  //     "",
  //   description_EN:
  //     "Professional drivers for hire to drive impaired individuals and their cars to their home.",
  //   technologies: [
  //     { name: "Ionic", icon: htmlicon },
  //     { name: "Angular", icon: htmlicon },
  //     { name: "Redux", icon: htmlicon },
  //     { name: "App Store Listing", icon: reacticon },
  //     { name: "Git", icon: reacticon },
  //   ],
  //   // image: instorMockup,
  //   deploymenturl: "",
  //   githuburl: "",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
  // {
  //   title: "Kali Mirchi",
  //   description:
  //     "",
  //   description_EN:
  //     "A restaurant management website that empowers restaurant owners to create menus, submenus, and seamlessly handle order payments, streamlining restaurant operations.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "Jquery", icon: javascripticon },
  //     { name: "PHP", icon: reacticon },
  //     { name: "MySQL", icon: reacticon },
  //   ],
  //   // image: instorMockup,
  //   deploymenturl: "",
  //   githuburl: "",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
] as const;

export const liveTickerData = {
  content: {
    de: "",
    en: "Get to Know Me via ChatGPT",
  },
} as const;

export const skillsDataFrontEnd = [
  {
    skillsTitle: "FrontEnd",
    skills: [
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "React Native",
        hash: "#ReactNative",
        icon: reactnativeicon,
        color: "#61DAFB",
      },
      {
        title: "GraphQL",
        hash: "#GraphQL",
        icon: graphqlicon,
        color: "#e535ab",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Redux",
        hash: "#Redux",
        icon: reduxicon,
        color: "#764ABC",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
    ],
  },
] as const;

export const skillsDataBackEnd = [
  {
    skillsTitle: "BackEnd",
    skills: [
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      // {
      //   title: "Express",
      //   hash: "#Express",
      //   icon: [expressicon, expressiconwhite],
      //   color: ["#000000", "#FFFFFF"],
      // },
      // {
      //   title: "GraphQL",
      //   hash: "#GraphQL",
      //   icon: graphqlicon,
      //   color: "#e535ab",
      // },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      // {
      //   title: "MySQL",
      //   hash: "#MySQL",
      //   icon: mysqlicon,
      //   color: "#00546B",
      // }, 
      {
        title: "WebSocket",
        hash: "#WebSocket",
        icon: websocketicon,
        color: "#764ABC",
      }, 


    ],
  },
] as const;

export const skillsDataAlso = [
  {
    skillsTitle: "",
    skills: [
      {
        title: "Web3",
        hash: "#Web3",
        icon: web3,
        color: "#1F3647",
      },
      {
        title: "ChatGPT/OpenAI APIs",
        hash: "#ChatGPT",
        icon: chatgpt,
        color: "#10A37F",
      },
      {
        title: "TDD: Jest, Cypress",
        hash: "#Jest",
        icon: jesticon,
        color: "#99425b",
      },
      // {
      //   title: "React Testing Library",
      //   hash: "#WordPress",
      //   icon: wordpressicon,
      //   color: "#21759B",
      // },
      // {
      //   title: "Cypress",
      //   hash: "#Cypress",
      //   icon: cypressicon,
      //   color: "#69D3A7",
      // },
      {
        title: "CI/CD",
        hash: "#CI/CD",
        icon: githubicon,
        color: "#5c6bc0",
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: awsicon,
        color: "#252f3e",
      },
     

      
      {
        title: "Docker",
        hash: "#Docker",
        icon: dockericon,
        color: "#BDD9D7",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "", en: "Home", hash: "#home", icon: GoHome },
  { de: "", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "", en: "Kudos", hash: "#kudos", icon: GoSmiley },
  { de: "", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  // { de: "", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  // { de: "", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;



export const sideBarRightMail = {
  link: `mailto:${personalData.email}`,
  text: personalData.email,
} as const;

export const sideBarLeftSocials = [
  {
    link: personalData.linkedin,
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: personalData.github,
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: `mailto:${personalData.email}`,
    icon: FiMail,
    altimgname: "mail",
  },
  {
    link: personalData.chatgpt,
    icon: TbBrandOpenai,
    altimgname: "chatgpt",
  },
] as const;

export const quotesData = [
  {
    de: '',
    en: `"We are all now connected by the Internet, like neurons in a giant brain."`,
    author: "Stephen Hawking",
  },
  {
    de: '',
    en: `"The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life."`,
    author: 'Bill Gates'
  },
] as const;

export const aboutMeData = {
  title: "",
  title_EN: "About me",
  description: "",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "",
      description:
        "",
      icon: flowicon,
    },
    {
      title: "",
      description:
        "",
      icon: caricon,
    },
    {
      title: "",
      description:
        "",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Philosopher at Heart",
      description:
        "Beyond the realms of everyday life, I delve into the profound mysteries of existence. Meditation and mindfulness are my sanctuaries; yoga, my journey to inner peace. Reading about philosophy and spirituality helps me connect with the deeper essence of life, finding tranquility in the pursuit of understanding.",
      icon: yogaicon,
    },
    {
      title: "In the Zone of Flow",
      description:
        "Whether I'm coding, cooking, or out for a run, I have the unique ability to lose myself completely in the task at hand. Time ceases to exist as I enter the state of flow, effortlessly moving from one activity to the next. This ability isn't just about focus; it's about finding joy and fulfillment in every moment, no matter the activity.",
      icon: flowicon,
    },
    {
      title: "The Local Gadget Guru",
      description:
        "Since the age of 13-14, I've been the neighborhood's go-to tech expert. Laptops, mobiles, dish TVs, CD players – you name it, I've fixed it. My curiosity knows no bounds, and I revel in the opportunity to explore and understand every gadget's features and possibilities. It's not just about fixing things; it's about unraveling the mysteries they hold.",
      icon: hardwareicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    // {
    //   name: "email",
    //   placeholder: {
    //     de: "Deine E-Mail Adresse",
    //     en: "Your E-Mail",
    //   },
    //   type: "email",
    //   validation: {
    //     de: "Bitte gebe deine Email ein",
    //     en: "Please fill in your email",
    //   },
    //   pattern: "[@]{4}",
    // },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const recommendations = [
{ image : recommendation1 },
{ image : recommendation2 },
{ image : recommendation3 },
{ image : recommendation4 },
{ image : recommendation5 },
{ image : recommendation6 },
{ image : recommendation7 },
] as const;


export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
