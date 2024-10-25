function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold text-gray-900 mb-4">
            Support the Future of Healthcare
          </h2>
          <p className="text-xl text-gray-600">
            Choose how you'd like to make an impact:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-cream-50 rounded-xl p-10">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80" 
                alt="Scholarship Program" 
                className="h-48 w-full object-cover rounded-lg" 
              />
            </div>
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
              Scholarship Program
            </h3>
            <p className="text-gray-600 mb-6">
              Support aspiring medical professionals through our comprehensive scholarship program. Your monthly contribution ensures continuous support for medical education.
            </p>
            <p className="text-gray-600 mb-8">
              A $500 monthly donation can support one medical student's education.
            </p>
            <button className="bg-accent-400 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-accent-500 transition-colors">
              CONTRIBUTE MONTHLY
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream-50 rounded-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80" 
                alt="Become a Mentor" 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Become a Mentor
              </h3>
              <p className="text-gray-600 mb-6">
                Share your medical expertise by joining our mentorship program.
              </p>
              <button className="text-primary-500 font-medium hover:text-primary-600">
                JOIN AS MENTOR
              </button>
            </div>

            <div className="bg-cream-50 rounded-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80" 
                alt="Support a Facility" 
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Support a Facility
              </h3>
              <p className="text-gray-600 mb-6">
                Help establish or upgrade medical training facilities.
              </p>
              <button className="text-primary-500 font-medium hover:text-primary-600">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;