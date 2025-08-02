import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Code,
  Star,
  ArrowRight,
  Filter,
  X,
} from "lucide-react";
import ewallet from "../assets/ewallet.png";
import movxtar from "../assets/movxtar.png";
import pizza from "../assets/pizza.png";

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectSection = document.getElementById("projects");
    if (projectSection) {
      observer.observe(projectSection);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ["All", "Web App", "Mobile App", "UI/UX", "API"];

  const projects = [
    {
      id: 1,
      title: "Movxtar Ticketing App",
      description:
        "ModernTicket booking platform with React,Go, and PostgreSQL. Features include real-time inventory, payment integration, and admin dashboard.",
      longDescription:
        "A comprehensiveTicket booking solution built with modern technologies. Features include user authentication, shopping cart, payment processing, order management, inventory tracking, and admin dashboard. The platform handles thousands of products and supports multiple payment methods.",
      category: "Web App",
      image: movxtar,
      technologies: ["React", "Golang", "PostgreSQL", "Redis", "JWT"],
      github: "https://github.com/HN721/fgo24-Tickitz.git",
      live: "https://movxtar.vercel.app/",
      date: "2025",
      status: "Completed",
      highlights: [
        "Real-time Booking",
        "Authentication and Authorization",
        "Admin dashboard",
      ],
    },
    {
      id: 2,
      title: "E-Wallet Management App",
      description:
        "An e-wallet, or electronic wallet, is a digital application or service that allows users to store, manage, and use funds for online or in-person transactions, typically via a smartphone or computer.",
      longDescription:
        "An e-wallet, or electronic wallet, is a digital application or service that allows users to store, manage, and use funds for online or in-person transactions, typically via a smartphone or computer. It securely holds payment information, such as bank account or credit card details, and enables quick, convenient payments without physical cash or cards.",
      category: "Web App",
      image: ewallet,
      technologies: ["Javascript", "HTML", "CSS", "Netfly"],
      github: "https://github.com/HN721/fgo24-css-slicing.git",
      live: "https://ewallet-v1.netlify.app/",
      date: "2025",
      status: "Completed",
      highlights: ["Cross-platform", "Real-time updates", "Team collaboration"],
    },
    {
      id: 3,
      title: "Fast  Pizza Online Shop",
      description:
        "The Fast Pizza E-Commerce Frontend is a modern, responsive web application built using React, React Router, and Tailwind CSS, designed to provide a seamless online pizza ordering experience.",
      longDescription:
        "The project features a clean and intuitive interface, including a homepage showcasing a curated list of pizzas, a detailed product page for each pizza, and a shopping cart functionality for managing orders.",
      category: "Web App",
      image: pizza,
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      github: "",
      live: "https://pizza-tng.netlify.app/",
      date: "2024",
      status: "Completed",
      highlights: ["Data visualization", "Modern UI", "User-centered design"],
    },
    {
      id: 4,
      title: "RESTfull API MOVXTAR",
      description:
        "Scalable REST API with authentication, rate limiting, and comprehensive documentation for a social media platform.",
      longDescription:
        "A robust REST API service designed for a social media platform. Features include JWT authentication, rate limiting, data validation, error handling, comprehensive documentation, and automated testing. Built with scalability and security in mind.",
      category: "API",
      image: "⚡",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
      github: "https://github.com",
      live: "https://api-docs.com",
      date: "2025",
      status: "Completed",
      highlights: ["JWT authentication", "Rate limiting", "Comprehensive docs"],
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Personal portfolio website with modern design, smooth animations, and responsive layout.",
      longDescription:
        "A modern portfolio website showcasing projects and skills. Built with React and featuring smooth animations, responsive design, dark/light mode, and optimized performance. Includes contact form integration and SEO optimization.",
      category: "Web App",
      image: "🌐",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "https://github.com",
      live: "https://portfolio.com",
      date: "2024",
      status: "In Progress",
      highlights: ["Smooth animations", "Responsive design", "SEO optimized"],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for
            creating amazing digital experiences.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              } hover:scale-105`}
            >
              <span className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{category}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Image or Icon */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-px bg-white opacity-100" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-white opacity-30" />
                {typeof project.image === "string" &&
                (project.image.startsWith("/") ||
                  project.image.startsWith("http") ||
                  project.image.includes("data:image")) ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : typeof project.image === "object" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.live}
                        className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-blue-600 font-medium group-hover:text-purple-600 transition-colors">
                  <Eye className="w-4 h-4 mr-2" />
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={selectedProject.live}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-lg font-medium"
                      >
                        <Code className="w-4 h-4 inline mr-2" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
