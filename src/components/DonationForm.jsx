import { useState } from 'react';

const DONATION_TIERS = [
  { amount: 100, label: 'GH₵100' },
  { amount: 250, label: 'GH₵250' },
  { amount: 500, label: 'GH₵500' },
  { amount: 1000, label: 'GH₵1000' }
];

function DonationForm() {
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Payment processing would go here
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
                  ? 'bg-primary-600 text-white'
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
        <label className="text-lg font-medium text-gray-900">Custom Amount (GH₵)</label>
        <div className="mt-2">
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="recurring" className="ml-2 text-gray-900">
          Make this a monthly donation
        </label>
      </div>

      <button
        type="submit"
        disabled={isProcessing || !amount}
        className="w-full px-6 py-3 text-white bg-primary-600 rounded-md hover:bg-primary-700 disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : 'Donate Now'}
      </button>

      <p className="text-sm text-gray-500 text-center">
        Your donation supports our mission to enhance access to quality healthcare in Ghana.
      </p>
    </form>
  );
}

export default DonationForm;