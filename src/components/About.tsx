
export const About = () => {
  return (
    <section id="about" className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8 animate-float">
            💫 Get to know me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">About Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full glow-blue"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity blur-2xl animate-glow"></div>
            <div className="relative">
              <div className="w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700 glow-blue">
                <img 
                  src="/lovable-uploads/6fd47d08-f3dd-4244-bb30-e1b4791998d5.png" 
                  alt="Bala Krishna - About"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Professional floating achievement cards */}
              <div className="absolute -bottom-6 -right-6 card-professional rounded-xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 glow-blue">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-primary">8.0</div>
                  <div className="text-xs text-slate-400 font-medium">CGPA</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 card-professional rounded-xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 glow-cyan">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient-secondary">240+</div>
                  <div className="text-xs text-slate-400 font-medium">NSS Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold leading-tight text-white">
                Hello! I'm <span className="text-gradient-primary">Bala Krishna</span>
              </h3>
              
              <div className="space-y-6">
                <div className="card-professional p-6 rounded-xl border-l-4 border-blue-500 card-hover">
                  <p className="text-slate-300 leading-relaxed">
                    I've recently completed my <strong className="text-gradient-primary">B.Tech in Computer Science</strong> from Adikavi Nannaya University 
                    with a CGPA of <strong className="text-gradient-primary">8.0</strong>. My journey in technology began with a strong foundation from 
                    my diploma in Computer Engineering at Andhra Polytechnic, where I achieved <strong className="text-gradient-primary">85%</strong>.
                  </p>
                </div>
                
                <div className="card-professional p-6 rounded-xl card-hover glow-purple">
                  <p className="text-slate-300 leading-relaxed">
                    I'm passionate about building <strong className="text-gradient-secondary">real-world projects</strong> and exploring emerging technologies 
                    like <strong className="text-gradient-secondary">AI and APIs</strong>. My experience ranges from developing web applications to creating 
                    AI-powered solutions that solve practical problems.
                  </p>
                </div>
                
                <div className="card-professional p-6 rounded-xl border-l-4 border-cyan-500 card-hover">
                  <p className="text-slate-300 leading-relaxed">
                    What drives me most is the opportunity to <strong className="text-gradient-primary">help others through technology</strong>. Whether 
                    it's building accessible interfaces, creating efficient systems, or sharing 
                    knowledge with fellow developers, I believe technology should serve to improve 
                    lives and create meaningful connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-professional p-6 rounded-xl text-center card-hover glow-blue">
                <div className="text-4xl font-bold text-gradient-primary mb-3">8.0</div>
                <div className="text-blue-300 text-sm font-medium mb-1">Final CGPA</div>
                <div className="text-xs text-slate-400">B.Tech CSE</div>
              </div>
              <div className="card-professional p-6 rounded-xl text-center card-hover glow-cyan">
                <div className="text-4xl font-bold text-gradient-secondary mb-3">240+</div>
                <div className="text-purple-300 text-sm font-medium mb-1">NSS Hours</div>
                <div className="text-xs text-slate-400">Community Service</div>
              </div>
            </div>

            {/* Current Focus Section */}
            <div className="card-professional p-6 rounded-xl card-hover">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🎯</span>
                <span className="text-gradient-primary">Current Focus</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg hover:bg-blue-600/20 transition-colors">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-300 text-sm font-medium">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-600/10 border border-purple-500/20 rounded-lg hover:bg-purple-600/20 transition-colors">
                  <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-300 text-sm font-medium">AI Integration</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-lg hover:bg-indigo-600/20 transition-colors">
                  <span className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-300 text-sm font-medium">Open Source Contribution</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-cyan-600/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-600/20 transition-colors">
                  <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-300 text-sm font-medium">Community Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
