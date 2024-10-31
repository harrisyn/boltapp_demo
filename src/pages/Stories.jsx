import { useState } from 'react';
import { motion } from 'framer-motion';

function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "Breast Cancer Awareness Success",
      category: "Healthcare Access",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Breast-Cancer.jpg",
      quote: "Early detection saved my life. The screening program made it possible.",
      content: "Through our breast cancer screening initiative, we've helped hundreds of women access early detection services and treatment support.",
      impact: "1000+ women screened",
      location: "Greater Accra Region"
    },
    {
      id: 2,
      title: "Child Welfare Progress",
      category: "Community Impact",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Child.jpg",
      quote: "The clinic has been a blessing for my children's health.",
      content: "Our Child Welfare Clinic provides essential services including immunizations and health monitoring for children in our community.",
      impact: "500+ children served",
      location: "Airport Residential Area"
    },
    {
      id: 3,
      title: "Medical Training Excellence",
      category: "Professional Development",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Doctors.jpg",
      quote: "The training program transformed my approach to family medicine.",
      content: "Our postgraduate training program continues to produce skilled family physicians who serve communities across Ghana.",
      impact: "50+ physicians trained",
      location: "Nyaho Medical Centre"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-600 py-24">
        <div className="absolute inset-0">
          <img
            src="https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Dove-Foundation-scaled.jpg"
            alt="Impact Stories"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Impact Stories</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Real stories of lives transformed through our healthcare initiatives
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="relative h-48">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.content}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{story.impact}</span>
                  <span>{story.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for selected story */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-64">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4">
                {selectedStory.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedStory.title}
              </h2>
              <blockquote className="text-xl italic text-gray-600 border-l-4 border-primary-500 pl-4 my-6">
                "{selectedStory.quote}"
              </blockquote>
              <p className="text-gray-600 mb-6">
                {selectedStory.content}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                <span>{selectedStory.impact}</span>
                <span>{selectedStory.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Stories;