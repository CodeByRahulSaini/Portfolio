import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  "hero": {
    "name": "Rahul Saini",
    "title": "Senior React Native Engineer",
    "summary": "Award-winning Senior Software Engineer specializing in React Native, with 8+ years of experience building and scaling high-quality mobile applications across diverse domains including fintech, SaaS, and consumer platforms. Deep expertise in architecture, performance optimization, and creating seamless user experiences across complex systems. Recognized for ownership, problem-solving, and delivering reliable solutions at scale — now evolved into a 10x developer through the effective use of AI to accelerate development and elevate code quality.",
    "location": "Mohali, India",
    "email": "rahul_saini_@outlook.com",
    "phone": "+91 86994 64044",
    "linkedin": "linkedin.com/in/rahul-saini-profile",
    "github": "github.com/CodeByRahulSaini"
  },
  "skills": [
    {
      "category": "Languages",
      "items": ["Javascript", "Typescript", "SQL", "HTML", "CSS"]
    },
    {
      "category": "Frontend & Mobile",
      "items": ["React", "React Native", "GraphQL", "RxDB (Local Storage)", "Redux", "Websockets", "Animations using Reanimated", "Skia", "Performance Profiling & Optimization"]
    },
    {
      "category": "Testing",
      "items": ["Jest", "React Testing Library", "React Native Testing Library", "Detox"]
    },
    {
      "category": "DevOps, Tools & Platforms",
      "items": ["Sentry", "Codepush", "Github Actions (CI/CD)", "Bitrise", "Expo", "TestFlight", "Firebase", "App publishing on Google Play Store & Apple's App Store", "Android Studio", "Xcode", "Git", "Rozenite & React Native DevTools"]
    },
    {
      "category": "Payment Gateways",
      "items": ["Google Pay", "Apple Pay", "Stripe", "Paypal"]
    },
    {
      "category": "Backend & APIs",
      "items": ["REST APIs", "Node JS", "MongoDB", "MySQL"]
    },
    {
      "category": "AI & Productivity Tools",
      "items": ["Github Copilot", "Cursor", "MCP", "Reusable Prompts (Skills, Commands, Rules)"]
    }
  ],
  "experience": [
    {
      "company": "Zeller",
      "role": "Senior Software Engineer",
      "duration": "03/2024 - Present",
      "location": "Australia • Remote",
      "company_description": "A leading Australian fintech for business payments & banking (in AU / UK), a unicorn with a valuation of ~A$1 billion.",
      "bullet_points":[
        "Contributed to the core Zeller App (4.5+ rating), the company’s primary merchant platform used by thousands of businesses across Australia and the UK to serve millions of customers, delivering critical features that power secure payment operations.",
        "Led the end-to-end development of the Invoice feature in Zeller App, leading a team of 5 engineers, ensuring performance, code quality, cross-team alignment (Product, Design, QA), and seamless releases — resulting in 30,000+ invoices sent within the first year after launch.",
        "Worked on building a fully featured POS system for low-end Android POS terminals using GraphQL, subscriptions, cache manipulation, dark-theme and tablet-size compatible responsive UI, and data prefetching; contributed key animations and a custom lightweight navigation system, optimized for low-end hardware to maintain high performance.",
        "Delivered major architectural upgrades by implementing URQL, React Navigation v7, RxDB (local storage), Sentry, and LaunchDarkly feature flags; built reusable internal standards for RxDB, syncing, and replication flows; and documented all key decisions in solution design docs.",
        "Went beyond core responsibilities by introducing impactful development tools and delivering Tech Coffee sessions that improved engineering practices; contributed to hiring through code-challenge reviews, interviews, and onboarding.",
        "Integrated AI into development workflows via reusable prompts and command patterns (GitHub Copilot), automating tests, PRs, and issue resolution—reducing effort from hours/days to minutes and improving team productivity; conducted tech sessions to drive effective AI adoption"
      ]
    },
    {
      "company": "Gobble",
      "role": "Senior Software Engineer",
      "duration": "02/2022 - 12/2023",
      "location": "Singapore • Remote",
      "company_description": "Social-Food Tech Startup Pivoted To Cybersecurity.",
      "bullet_points": [
        "Contributed to the development of a React Native social-food app for Android and iOS, implementing major product features like payments, discounts, loyalty programs, Firebase analytics, notifications, cart management, maps, Sentry crash analytics, deferred deep linking, and animations. It achieved 47% MoM growth in revenue, 42% second-month retention.",
        "Integrated the Stripe payment gateway for card transactions and added Apple Pay and Google Pay, ensuring compliance with Google, Apple, and Stripe guidelines.",
        "Optimized application speed and performance. Resolved critical issues, reducing memory consumption by 60% and enhancing the user experience for live users.",
        "Created a reusable list component, saving significant development time, around 90%, to implement a full-fledged list with loaders, pull-to-refresh, and pagination.",
        "Worked on rolling out apps to both App Stores, managing OTA releases via Codepush, releasing builds on Testflight, and Google Play internal testing for quality assurance.",
        "Implemented Sentry for tracking exceptions, logs, monitoring performance, and sending Slack alerts."
      ]
    },
    {
      "company": "Zenerotech",
      "role": "Software Engineer",
      "duration": "07/2018 - 02/2022",
      "location": "Mohali, India • Hybrid",
      "company_description": "A MNC Serving Clients From The US, UK, And Beyond.",
      "bullet_points": [
        "Developed a SaaS solution to handle the business operations of labels and artists, including contract signing, payouts, distribution, reporting, analytics, and album management.",
        "Co-developed an Open Source React Native NPM package for a payment gateway SDK, addressing a specific need in our internal project where no existing React Native solutions were available at the time.",
        "Conducted code reviews, collaborated on setting code standards, and implemented tools to ensure code quality.",
        "Implemented testing (unit, integration, end-to-end) to ensure the stability of the application.",
        "Worked closely with founders & managers, maintaining clear communications with them about deliveries, status, blockers, tasks, and suggestions."
      ]
    },
    {
      "company": "Igniva Infotech",
      "role": "Software Engineer",
      "duration": "12/2016 - 07/2018",
      "location": "Mohali, India",
      "company_description": "A MNC Founded By 'The Apprentice' UK Contestant Raj Dhonota.",
      "bullet_points": [
        "Worked on React Native apps across the Education, Travel, and Beauty domains while following best practices.",
        "Worked on authentication, social logins, REST APIs, Redux, payment, GraphQL implementation, integration with third-party services such as Firebase, performance optimizations, and app releases.",
        "Customized Google and Apple Maps to match the app's theme, added animations, and utilized marker clustering to display hundreds of markers efficiently.",
        "Converted Figma designs into responsive user interfaces, adhering to Android and Apple's design guidelines, and enhancing user experience with additional animations.",
        "Modified native Android (Java) and iOS Objective-C/Swift code to meet specific project requirements."
      ]
    },
    {
      "company": "CQLsys Technologies",
      "role": "Software Engineer",
      "duration": "02/2015 - 11/2016",
      "location": "Mohali, India",
      "bullet_points": [
        "Worked on AngelLift, #1 designated angel service in the world. Provides ride services to safely transport individuals and their vehicles home; ensuring safe rides for impaired individuals.",
        "Worked on a taxi booking app where users can book nearby taxis by sending requests. If a driver rejects or does not respond within the mer, the request is passed to the next available driver."
      ]
    }
  ],
  "projects": [
    {
      "name": "Zeller App",
      "area": "Fintech",
      "summary": "Zeller App is an all-in-one fintech platform that enables businesses to accept payments, send invoices, manage accounts and cards, and track cash flow from a single mobile application. It integrates POS, banking, and financial reporting into a unified system used by thousands of businesses.",
      "impact": "Contributed to major features of the Zeller App by working on architecture, scalable and responsive UI, subscriptions, and performance optimizations. Implemented monitoring with Sentry, fixed critical bugs, and built complex animations to enhance user experience. Played an active role in planning, estimations, cross-team collaboration, and release processes to ensure smooth and high-quality deliveries.",
      "live_link": "https://apps.apple.com/au/app/zeller/id6444711724",
      "videoUrl": "https://www.youtube.com/embed/SFXUbrObAf8"
    },
    {
      "name": "Zeller Invoices",
      "area": "Fintech",
      "summary": "A comprehensive invoicing solution integrated into the Zeller ecosystem. Allows merchants to create, send, and track professional invoices directly from their Zeller account, with features like automated reminders and real-time payment status updates.",
      "impact": "Chosen as feature lead for Zeller Invoices based on past performance, leading end-to-end development with a team of 5 engineers. Drove architecture, planning, and cross-team collaboration, built scalable solutions, and mentored juniors — resulting in 30,000+ invoices within the first year of launch.",
      "videoUrl": "https://www.youtube.com/embed/ayra0dh3HpQ"
    },
    {
      "name": "Zeller POS Lite",
      "area": "Fintech",
      "summary": "Zeller POS Lite is a lightweight, all-in-one POS and payments solution that allows businesses to manage items, inventory, and transactions while delivering fast, seamless checkout experiences.",
      "impact": "Worked on key features of Zeller POS Lite including GraphQL integrations, subscriptions, cache optimization, data prefetching, dark theme, and tablet-responsive UI. Contributed to building a custom lightweight navigation system to overcome performance limitations on low-end hardware, significantly improving app responsiveness and user experience.",
      "videoUrl": "https://www.youtube.com/embed/9nN-j7is4OM"
    },
    {
      "name": "Gobble",
      "area": "Social Commerce",
      "summary": "A social-food commerce platform that enables group ordering and food gifting. It allows users to discover what their friends are eating, gift meals, and save money through group buys. Built for the Singapore market by ex-Deliveroo executives.",
      "impact": "Contributed to building this React Native social-food app with features like payments, loyalty programs, analytics, and real-time notifications. Improved performance by reducing memory usage by 60%, integrated Stripe with Apple Pay and Google Pay, and streamlined development with reusable components and robust monitoring using Sentry.",
      "live_link": "https://vulcanpost.com/808505/gobble-social-commerce-platform-gift-food-group-buy/",
      "video": "/gobble.mp4"
    },
    {
      "name": "Labelcaster",
      "live_link": "https://labelcaster.com/",
      "area": "SaaS",
      "impact": "Worked on this SaaS platform for labels and artists, delivering features such as contract signing, payouts, distribution, reporting, analytics, and album management. Contributed to planning, cross-team collaboration, and release cycles while taking architecture-level decisions. Led a small team and mentored junior engineers.",
      "summary": "An automated SaaS platform for music distribution, contract management, reporting, and payouts between labels and artists."
    },
    {
      "name": "TopperQ",
      "area": "Education",
      "impact": "Collaborated within a team of 6 engineers to build features for TopperQ, including real-time leaderboards and timed quizzes. Actively participated in planning, cross-team collaboration, and release cycles to deliver engaging and reliable user experiences.",
      "summary": "Empowered students to engage in subject-specific quizzes crafted by teachers, complete with a leaderboard for tracking progress and generating detailed reports."
    }
  ],
  "awards": [
    {
      "title": "Best New Starter",
      "company": "Zeller",
      "description": "Recognized for making a strong impact from day one, contributing significantly to the core app and engineering culture."
    },
    {
      "title": "Orange Day Speaker - Special Mention",
      "company": "Zeller",
      "description": "Presented to 150+ engineers on measuring performance in React Native apps; received a special mention for delivering an outstanding presentation."
    },
     {
      "title": "Best Tech Coffee Session",
      "company": "Zeller",
      "description": "Recognized for conducting a session with live examples on using AI with reusable prompts (tests, PRs, fixes) to automate daily tasks, saving significant time for team members and helping them focus on more important work."
    },
    {
      "title": "Star Employee",
      "company": "Igniva Infotech",
      "description": "Awarded for exceptional performance and dedication."
    },
    {
      "title": "Best Team Project",
      "company": "Igniva Infotech",
      "description": "Led the team in delivering a project that was recognized with the Best Team Project award for excellence in collaborative project delivery."
    },
    {
      "title": "Employee of the Month",
      "company": "CQLsys Technologies",
      "description": "Received this recognition in the first month of employment for outstanding contributions and immediate impact."
    }
  ],
  "recommendations": [
    {
      "name": "Manish Budhraja",
      "designation": "Software Development Engineer, Adobe, San Jose, California, United States.",
      "company": "Adobe",
      "text": "I’ve worked closely with him over the past 1.6 years, sharing the same open office space the majority of the time. Rahul showed excellent technical as well as leadership skills. He keeps on improving. On a personal level, he’s charismatic and well-spoken. I've had pleasure working with him. Wish him all the best."
    },
    {
      "name": "Ashwin Purushottam",
      "designation": "Venture Development Advisor, Antler | ex-McKinsey, Shopee, Deliveroo, United Arab Emirates ",
      "company": "Early-stage Startup",
      "text": "As the non technical founder of an early stage venture backed startup, getting the right engineering talent was a big hurdle. Rahul joined our engineering team of 6 people, and clearly outperformed his peers with a mix of hard work, attention to detail to ensure quality coding, and also thinking outside the box to find new solutions. Further, once we started involving the developers in coming up with new product ideas and researching the market, Rahul would go above and beyond with his efforts and ensure his product suggestions were not only feasible, but were also in line with a clear problem statement he had thought through. Finally, he took time out to mentor new joinees and ensured everyone performed well. Overall a thoughtful, dedicated coder with out-of-the-box solutions and is a team player."
    },
    {
      "name": "Xiu Quan Tan",
      "designation": "AI Platform Services @ GovtechAI, Singapore | ex-Meta",
      "company": "GovtechAI",
      "text": "Rahul has always been a joy to work with. He is one you can depend on to as a teammate when working on a new product, feature or bug. With a curious mind, he often asks critical questions to help the team move forward with the right information. He is also a good team player who is willing to go the extra mile. Given a chance, I'd be happy to work with him again."
    },
    {
      "name": "Megha Sethi",
      "designation": "Senior Software Engineer @ Momos, Singapore",
      "company": "Momos",
      "text": "Rahul is very sincere and responsible towards his work. He has excellent skills in React Native, React js and Node js. We worked together in a project and it's a pleasure to work with him. He is truly an asset for any organisation. Good luck Rahul!!"
    },
    {
      "name": "Lancy Goyal",
      "designation": "Technical Lead, CP AXTRA PUBLIC COMPANY LIMITED, Thailand",
      "company": "CP AXTRA PUBLIC COMPANY LIMITED",
      "text": "It was a pleasure of working with Rahul. We worked together on multiple projects using Node.js, React.js and React Native. He is not only a result driven and loyal perfectionist but also an inspiring professional. He is an innovative, customer focused, achievement oriented and highly organized developer. He is probably one of the smartest software engineers I've ever worked with."
    }
  ],
  "education": [
    {
      "degree": "Computer Engineering (3-year program)",
      "institution": "Government Polytechnic College",
      "location": "Ambala, India",
      "core_areas": "Software Development, Data Structures & Algorithms, Databases, Computer Networks, Operating Systems"
    }
  ],
  "openSource": [
    {
      "title": "rozenite-assets-viewer",
      "description": "A powerful Rozenite plugin that enables developers to browse and preview project assets (images, animations, and videos) directly within React Native DevTools.",
      "link": "https://github.com/CodeByRahulSaini/rozenite-assets-viewer",
      "video": "/rozenite-assets-viewer.mp4"
    },
    {
      "title": "rozenite-graphql-client-devtool",
      "description": "Debug GraphQL operations in React Native with real-time monitoring, cache inspection, and schema exploration. Supported Client: Apollo. Coming Soon: URQL, Relay.",
      "link": "https://github.com/CodeByRahulSaini/rozenite-graphql-client-devtool",
      "video": "/graphql.webm"
    },
    {
      "title": "Drawing app",
      "description": "Built a high-performance React Native drawing app (UI 60 FPS, JS ~60 FPS) using React Native Skia (graphics engine behind Google Chrome and Android), demonstrating that complex, graphics-intensive applications can be built efficiently in React Native.",
      "link": "https://github.com/CodeByRahulSaini/react-native-painting-app",
      "video": "/drawing-app.webm"
    }
  ]
};