function StoryCard({ story }) {
  const { title, content, image, category } = story;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm font-medium text-blue-600 mb-2">
          {category}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {content}
        </p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Read More →
        </button>
      </div>
    </div>
  );
}

export default StoryCard;