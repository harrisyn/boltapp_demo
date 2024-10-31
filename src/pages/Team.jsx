import { motion } from 'framer-motion';

function Team() {
  const leadership = [
    {
      name: "Dr. Elikem Tamaklo",
      role: "Managing Director",
      image: "https://nyahomedical.com/wp-content/uploads/2021/07/Dr-Elikem-Tamaklo.jpg",
      bio: "Leading Nyaho Medical Centre's vision of transforming the healthcare experience in Africa.",
      achievements: [
        "Spearheaded digital transformation initiatives",
        "Led expansion of healthcare services",
        "Established key strategic partnerships"
      ]
    },
    {
      name: "Dr. Naa Adorkor Aryeetey",
      role: "Foundation Director",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Team.jpg",
      bio: "Driving initiatives to enhance healthcare access and professional development.",
      achievements: [
        "Launched breast cancer screening program",
        "Established child welfare clinics",
        "Developed postgraduate training curriculum"
      ]
    }
  ];

  const boardMembers = [
    {
      name: "Prof. Emerita Takyiwaa Manuh",
      role: "Board Chair",
      credentials: "Social Anthropologist & Former Director at UN-ECA",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Board.jpg",
      expertise: ["Social Development", "Policy Making", "Academic Leadership"]
    },
    {
      name: "Mrs. Janet Tamaklo",
      role: "Board Member",
      credentials: "Former Managing Director, Nyaho Medical Centre",
      image: "https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Legacy.jpg",
      expertise: ["Healthcare Management", "Medical Excellence", "Organizational Leadership"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-600 py-24">
        <div className="absolute inset-0">
          <img
            src="https://nyahomedical.com/wp-content/uploads/2023/03/Nyaho-Medical-Centre-Team.jpg"
            alt="Team"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Dedicated professionals committed to transforming healthcare in Ghana
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Leadership Team */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Board Members */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Board Members</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {boardMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.credentials}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Team;