
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-slate-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-bounce delay-500"></div>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                  Bala Krishna
                </span>
              </h1>
              
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl text-gray-700 font-semibold">
                  Aspiring Full Stack Developer
                </h2>
                <h2 className="text-xl md:text-2xl text-blue-600 font-semibold">
                  AI Enthusiast
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Turning ideas into code with purpose. Building innovative solutions 
                that bridge technology and human needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">8.0</div>
                <div className="text-sm text-gray-600">Current CGPA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">LeetCode Problems</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600">Projects Built</div>
              </div>
            </div>
          </div>

          {/* Right side - Professional Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl transform rotate-3"></div>
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl transform -rotate-2"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="/lovable-uploads/6fd47d08-f3dd-4244-bb30-e1b4791998d5.png" 
                  alt="Bala Krishna - Aspiring Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900">Computer Science Student</div>
                  <div className="text-xs text-gray-600">Adikavi Nannaya University</div>
                </div>
              </div>
              
              {/* Tech stack floating icons */}
              <div className="absolute -right-6 top-1/4 space-y-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                  <span className="text-xl">⚛️</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                  <span className="text-xl">🐍</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                  <span className="text-xl">🤖</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center pt-16 lg:pt-20">
          <button 
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={24} className="animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
