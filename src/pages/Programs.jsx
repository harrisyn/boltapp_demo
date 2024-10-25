import { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import { CalendarIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline';

const programs = [
  {
    id: 1,
    title: 'Community Health Outreach',
    description: 'Bringing essential healthcare services directly to underserved communities.',
    icon: UserGroupIcon,
    metrics: { patients: '5,000+', communities: '12', volunteers: '150+' }
  },
  {
    id: 2,
    title: 'Medical Education Initiative',
    description: 'Training healthcare workers and providing continuing education.',
    icon: HeartIcon,
    metrics: { students: '200+', courses: '15', graduates: '80+' }
  },
  {
    id: 3,
    title: 'Preventive Care Program',
    description: 'Focus on early detection and prevention of common health issues.',
    icon: CalendarIcon,
    metrics: { screenings: '10,000+', conditions: '25+', success: '92%' }
  }
];

function Programs() {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Programs</h1>
          <p className="mt-4 text-xl text-gray-600">
            Making healthcare accessible through innovative programs and initiatives
          </p>
        </div>

        <div className="mt-12">
          <nav className="flex justify-center space-x-4">
            {['current', 'upcoming', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;