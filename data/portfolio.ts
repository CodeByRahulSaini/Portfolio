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
      "instagramEmbed": "<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-permalink=\"https://www.instagram.com/reel/CeBH2yFled6/?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"><div style=\"padding:16px;\"> <a href=\"https://www.instagram.com/reel/CeBH2yFled6/?utm_source=ig_embed&amp;utm_campaign=loading\" style=\" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;\" target=\"_blank\"> <div style=\" display: flex; flex-direction: row; align-items: center;\"> <div style=\"background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;\"></div> <div style=\"display: flex; flex-direction: column; flex-grow: 1; justify-content: center;\"> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;\"></div> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;\"></div></div></div><div style=\"padding: 19% 0;\"></div> <div style=\"display:block; height:50px; margin:0 auto 12px; width:50px;\"><svg width=\"50px\" height=\"50px\" viewBox=\"0 0 60 60\" version=\"1.1\" xmlns=\"https://www.w3.org/2000/svg\" xmlns:xlink=\"https://www.w3.org/1999/xlink\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g transform=\"translate(-511.000000, -20.000000)\" fill=\"#000000\"><g><path d=\"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631\"></path></g></g></g></svg></div><div style=\"padding-top: 8px;\"> <div style=\" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;\">View this post on Instagram</div></div><div style=\"padding: 12.5% 0;\"></div> <div style=\"display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;\"><div> <div style=\"background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);\"></div> <div style=\"background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;\"></div> <div style=\"background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);\"></div></div><div style=\"margin-left: 8px;\"> <div style=\" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;\"></div> <div style=\" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)\"></div></div><div style=\"margin-left: auto;\"> <div style=\" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);\"></div> <div style=\" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);\"></div> <div style=\" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);\"></div></div></div> <div style=\"display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;\"> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;\"></div> <div style=\" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;\"></div></div></a><p style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;\"><a href=\"https://www.instagram.com/reel/CeBH2yFled6/?utm_source=ig_embed&amp;utm_campaign=loading\" style=\" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;\" target=\"_blank\">A post shared by Gobble (@trygobble)</a></p></div></blockquote>"
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