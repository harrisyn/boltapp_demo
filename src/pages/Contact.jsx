import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Contact() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-200">
              Get in touch with us to learn more about our programs or how you can contribute.
            </p>
          </div>

          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-primary-600/20 p-1 mb-8">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium rounded-lg transition duration-300 ease-in-out',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60',
                    selected ? 'bg-white shadow text-primary-700' : 'text-white hover:bg-primary-700/[0.12] hover:text-white'
                  )
                }
              >
                Contact Form
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium rounded-lg transition duration-300 ease-in-out',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary-400 ring-white ring-opacity-60',
                    selected ? 'bg-white shadow text-primary-700' : 'text-white hover:bg-primary-700/[0.12] hover:text-white'
                  )
                }
              >
                Visit Us
              </Tab>
            </Tab.List>
            <Tab.Panels className="transition duration-300 ease-in-out">
              <Tab.Panel className="bg-white rounded-lg shadow-md p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 flex items-center justify-center"
                    >
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </Tab.Panel>
              <Tab.Panel className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="font-medium">Address:</span> No. 35 El-Wak Stadium Road, Airport Residential Area, Accra
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaEnvelope className="mr-2" />
                    <span className="font-medium">Email:</span> info@nyahodove.org
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaPhone className="mr-2" />
                    <span className="font-medium">Phone:</span> +233 (0) 30 708 6490
                  </p>
                  <div className="mt-6">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31571.83570207322!2d-0.186964!3d5.603717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b6b6b6b6b6b%3A0x6b6b6b6b6b6b!2sEl-Wak%20Stadium%2C%20Accra!5e0!3m2!1sen!2sgh!4v1616161616161!5m2!1sen!2sgh"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default Contact;