function NewsHighlights() {
  const stories = [
    {
      id: 1,
      title: 'New Simulation Center Opens',
      image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80',
      excerpt: 'State-of-the-art medical simulation center launches to provide hands-on training experiences.'
    },
    {
      id: 2,
      title: 'Class of 2023 Achievements',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      excerpt: '100 new medical professionals graduate from our comprehensive training program.'
    },
    {
      id: 3,
      title: 'Rural Healthcare Initiative',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b3e?auto=format&fit=crop&q=80',
      excerpt: 'New program focuses on training medical professionals for rural community service.'
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-semibold text-center text-gray-900 mb-16">
          Latest Updates from<br />Nyaho Dove Foundation
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {stories.map((story) => (
            <div key={story.id} className="group">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                {story.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {story.excerpt}
              </p>
              <button className="text-primary-500 font-medium group-hover:text-primary-600">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsHighlights;