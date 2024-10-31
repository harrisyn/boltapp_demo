function NewsHighlights() {
  const stories = [
    {
      id: 1,
      title: 'Breast Cancer Screening & Education',
      image:
        'https://nyahomedical.com/wp-content/uploads/2021/10/woman-for-breast-cancer-awareness-with-ribbon.jpg',
      excerpt:
        'Supporting early detection and treatment through innovative partnerships and awareness programs.',
    },
    {
      id: 2,
      title: 'Child Welfare Clinic',
      image:
        'https://nyahomedical.com/wp-content/uploads/2021/08/african-doctor-bandaging-arm-of-little-girl-at-hospital.jpg',
      excerpt:
        'Free medical counselling, immunizations, and birth certificate services for children in our district.',
    },
    {
      id: 3,
      title: 'Thought Leadership',
      image:
        'https://nyahomedical.com/wp-content/uploads/2021/06/25.03.21-NyahoMedicalCentreWebsiteShootDay1of3-080-_CM30119.jpg',
      excerpt:
        'Engaging stakeholders through our Annual Health Forum to improve healthcare outcomes.',
    },
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-semibold text-center text-gray-900 mb-16">
          Our Impact Areas
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
              <p className="text-gray-600 mb-4">{story.excerpt}</p>
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
