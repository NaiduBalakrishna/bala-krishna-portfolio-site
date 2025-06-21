
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-80 h-80 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/6fd47d08-f3dd-4244-bb30-e1b4791998d5.png" 
                alt="Bala Krishna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Hello! I'm Bala Krishna
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm currently pursuing a B.Tech in Computer Science at Adikavi Nannaya University 
                with a CGPA of 8.0. My journey in technology began with a strong foundation from 
                my diploma in Computer Engineering at Andhra Polytechnic, where I achieved 85%.
              </p>
              
              <p>
                I'm passionate about building real-world projects and exploring emerging technologies 
                like AI and APIs. My experience ranges from developing web applications to creating 
                AI-powered solutions that solve practical problems.
              </p>
              
              <p>
                What drives me most is the opportunity to help others through technology. Whether 
                it's building accessible interfaces, creating efficient systems, or sharing 
                knowledge with fellow developers, I believe technology should serve to improve 
                lives and create meaningful connections.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new frameworks, contributing to 
                open-source projects, or volunteering in community service activities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">8.0</div>
                <div className="text-sm text-gray-600">Current CGPA</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">240+</div>
                <div className="text-sm text-gray-600">NSS Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
