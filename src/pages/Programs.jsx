import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { BeakerIcon, HeartIcon, AcademicCapIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Programs() {
  const programs = {
    'Access to Care': {
      icon: HeartIcon,
      description: "Bridge the quality divide within the healthcare system by delivering quality healthcare to vulnerable groups in Ghana.",
      initiatives: [
        {
          title: "Breast Cancer Screening & Education",
          description: "Comprehensive screening program and awareness campaigns for early detection.",
          image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Breast-Cancer.jpg"
        },
        {
          title: "Child Welfare Clinic",
          description: "Free medical counselling, immunizations, and birth certificate services.",
          image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Child.jpg"
        }
      ]
    },
    'Postgraduate Training': {
      icon: AcademicCapIcon,
      description: "Build the capacity of healthcare professionals and increase the number of family physicians in Ghana.",
      initiatives: [
        {
          title: "Family Medicine Training",
          description: "Specialized training program in partnership with Ghana College of Physicians and Surgeons.",
          image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Doctors.jpg"
        }
      ]
    },
    'Research & Development': {
      icon: BeakerIcon,
      description: "Contribute data through research and development to improve healthcare outcomes in Africa.",
      initiatives: [
        {
          title: "Healthcare Innovation",
          description: "Continuous research and development for medical breakthroughs.",
          image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Lab.jpg"
        }
      ]
    },
    'Thought Leadership': {
      icon: LightBulbIcon,
      description: "Improve healthcare through educational initiatives, forums, and public policy development.",
      initiatives: [
        {
          title: "Annual Health Forum",
          description: "Engaging stakeholders for consensus-building and collective action.",
          image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Conference.jpg"
        }
      ]
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Dove-Foundation-scaled.jpg"
            alt="Programs Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-600/70 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Comprehensive initiatives designed to enhance healthcare access and quality in Ghana
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-primary-600/20 p-1">
            {Object.keys(programs).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-primary-700 shadow'
                      : 'text-primary-700 hover:bg-white/[0.12] hover:text-primary-600'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.entries(programs).map(([category, { icon: Icon, description, initiatives }]) => (
              <Tab.Panel
                key={category}
                className="rounded-xl bg-white p-3 shadow-lg ring-white ring-opacity-60 ring-offset-2 ring-offset-primary-400 focus:outline-none focus:ring-2"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  </div>
                  <p className="text-gray-600 mb-12">{description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {initiatives.map((initiative) => (
                      <div key={initiative.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                        <img
                          src={initiative.image}
                          alt={initiative.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {initiative.title}
                          </h3>
                          <p className="text-gray-600">{initiative.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Programs;