import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ryan Kafka",
  initials: "RJK",
  url: "https://www.google.com",  // TO-DO:  replace with person website's URL when deployed
  location: "Plano, TX",
  locationLink: "https://www.google.com/maps/place/plano",
  description:
    "Software Engineer looking for my next project!",
  summary:
    `A few years ago, I set out to build a career that blends curiosity, teamwork, and a love for 
    making things better. Along the way, I [completed two Computer Science degrees in Aggieland](#education), 
    [worked with DIRECTV on projects that improved operations and support](#experience), 
    and [helped lead a student organization that made a real impact on campus](#involvement). 
    Whether it’s a big project or a small idea, I’m happiest when I’m helping it grow.
    `,
  avatarUrl: "/me.png",


  skills: [
    "C++",
    "Python",
    "C#",
    "Java",
    "R",
    "Jira Align",
    "Tensorflow",
    "scikit-learn",
    "Machine Learning",
    "Agile Development Lifecycle (ADLC)",
  ],


  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],


  contact: {
    email: "ryankafka@devpro.com",
    tel: "+8478300491",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rkafka",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ryan-j-kafka",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/rjksummer",
        icon: Icons.instagram,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/rkafka18",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@rjksummer",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ryankafka@devpro.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  // Industry Experience Section
  work: [
    {
      company: "DIRECTV",
      href: "https://www.directv.com/",
      badges: [],
      location: "Remote",
      title: "IT Operations Intern -- Offers & Decisioning",
      logoUrl: "/directv.png",
      start: "June 2023",
      end: "August 2023",
      description:
        `Supported 6 SAFe scrum teams as liaison to the Release Train Engineer, coordinating PI planning, sprint execution, backlog grooming, and dependency resolution.
        Tracked progress, blockers, and inter team dependencies in Jira Align, enabling data driven adjustments to delivery timelines and improving transparency for affected teams.
        Facilitated daily stand ups, cross team syncs, and documentation of key decisions to streamline communication between product managers, scrum masters, and dependent teams.
        Stepped in as acting Scrum Master during coverage periods, driving backlog prioritization and sprint planning to ensure uninterrupted delivery.
        `,
    },
    {
      company: "DIRECTV",
      badges: [],
      href: "https://www.directv.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/directv.png",
      start: "May 2022",
      end: "August 2022",
      description:
        `I built a proof‑of‑concept machine learning model, mapped out database improvements, and
        presented a proposal for an AI-utilizing 'Next Best Step Predictor' for incoming Technical
        Care calls/cases.
        `,
    },
    {
      company: "Plano Parks & Recreation | TMC",
      href: "https://www.plano.gov/1478/Tom-Muehlenbeck-Recreation-Center/",
      badges: [],
      location: "Plano, TX",
      title: "Software Engineer",
      logoUrl: "/plano.jpg",
      start: "June 2021",
      end: "February 2022",
      description:
        `Responsible for actively monitoring the facility to ensure patron
        safety through taking preemptive, preventative action.
        Trained and Red Cross Certified in CPR, AED, First Aid, Oxygen,
        Waterparks Skills, & Blood-borne Pathogens.
        Communicated regularly with squads of coworkers to
        coordinate total coverage of facility.
        `,
    },
  ],


  education: [
    {
      school: "University of Texas, McCombs School of Business",
      href: "https://www.mccombs.utexas.edu/",
      degree: "Post-Graduate Program in Business Applications of Artificial Intelligence",
      logoUrl: "/ut-mccombs.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Texas A&M University, College of Engineering",
      href: "https://www.tamu.edu/",
      degree: "Master of Computer Science (M.C.S.)",
      logoUrl: "/tamu.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Texas A&M University, College of Engineering",
      href: "https://www.tamu.edu/",
      degree: "B.S. in Computer Science",
      logoUrl: "/tamu.jpg",
      start: "2019",
      end: "2023",
    },
  ],


  projects: [
    {
      title: "blackjack.dll",
      href: "#",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        `After getting Microsoft's certification in C# foundations, 
        I created a terminal-based blackjack game to practice the language.
        `,
      technologies: [
        "C#", 
        ".NET Framework",
      ],
      links: [
        {
          type: "Download",
          href: "#", // TO-DO: add link
          icon: <Icons.download className="size-3" />,
        },
        {
          type: "Source",
          href: "https://www.github.com/rkafka/BlackjackGame/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects-blackjackdll.jpg",
      video:
        "",
    },
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],

  
  hackathons: [
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
  ],
} as const;
