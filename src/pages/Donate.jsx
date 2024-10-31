import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
// import '../styles.css'; // Import the styles

function Donate() {
  const location = useLocation();
  const { donationAmount: initialDonationAmount, currency: initialCurrency, donationType: initialDonationType } = location.state || {};

  const [donationAmount, setDonationAmount] = useState(initialDonationAmount || '');
  const [currency, setCurrency] = useState(initialCurrency || 'GHS');
  const [donationType, setDonationType] = useState(initialDonationType || 'monthly');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const publicKey = 'your-paystack-public-key'; // Replace with your Paystack public key

  const amountInKobo = donationAmount * 100; // Paystack expects the amount in kobo (smallest currency unit)

  const handlePaystackSuccessAction = (reference) => {
    // Handle successful payment here
    console.log('Payment successful', reference);
  };

  const handlePaystackCloseAction = () => {
    // Handle payment close action here
    console.log('Payment closed');
  };

  const componentProps = {
    email,
    amount: amountInKobo,
    currency,
    metadata: {
      name,
      phone,
      donationType,
    },
    publicKey,
    text: 'Donate Now',
    onSuccess: handlePaystackSuccessAction,
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="relative bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://nyahomedical.com/wp-content/uploads/2021/07/Nyaho-Tamaklo.jpg"
          alt="Donation Background"
        />
        <div className="absolute inset-0 bg-primary-600/40 mix-blend-multiply" />
      </div>
      <div className="relative max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Support Our Mission
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your contribution helps us enhance access to quality healthcare in Ghana.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Your Phone"
              />
            </div>
            <div>
              <label htmlFor="amount" className="sr-only">
                Donation Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Donation Amount"
              />
            </div>
            <div>
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              >
                <option value="GHS">GHS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                id="recurring"
                name="recurring"
                type="checkbox"
                checked={donationType === 'monthly'}
                onChange={(e) => setDonationType(e.target.checked ? 'monthly' : 'once')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="recurring" className="ml-2 block text-sm text-gray-900">
                Make this a monthly donation
              </label>
            </div>
          </div>
          <div>
            <PaystackButton {...componentProps} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" />
          </div>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900">Why Support Us?</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>🌟 <strong>Impact:</strong> Your donation directly impacts the lives of those in need by providing access to quality healthcare.</li>
            <li>🌟 <strong>Transparency:</strong> We ensure that every contribution is used effectively to support our mission.</li>
            <li>🌟 <strong>Community:</strong> Join a community of supporters who are passionate about making a difference.</li>
            <li>🌟 <strong>Innovation:</strong> Help us drive innovation in healthcare through research and development.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Donate;