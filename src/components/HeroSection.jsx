import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: 'https://nyahomedical.com/wp-content/uploads/2021/07/Nyaho-Tamaklo.jpg',
    alt: 'Nyaho Dove Foundation Healthcare',
  },
  {
    src: 'https://nyahomedical.com/wp-content/uploads/2021/06/Nyaho-General-Practice-scaled.jpeg',
    alt: 'Nyaho Dove Foundation',
  },
  {
    src: 'https://nyahomedical.com/wp-content/uploads/2021/07/25.03.21-NyahoMedicalCentreWebsiteShootDay1of3-205-CM5_0122.jpg',
    alt: 'Nyaho Medical Centre Doctors',
  },
];

const exchangeRates = {
  GHS: 1,
  USD: 0.17,
  EUR: 0.15,
};

function HeroSection() {
  const [donationAmount, setDonationAmount] = useState('');
  const [currency, setCurrency] = useState('GHS');
  const [donationType, setDonationType] = useState('monthly');
  const [convertedAmounts, setConvertedAmounts] = useState([100, 500, 1000, 2000]);
  const navigate = useNavigate();

  useEffect(() => {
    const rates = exchangeRates[currency];
    setConvertedAmounts([100, 500, 1000, 2000].map(amount => Math.round(amount * rates)));
  }, [currency]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const handleDonateClick = () => {
    navigate('/donate', { state: { donationAmount, currency, donationType } });
  };

  return (
    <div className="relative min-h-screen bg-primary-600 overflow-hidden">
      <div className="max-h-[90vh]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative max-h-[90vh]">
              <img
                className="w-full h-full object-cover max-h-[90vh]"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-primary-600/40 mix-blend-multiply" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute inset-0  z-10 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md">
            <h1 className="font-display text-2xl font-semibold text-gray-900 mb-3">
              Enhancing Access to Quality Healthcare
            </h1>
            <p className="text-gray-600 mb-6 text-sm">
              Join us in our mission to provide the best medical care and build
              the capacity of health professionals in Ghana. Together, we can bridge
              the healthcare quality divide.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Type
                </label>
                <div className="flex space-x-2 mb-3 w-full">
                  <button
                    type="button"
                    onClick={() => setDonationType('once')}
                    className={`py-1.5 px-3 rounded-lg font-medium transition-all w-full text-sm ${
                      donationType === 'once'
                        ? 'bg-gray-200 text-gray-900 shadow-lg'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Give Once
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`py-1.5 px-3 rounded-lg font-medium transition-all w-full text-sm ${
                      donationType === 'monthly'
                        ? 'bg-yellow-300 text-gray-900 shadow-lg'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select your contribution amount
                </label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {convertedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount)}
                      className={`py-2 px-3 rounded-lg font-medium transition-all text-sm ${
                        donationAmount === amount
                          ? 'bg-accent-400 text-gray-900 shadow-lg'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {currency} {amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Other amount"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm"
                >
                  <option value="GHS">GHS</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <button
                type="button"
                onClick={handleDonateClick}
                className="w-full bg-yellow-300 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-yellow-400 transition-colors shadow-lg text-sm"
              >
                Join Today
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Your contribution supports healthcare access for deprived
              communities.
            </p>
            <p className="mt-3 text-xs text-gray-400 text-center">
              Secure payment protected by reCAPTCHA - <a href="/privacy-policy" className="underline">Privacy Policy</a> - <a href="/terms-of-service" className="underline">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
