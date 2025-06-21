
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:balakrishnanaidu941@gmail.com",
      icon: Mail,
      color: "hover:text-red-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/NaiduBalakrishna",
      icon: Github,
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/NaiduBalakrishna",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/naidu_balakrishna",
      icon: Code,
      color: "hover:text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on projects, 
            or just having a conversation about technology. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 ${link.color}`}
                  >
                    <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{link.name}</div>
                      <div className="text-sm text-gray-600">
                        {link.name === "Email" ? "balakrishnanaidu941@gmail.com" : 
                         link.name === "GitHub" ? "github.com/NaiduBalakrishna" :
                         link.name === "LinkedIn" ? "linkedin.com/in/NaiduBalakrishna" :
                         "leetcode.com/u/naidu_balakrishna"}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Let's Collaborate</h4>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Available for internship opportunities
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Open to freelance projects
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Interested in tech mentorship
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Always ready to learn and contribute
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
