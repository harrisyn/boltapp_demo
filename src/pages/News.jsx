import { useState } from 'react';

function News() {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: "Annual Health Forum 2023",
      date: "October 15, 2023",
      category: "events",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Conference.jpg",
      excerpt: "Leading healthcare professionals gathered to discuss innovations in medical care delivery."
    },
    {
      id: 2,
      title: "Breast Cancer Awareness Month",
      date: "October 1, 2023",
      category: "programs",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Breast-Cancer.jpg",
      excerpt: "Launch of comprehensive breast cancer screening and education program."
    },
    {
      id: 3,
      title: "New Postgraduate Training Cohort",
      date: "September 15, 2023",
      category: "education",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Doctors.jpg",
      excerpt: "Welcoming new physicians to our specialized training program."
    }
  ];

  const categories = ['all', 'events', 'programs', 'education'];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Latest News</h1>
          <p className="mt-4 text-xl text-gray-600">
            Stay updated with our latest initiatives and achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  category === categories[0]
                    ? 'rounded-l-md'
                    : category === categories[categories.length - 1]
                    ? 'rounded-r-md'
                    : ''
                } border border-gray-300`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary-600 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;