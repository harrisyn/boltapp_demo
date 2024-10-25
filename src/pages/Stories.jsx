import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import VideoTestimonial from '../components/VideoTestimonial';

const stories = [
  {
    id: 1,
    title: "A Mother's Journey to Health",
    content: "After struggling with access to prenatal care, Sarah found hope through our community health program.",
    image: "/images/story-1.jpg",
    category: "Patient Story"
  },
  {
    id: 2,
    title: "Building Healthcare Heroes",
    content: "Dr. James shares his experience training rural healthcare workers.",
    image: "/images/story-2.jpg",
    category: "Medical Education"
  },
  {
    id: 3,
    title: "Community Impact",
    content: "How our preventive care program transformed an entire village's health outcomes.",
    image: "/images/story-3.jpg",
    category: "Community Impact"
  }
];

function Stories() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Success Stories</h1>
          <p className="mt-4 text-xl text-gray-600">
            Real stories of lives transformed through our healthcare initiatives
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center space-x-4 mb-8">
            {['all', 'patient', 'education', 'community'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Video Testimonials
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <VideoTestimonial
                title="Healthcare Worker Training Program"
                videoUrl="/videos/testimonial-1.mp4"
                thumbnail="/images/video-thumb-1.jpg"
              />
              <VideoTestimonial
                title="Community Health Impact"
                videoUrl="/videos/testimonial-2.mp4"
                thumbnail="/images/video-thumb-2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;