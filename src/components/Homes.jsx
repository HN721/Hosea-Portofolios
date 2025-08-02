import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  Code,
  Sparkles,
  Zap,
} from "lucide-react";
import bg2 from "../assets/bg-2.png";
export default function Homes() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const typingTexts = [
    "Full Stack Developer",
    "Golang Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/hn721",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hoseanainggolan/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "hosea1422@gmail.com",
      label: "Email",
      color: "hover:text-red-600",
    },
  ];

  const floatingIcons = [
    { icon: Code, position: "top-20 left-10", delay: "0s" },
    { icon: Sparkles, position: "top-32 right-20", delay: "1s" },
    { icon: Zap, position: "bottom-40 left-20", delay: "2s" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className={`absolute ${item.position} text-white/10 animate-bounce`}
              style={{ animationDelay: item.delay, animationDuration: "3s" }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          );
        })}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div
            className={`text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Greeting */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <span className="text-blue-400 font-medium">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Hosea N
            </h1>

            {/* Dynamic Role */}
            <div className="h-16 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-400">
                <span className="inline-block min-w-0">
                  {typingTexts[currentText]}
                </span>
                <span className="animate-pulse text-purple-400">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              I create exceptional digital experiences that combine beautiful
              design with powerful functionality. Let's build something amazing
              together.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Available for projects</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Get In Touch</span>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1XdUwYoXJ2O54WTAvtym6nByz6TphqW6P/view?usp=sharing"
                rel="noreferrer"
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow me:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Profile Circle */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Rotating Border */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin p-1"
                style={{ animationDuration: "8s" }}
              >
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </div>

              {/* Profile Image Container */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={bg2}
                    alt="Hosea N - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Code className="w-8 h-8 text-blue-600" />
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl animate-bounce"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              >
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-gray-400">Scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
