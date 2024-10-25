import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const DONATION_TIERS = [
  { amount: 25, label: '$25' },
  { amount: 50, label: '$50' },
  { amount: 100, label: '$100' },
  { amount: 250, label: '$250' }
];

function DonationForm() {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Stripe integration would go here
      console.log('Processing donation:', { amount, isRecurring });
    } catch (error) {
      console.error('Donation failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div>
        <label className="text-lg font-medium text-gray-900">Select Amount</label>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {DONATION_TIERS.map(({ amount: tier, label }) => (
            <button
              key={tier}
              type="button"
              className={`px-4 py-3 text-sm font-medium rounded-md ${
                amount === tier
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => setAmount(tier)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-lg font-medium text-gray-900">Custom Amount</label>
        <div className="mt-2">
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="recurring"
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="recurring" className="ml-2 text-gray-900">
          Make this a monthly donation
        </label>
      </div>

      <button
        type="submit"
        disabled={isProcessing || !amount}
        className="w-full px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : 'Donate Now'}
      </button>
    </form>
  );
}

export default DonationForm;