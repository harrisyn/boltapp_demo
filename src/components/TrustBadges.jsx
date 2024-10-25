function TrustBadges() {
  const badges = [
    { 
      id: 1, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Caduceus.svg',
      alt: 'Medical Council Accredited' 
    },
    { 
      id: 2, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Caduceus_medical_symbol.svg',
      alt: 'Education Board Certified' 
    },
    { 
      id: 3, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Asklepios_with_his_serpent-entwined_staff%2C_Archaeological_Museum_of_Epidaurus.svg',
      alt: 'Healthcare Alliance Member' 
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-center text-gray-900 mb-8">
          Accredited Excellence
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our programs are recognized and accredited by leading medical education authorities. We maintain the highest standards in medical training and professional development.
        </p>
        <div className="flex justify-center items-center space-x-16">
          {badges.map((badge) => (
            <img
              key={badge.id}
              src={badge.image}
              alt={badge.alt}
              className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;