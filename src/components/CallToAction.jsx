function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold text-gray-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-600">
            Join us in enhancing access to quality healthcare:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-cream-50 rounded-xl p-10">
            <div className="mb-8">
              <img
                src="https://nyahomedical.com/wp-content/uploads/2021/08/nyaho_anaesthesia_1.jpg"
                alt="Healthcare Support"
                className="h-48 w-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
              Support Healthcare Access
            </h3>
            <p className="text-gray-600 mb-6">
              Help us deliver quality healthcare to vulnerable groups in Ghana
              through our comprehensive programs.
            </p>
            <p className="text-gray-600 mb-8">
              Your monthly contribution ensures continuous support for our
              healthcare initiatives.
            </p>
            <button className="bg-accent-400 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-accent-500 transition-colors">
              CONTRIBUTE MONTHLY
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream-50 rounded-xl p-8">
              <img
                src="https://nyahomedical.com/wp-content/uploads/2021/07/nyaho-lab-man.jpg"
                alt="Medical Training"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Support Training
              </h3>
              <p className="text-gray-600 mb-6">
                Help build the capacity of healthcare professionals in Ghana.
              </p>
              <button className="text-primary-500 font-medium hover:text-primary-600">
                LEARN MORE
              </button>
            </div>

            <div className="bg-cream-50 rounded-xl p-8">
              <img
                src="https://nyahomedical.com/wp-content/uploads/2021/08/african-doctor-bandaging-arm-of-little-girl-at-hospital.jpg"
                alt="Child Welfare"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                Child Welfare
              </h3>
              <p className="text-gray-600 mb-6">
                Support our free medical counselling and immunization services.
              </p>
              <button className="text-primary-500 font-medium hover:text-primary-600">
                GET INVOLVED
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
