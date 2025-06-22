
export const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            💫 Get to know me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-slate-200 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity blur-xl"></div>
            <div className="relative">
              <div className="w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img 
                  src="/lovable-uploads/6fd47d08-f3dd-4244-bb30-e1b4791998d5.png" 
                  alt="Bala Krishna - About"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating achievement cards */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8.0</div>
                  <div className="text-xs text-gray-600">CGPA</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">240+</div>
                  <div className="text-xs text-gray-600">NSS Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Hello! I'm <span className="text-blue-600">Bala Krishna</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-blue-500">
                  <p>
                    I've recently completed my <strong>B.Tech in Computer Science</strong> from Adikavi Nannaya University 
                    with a CGPA of <strong>8.0</strong>. My journey in technology began with a strong foundation from 
                    my diploma in Computer Engineering at Andhra Polytechnic, where I achieved <strong>85%</strong>.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-4 rounded-xl shadow-lg">
                  <p>
                    I'm passionate about building <strong>real-world projects</strong> and exploring emerging technologies 
                    like <strong>AI and APIs</strong>. My experience ranges from developing web applications to creating 
                    AI-powered solutions that solve practical problems.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
                  <p>
                    What drives me most is the opportunity to <strong>help others through technology</strong>. Whether 
                    it's building accessible interfaces, creating efficient systems, or sharing 
                    knowledge with fellow developers, I believe technology should serve to improve 
                    lives and create meaningful connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold mb-2">8.0</div>
                <div className="text-blue-100 text-sm font-medium">Final CGPA</div>
                <div className="mt-1 text-xs text-blue-200">B.Tech CSE</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold mb-2">240+</div>
                <div className="text-green-100 text-sm font-medium">NSS Hours</div>
                <div className="mt-1 text-xs text-green-200">Community Service</div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">🎯</span>
                Current Focus
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700 text-sm">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700 text-sm">AI Integration</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-700 text-sm">Open Source Contribution</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-700 text-sm">Community Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
