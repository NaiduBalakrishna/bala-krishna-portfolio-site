
export const About = () => {
  return (
    <section id="about" className="py-20 section-glass">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-card text-sm font-medium mb-8 floating">
            <span className="mr-2">💫</span>
            <span className="gradient-text">Get to know me</span>
          </div>
          <h2 className="text-5xl md:text-6xl heading-primary mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity blur-2xl pulse-glow"></div>
            <div className="relative">
              <div className="glass-card p-6 transform group-hover:scale-105 transition-all duration-700 hover-lift">
                <img 
                  src="/lovable-uploads/6fd47d08-f3dd-4244-bb30-e1b4791998d5.png" 
                  alt="Bala Krishna - About"
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-2xl"></div>
              </div>
              
              {/* Professional floating achievement cards */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 hover-lift">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text heading-primary">8.0</div>
                  <div className="text-xs text-yellow-300 font-medium text-mono">CGPA</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 glass-card p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500 hover-lift">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text heading-primary">240+</div>
                  <div className="text-xs text-yellow-300 font-medium text-mono">NSS Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl heading-primary leading-tight">
                Hello! I'm <span className="gradient-text">Bala Krishna</span>
              </h3>
              
              <div className="space-y-6">
                <div className="glass-card p-6 border-l-4 border-purple-500 hover-lift interactive-card">
                  <div className="card-glow"></div>
                  <p className="text-yellow-200 leading-relaxed">
                    I've recently completed my <strong className="gradient-text">B.Tech in Computer Science</strong> from Adikavi Nannaya University 
                    with a CGPA of <strong className="gradient-text">8.0</strong>. My journey in technology began with a strong foundation from 
                    my diploma in Computer Engineering at Andhra Polytechnic, where I achieved <strong className="gradient-text">85%</strong>.
                  </p>
                </div>
                
                <div className="glass-card p-6 hover-lift interactive-card">
                  <div className="card-glow"></div>
                  <p className="text-yellow-200 leading-relaxed">
                    I'm passionate about building <strong className="gradient-text">real-world projects</strong> and exploring emerging technologies 
                    like <strong className="gradient-text">AI and APIs</strong>. My experience ranges from developing web applications to creating 
                    AI-powered solutions that solve practical problems.
                  </p>
                </div>
                
                <div className="glass-card p-6 border-l-4 border-blue-500 hover-lift interactive-card">
                  <div className="card-glow"></div>
                  <p className="text-yellow-200 leading-relaxed">
                    What drives me most is the opportunity to <strong className="gradient-text">help others through technology</strong>. Whether 
                    it's building accessible interfaces, creating efficient systems, or sharing 
                    knowledge with fellow developers, I believe technology should serve to improve 
                    lives and create meaningful connections.
                  </p>
                </div>

                <div className="glass-card p-6 border-l-4 border-green-500 hover-lift interactive-card">
                  <div className="card-glow"></div>
                  <p className="text-yellow-200 leading-relaxed">
                    Currently, I'm diving deep into the fascinating world of <strong className="gradient-text">Data Science</strong> and 
                    <strong className="gradient-text"> Generative AI</strong>. I'm particularly excited about exploring 
                    <strong className="gradient-text"> Agentic AI</strong> systems and their potential to revolutionize how we interact with technology. 
                    This journey into advanced AI concepts is opening up new perspectives on intelligent automation and decision-making systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center hover-lift interactive-card">
                <div className="card-glow"></div>
                <div className="text-4xl font-bold gradient-text heading-primary mb-3">8.0</div>
                <div className="text-purple-400 text-sm font-medium mb-1">Final CGPA</div>
                <div className="text-xs text-yellow-300 text-mono">B.Tech CSE</div>
              </div>
              <div className="glass-card p-6 text-center hover-lift interactive-card">
                <div className="card-glow"></div>
                <div className="text-4xl font-bold gradient-text heading-primary mb-3">240+</div>
                <div className="text-blue-400 text-sm font-medium mb-1">NSS Hours</div>
                <div className="text-xs text-yellow-300 text-mono">Community Service</div>
              </div>
            </div>

            {/* Current Focus Section */}
            <div className="glass-card p-6 hover-lift">
              <h4 className="text-xl heading-secondary mb-4 flex items-center">
                <span className="mr-3 text-2xl">🎯</span>
                <span className="gradient-text">Current Focus</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Data Science",
                  "Generative AI", 
                  "Agentic AI Systems",
                  "Full-Stack Development"
                ].map((focus, index) => (
                  <div key={index} className="skill-tag">
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full inline-block mr-3 animate-pulse"></span>
                    <span className="text-sm font-medium text-yellow-200">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
