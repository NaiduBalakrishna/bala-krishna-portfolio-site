
import { Button } from "@/components/ui/button";

export const Blog = () => {
  const upcomingPosts = [
    {
      title: "Building Scalable React Applications",
      description: "Best practices for creating maintainable and scalable React applications",
      category: "Frontend Development",
      estimatedDate: "Coming Soon"
    },
    {
      title: "AI Integration in Web Development",
      description: "Exploring how to integrate AI capabilities into modern web applications",
      category: "AI & Development",
      estimatedDate: "Coming Soon"
    },
    {
      title: "My Journey from Diploma to B.Tech",
      description: "Sharing experiences and lessons learned during my academic transition",
      category: "Personal Growth",
      estimatedDate: "Coming Soon"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          <p className="text-gray-600 mt-4">
            Sharing insights on tech learning, project experiences, and AI experiments
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Blog Coming Soon!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm excited to share my journey, technical insights, and project deep-dives 
              through blog posts. Stay tuned for content about web development, AI tools, 
              and my learning experiences.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3">
                  {post.category}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {post.estimatedDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
