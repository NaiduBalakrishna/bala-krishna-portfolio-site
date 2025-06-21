
export const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Vinukoti Business Solutions",
      date: "2024",
      description: "Comprehensive training in modern web development technologies and best practices"
    },
    {
      title: "Prompt Engineering",
      issuer: "Coursera",
      date: "2024",
      description: "Advanced techniques for effective AI prompt design and optimization"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2023",
      description: "Fundamental database querying and management skills"
    },
    {
      title: "Python Programming",
      issuer: "Mindspark",
      date: "2023",
      description: "Core Python programming concepts and application development"
    },
    {
      title: "Postman API Fundamental Student Expert",
      issuer: "Postman",
      date: "2024",
      description: "API testing, development, and documentation expertise"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          <p className="text-gray-600 mt-4">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
