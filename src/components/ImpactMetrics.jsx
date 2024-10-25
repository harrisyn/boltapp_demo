function ImpactMetrics() {
  const metrics = [
    { id: 1, name: 'MEDICAL PROFESSIONALS TRAINED', value: '2,500+' },
    { id: 2, name: 'TRAINING FACILITIES', value: '12' },
    { id: 3, name: 'COMMUNITIES IMPACTED', value: '150+' }
  ];

  return (
    <div className="bg-primary-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-primary-100 text-sm font-medium uppercase tracking-wider mb-12">
          Nyaho Dove Foundation's Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {metrics.map((metric) => (
            <div key={metric.id} className="bg-primary-600/30 rounded-xl p-8">
              <p className="font-display text-4xl font-semibold text-white mb-3">
                {metric.value}
              </p>
              <p className="text-sm text-primary-100 uppercase tracking-wider">
                {metric.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactMetrics;