
export const Achievements = () => {
  const achievements = [
    {
      title: "100+ LeetCode Problems Solved",
      description: "Consistently solving algorithmic challenges to strengthen problem-solving skills and coding proficiency",
      icon: "💻",
      stats: "100+",
      category: "Coding"
    },
    {
      title: "Strong Coding Profile",
      description: "Actively building and maintaining a comprehensive coding portfolio across multiple platforms",
      icon: "⭐",
      stats: "Active",
      category: "Development"
    },
    {
      title: "Academic Excellence",
      description: "Maintaining high academic standards with consistent performance in Computer Science studies",
      icon: "🎓",
      stats: "8.0 CGPA",
      category: "Academic"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          <p className="text-gray-600 mt-4">
            Key milestones in my learning and development journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.stats}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {achievement.description}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {achievement.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Master full-stack development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Contribute to open source</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Build AI-powered applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Land a tech internship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
