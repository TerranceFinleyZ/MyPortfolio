import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js & C# Developer",
      company_name: "FreeLance",
      icon: meta,
      iconBg: "#383E56",
      date: "May 2021 to Present",
      points: [
        "Developing and maintaining web applications using React.js, C# and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "My github: https://github.com/TerranceFinleyZ"
      ],
    },
    {
      title: "Operations Manager",
      company_name: "VXI Global Solutions",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "August 2020 - May 2021",
      points: [
        "Created a Sales-maxing-workflow (S.M.W) that fast-tracked VXI’s turnaround from a history of multiyear losses to sustainable profitability within 6 months in sales",
        "Lead Six Team Leads (TL) that supervise 30 Agents each, on the call Floor that reduced Customer Retention by 20% while catapulting profit, productivity and quality metrics by 65%, 85% and 45%, respectively",
        "Implemented point system that minimized wasted time off phones and maximized production yields to our company going from 15th to 3rd state wide in sales and rentention",
        "VXI info: https://vxi.com/."
      ],
    },
    {
      title: "Security Guard",
      company_name: "Omega Protective Services",
      icon: meta,
      iconBg: "#383E56",
      date: "sep 2019 - August 2020",
      points: [
        "Circulates through buildings, Hotels and Apartments with 5k+ residences looking for disturbances, safety hazards, and illegal activity",
        "Responds to incidents and emergencies in accordance with corporate security protocols",
        "Completes all required paperwork at the end of each shift, including activity and incident reports",
        "OPS info: https://www.omegaprotectivesvcs.com/.",
      ],
    },
    {
      title: "Corporal",
      company_name: "Nebraska Department of Correctional Services",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2015 - September 2019",
      points: [
        "Supervise the daily activities of 600+ inmates by restraining attempts of violence, enforcing security procedures, conducting daily safety audits, and reporting any alarming occurrences",
        "Inspect conditions of gates, grills, and window bars of over 300 cells and perform periodic patrols of work areas to ensure the integrity of the institution and prevent assaults on staff or other prisoners",
        "Instruct detainees to keep common areas clean and supervise the distribution of clothing and personal items",
        "Supervised some of the worlds Dangrouse Gangs and Criminals on a daily bases",
        "TSCI & NSP: https://corrections.nebraska.gov/facilities/tecumseh-state-correctional-institution"
      ],
    },
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