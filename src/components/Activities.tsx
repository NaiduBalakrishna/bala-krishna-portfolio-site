
export const Activities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Co-Curricular & Volunteering</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
          <p className="text-gray-600 mt-4">
            Giving back to the community through service and engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">NSS Volunteer</h3>
                  <p className="text-green-600 font-medium">240+ Hours of Service</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Actively participated in National Service Scheme activities, contributing 
                to community development and social welfare initiatives. Engaged in 
                various outreach programs focused on education, health awareness, and 
                environmental conservation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">🏕️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Rural Development Camp</h3>
                  <p className="text-blue-600 font-medium">March 2024</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Participated in an intensive rural development camp focused on understanding 
                grassroots challenges and implementing technology-based solutions for rural 
                communities. Collaborated with local organizations to identify areas where 
                digital literacy and technological interventions could make a positive impact.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                <img 
                  src="/lovable-uploads/599a7ee8-1ad0-43bf-9d53-eaadd32f4c4a.png" 
                  alt="Community Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">240+</div>
                <div className="text-sm text-gray-600">Service Hours</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Community Projects</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-4">Impact Areas</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Digital Literacy Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Environmental Conservation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Health Awareness Campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Rural Development Initiatives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
