import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Real-Time Sign Language Recognition",
      description: "Advanced computer vision system using YOLO algorithm integrated with Flask web framework to convert hand gestures into text and audio output using Google Text-to-Speech (gTTS) technology.",
      technologies: ["Python", "YOLO", "Flask", "OpenCV", "gTTS", "Computer Vision"],
      github: "https://github.com/NaiduBalakrishna/Real-Time-Sign-Language-Recognition",
      demo: "#"
    },
    {
      title: "Jarvis AI Voice Assistant", 
      description: "Intelligent JavaScript-based voice assistant that performs voice commands, features secure authentication system built with Python & MySQL, and utilizes Web Speech API for natural interaction.",
      technologies: ["JavaScript", "Python", "MySQL", "Web Speech API", "Authentication"],
      github: "https://github.com/NaiduBalakrishna/Jarvis-AI-Voice-Assistant",
      demo: "#"
    },
    {
      title: "Air Quality Predictor",
      description: "Machine learning application that predicts air quality index using historical environmental data, featuring data preprocessing, model training, and interactive visualization dashboard.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Data Science"],
      github: "https://github.com/NaiduBalakrishna/Air-Quality-Predictor",
      demo: "#"
    },
    {
      title: "AI Text Summarizer",
      description: "AI-powered text summarization tool that processes long documents and generates concise, meaningful summaries using advanced natural language processing techniques.",
      technologies: ["Python", "NLP", "AI/ML", "Text Processing"],
      github: "https://github.com/NaiduBalakrishna/AI-TEXT-SUMMARIZER",
      demo: "#"
    },
    {
      title: "YouTube-Playlist-and-Video-Downloader",
      description: "User-friendly application for downloading YouTube videos and playlists with multiple quality options, built using Python with Streamlit for intuitive UI and pytube for video processing.",
      technologies: ["Python", "Streamlit", "pytube", "Web Interface"],
      github: "https://github.com/NaiduBalakrishna/YouTube-Playlist-Video-Downloader",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Projects & Portfolio</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full glow-blue"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            A showcase of my technical projects ranging from AI-powered applications to full-stack web solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-professional rounded-xl card-hover overflow-hidden group"
            >
              <div className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 glow-blue">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient-primary transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-600/20 border border-slate-500/30 text-slate-400 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 btn-professional"
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
