function ProgramCard({ program }) {
  const { title, description, icon: Icon, metrics } = program;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        
        <div className="mt-6 border-t border-gray-200 pt-4">
          <dl className="grid grid-cols-2 gap-4">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key}>
                <dt className="text-sm font-medium text-gray-500 capitalize">
                  {key}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;