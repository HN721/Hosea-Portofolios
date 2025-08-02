import React, { useState, useEffect } from "react";
import {
  Download,
  MapPin,
  Calendar,
  Coffee,
  Code2,
  Heart,
  Award,
  Users,
} from "lucide-react";
import bg1 from "../assets/bg-3.png";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code2, label: "Projects Completed", value: "5+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    { icon: Users, label: "Happy Clients", value: "25+" },
    { icon: Award, label: "Years Experience", value: "1" },
  ];

  const skills = [
    { name: "Frontend Development", level: 80 },
    { name: "Backend Development", level: 95 },
    { name: "Database Management", level: 85 },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-700 to-pink-500 p-1">
                <div className="w-full h-full rounded-3xl bg-from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
                  <img
                    src={bg1}
                    alt="Hosea N - Full Stack Developer"
                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
                  />{" "}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>1 Years Experience</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Full Stack Developer
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi! I'm a passionate full-stack developer with over 1 years of
                experience creating digital solutions that make a difference. I
                specialize in modern web technologies and love turning complex
                problems into simple, beautiful designs.
              </p>

              <p>
                My journey began with curiosity about how websites work, and it
                has evolved into a career where I get to build amazing products
                that users love. I'm constantly learning new technologies and
                best practices to stay at the forefront of web development.
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <div className="flex items-center space-x-2 text-gray-600">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Skills */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${800 + index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
