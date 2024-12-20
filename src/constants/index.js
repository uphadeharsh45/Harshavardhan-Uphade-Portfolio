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
    carrent,
    jobit,
    tripguide,
    threejs,
    Cpp,
    Django,
    Express,
    Flutter,
    MySQL,
    Python,
    VsCode,
    rml,
    summarizer,
    notebook

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
      title: "Problem Solving",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: Cpp,
    },
    {
      name: "Python",
      icon: Python,
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
      name: "Flutter",
      icon: Flutter,
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
      name: "Django",
      icon: Django,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "MySQL",
      icon: MySQL,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "VsCode",
      icon: VsCode,
    },
    
  ];
  
 
  
  const projects = [
    {
      name: "Route Master",
      description:
        "A comprehensive mobile app to optimize and manage delivery routes with an intuitive map-based interface.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
      ],
      image: rml,
      source_code_link: "https://github.com/uphadeharsh45/RouteMaster",
      link:"",
    },
    {
      name: "iNotebook-online note taker",
      description:
        "Web application that provides users with a convenient way to manage their notes on the cloud.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
       
      ],
      image: notebook,
      source_code_link: "https://github.com/uphadeharsh45/iNotebook",
      link:"",
    },
    {
      name: "Text Summarizer",
      description:
        "A responsive and intuitive web interface where users can get summarized text for long inputs of text.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "hugging face",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/uphadeharsh45/AI-Text-Summarizer",
      project_link:"https://aitextsummarizer-bu2z8pnd.b4a.run/",
    },
  ];
  
  export { services, technologies,  projects };