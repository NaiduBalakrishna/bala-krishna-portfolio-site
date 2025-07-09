
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Backend",
      skills: ["Python", "Flask", "API Development"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Database",
      skills: ["MySQL", "Database Design"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Postman", "Jupyter"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Time Management",
    "Critical Thinking",
    "Adaptability"
  ];

  const learningJourney = [
    "Mastering Data Science Fundamentals",
    "Exploring Generative AI Applications",
    "Understanding Agentic AI Systems",
    "Building Full-Stack Solutions"
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-2 bg-gradient-to-r ${category.color} text-white text-sm rounded-lg font-medium shadow-sm hover:shadow-md transition-shadow`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills and Learning Journey */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Soft Skills</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 gap-3">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-150 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Learning Journey */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Learning Journey</h4>
              <div className="space-y-3 text-gray-600">
                {learningJourney.map((item, index) => (
                  <p key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
