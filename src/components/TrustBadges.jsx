function TrustBadges() {
  const badges = [
    { 
      id: 1, 
      image: 'https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Accreditation.jpg',
      alt: 'Medical Council Accredited',
      title: 'Medical Council Accredited'
    },
    { 
      id: 2, 
      image: 'https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Certification.jpg',
      alt: 'Education Board Certified',
      title: 'Education Board Certified'
    },
    { 
      id: 3, 
      image: 'https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Partnership.jpg',
      alt: 'Healthcare Alliance Member',
      title: 'Healthcare Alliance Member'
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-center text-gray-900 mb-8">
          Recognized Excellence
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Registered under the Department of Social Welfare, Ayawaso West District, our foundation maintains the highest standards in healthcare initiatives and professional development.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <img
                src={badge.image}
                alt={badge.alt}
                className="h-24 w-auto mb-4"
              />
              <p className="text-sm font-medium text-gray-900 text-center">
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;