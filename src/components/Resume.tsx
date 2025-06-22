
export const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-blue-600 font-medium">Adikavi Nannaya University</p>
                    <p className="text-gray-500 text-sm">2022 - 2025 (Completed)</p>
                    <p className="text-gray-600 mt-2">Final CGPA: 8.0</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Diploma in Computer Engineering
                    </h4>
                    <p className="text-blue-600 font-medium">Andhra Polytechnic</p>
                    <p className="text-gray-500 text-sm">2019 - 2022</p>
                    <p className="text-gray-600 mt-2">Percentage: 85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience and Skills */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h3>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Full Stack Developer Intern
                    </h4>
                    <p className="text-blue-600 font-medium">Vinukoti Business Solutions</p>
                    <p className="text-gray-500 text-sm">April 2024 - May 2024</p>
                    <p className="text-gray-600 mt-2">
                      Built the "Hire Now – Admin Portal," a comprehensive admin dashboard 
                      for a recruitment platform managing job post verifications and expirations.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">HTML/CSS</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Node.js</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Languages & Technologies</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600"><span className="font-medium">Languages:</span> Python, Java (Basic), JavaScript</p>
                      <p className="text-gray-600"><span className="font-medium">Web Technologies:</span> HTML, CSS, JavaScript</p>
                      <p className="text-gray-600"><span className="font-medium">Database:</span> MySQL</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Tools & Concepts</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600"><span className="font-medium">Concepts:</span> OOP, DSA (Basic)</p>
                      <p className="text-gray-600"><span className="font-medium">Tools:</span> VS Code, Jupyter, Git, Postman</p>
                      <p className="text-gray-600"><span className="font-medium">Frameworks:</span> Flask, Node.js</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
