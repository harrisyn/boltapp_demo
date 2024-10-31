import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const programs = [
  {
    id: 1,
    title: 'Access to Care',
    description: 'Bridging the quality divide within the healthcare system by delivering quality healthcare to vulnerable groups in Ghana.',
    image: 'https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Dove-Foundation-scaled.jpg',
  },
  {
    id: 2,
    title: 'Postgraduate Training',
    description: 'Building the capacity of healthcare professionals and increasing the number of family physicians in Ghana.',
    image: 'https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Doctors.jpg',
  },
  {
    id: 3,
    title: 'Research & Development',
    description: 'Contributing data through research and development to improve healthcare outcomes in Africa.',
    image: 'https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Lab.jpg',
  },
];

function FeaturedPrograms() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Pillars</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how we're improving healthcare access and quality in Ghana
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-gray-600">{program.description}</p>
                <Link
                  to="/programs"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Learn more
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPrograms;