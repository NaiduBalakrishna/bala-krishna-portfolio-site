
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Real-Time Sign Language Recognition",
      description: "Advanced computer vision system using YOLO algorithm integrated with Flask web framework to convert hand gestures into text and audio output using Google Text-to-Speech (gTTS) technology.",
      technologies: ["Python", "YOLO", "Flask", "OpenCV", "gTTS", "Computer Vision"],
      github: "#",
      demo: "#"
    },
    {
      title: "Jarvis AI Voice Assistant",
      description: "Intelligent JavaScript-based voice assistant that performs voice commands, features secure authentication system built with Python & MySQL, and utilizes Web Speech API for natural interaction.",
      technologies: ["JavaScript", "Python", "MySQL", "Web Speech API", "Authentication"],
      github: "#",
      demo: "#"
    },
    {
      title: "Hire Now – Admin Portal",
      description: "Comprehensive admin dashboard for recruitment platform with advanced job post verification system, expiration management, and user role management with real-time analytics.",
      technologies: ["React", "Node.js", "MySQL", "Admin Dashboard", "Authentication"],
      github: "#",
      demo: "#"
    },
    {
      title: "Air Quality Predictor",
      description: "Machine learning application that predicts air quality index using historical environmental data, featuring data preprocessing, model training, and interactive visualization dashboard.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Data Science"],
      github: "#",
      demo: "#"
    },
    {
      title: "News Aggregator App",
      description: "Dynamic news application with category filtering system, real-time news fetching from multiple sources via News API, responsive design with search functionality.",
      technologies: ["JavaScript", "News API", "HTML/CSS", "Responsive Design"],
      github: "#",
      demo: "#"
    },
    {
      title: "YouTube Video Downloader",
      description: "User-friendly application for downloading YouTube videos with multiple quality options, built using Python with Streamlit for intuitive UI and pytube for video processing.",
      technologies: ["Python", "Streamlit", "pytube", "Web Interface"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects ranging from AI-powered applications to full-stack web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-gray-300 hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <Link className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
