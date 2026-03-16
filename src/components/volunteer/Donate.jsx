import React, { useState } from 'react';

export default function Donate() {
  // 1. STATE MANAGEMENT
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  // 2. HANDLERS
  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom input if preset is clicked
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(value === '' ? 0 : parseInt(value));
    }
  };

  // 3. DYNAMIC BUTTON TEXT
  const displayAmount = customAmount !== '' ? customAmount : selectedAmount;
  const buttonText = `Give Now - $${displayAmount || 0}${isMonthly ? ' /month' : ''}`;

  return (
    <section className="relative bg-[#fbf9fa] min-h-screen py-20 px-6 overflow-hidden">
      {/* Decorative Background Elements (Matching VolunteerHero) */}
      <Circle size={400} color="bg-purple-200/40" className="-top-[10%] -left-[10%]" />
      <Circle size={250} color="bg-pink-200/40" className="bottom-[10%] -right-[5%]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold text-[#A58CE0] mb-4 shadow-sm">
            Make a Difference
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#3A3556] mb-4">
            Make a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3]">Donation</span>
          </h1>
          <p className="text-[#87839D] text-lg max-w-2xl mx-auto">
            Your generosity directly supports programs and services for LGBTQ+ newcomers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: DONATION FORM */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl shadow-purple-900/5 border border-purple-50">
            
            {/* Donation Type Toggle */}
            <div className="flex p-1 bg-gray-100 rounded-full mb-8">
              <button
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                  !isMonthly 
                    ? 'bg-white text-[#3A3556] shadow-sm' 
                    : 'text-[#87839D] hover:text-[#3A3556]'
                }`}
              >
                One-Time Donation
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                  isMonthly 
                    ? 'bg-white text-[#3A3556] shadow-sm' 
                    : 'text-[#87839D] hover:text-[#3A3556]'
                }`}
              >
                Monthly Donation
              </button>
            </div>

            {/* Select Amount */}
            <h3 className="text-sm font-bold text-[#3A3556] mb-4 uppercase tracking-wider">Select Amount (CAD)</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {presetAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePresetClick(amount)}
                  className={`py-3 rounded-xl font-bold border-2 transition-all ${
                    selectedAmount === amount && customAmount === ''
                      ? 'border-[#A58CE0] bg-purple-50 text-[#A58CE0]'
                      : 'border-gray-100 bg-white text-[#87839D] hover:border-purple-200 hover:bg-purple-50/50'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87839D] font-bold">$</span>
              <input
                type="text"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={handleCustomChange}
                className={`w-full pl-8 pr-4 py-3 rounded-xl border-2 font-bold text-[#3A3556] focus:outline-none transition-all ${
                  customAmount !== '' 
                    ? 'border-[#A58CE0] bg-purple-50' 
                    : 'border-gray-100 bg-gray-50 focus:border-[#A58CE0] focus:bg-white'
                }`}
              />
            </div>

            {/* Ways to Give */}
            <h3 className="text-sm font-bold text-[#3A3556] mb-4 uppercase tracking-wider">Ways to Give</h3>
            <div className="space-y-3 mb-8">
              {[
                { id: 'credit', label: 'Credit/Debit Card (Online)' },
                { id: 'bank', label: 'Bank Transfer' },
                { id: 'cheque', label: 'Cheque by Mail' }
              ].map((method) => (
                <label 
                  key={method.id} 
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === method.id 
                      ? 'border-[#A58CE0] bg-purple-50' 
                      : 'border-gray-100 bg-white hover:border-purple-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={() => setPaymentMethod(method.id)}
                    className="w-5 h-5 text-[#A58CE0] focus:ring-[#A58CE0] border-gray-300"
                  />
                  <span className={`ml-3 font-semibold ${paymentMethod === method.id ? 'text-[#A58CE0]' : 'text-[#3A3556]'}`}>
                    {method.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <button className="w-full bg-gradient-to-r from-[#A58CE0] to-[#EFAEC3] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-1">
              {buttonText}
            </button>
            <p className="text-center text-xs text-[#87839D] mt-4">
              Secure payment processing. You will receive a tax receipt via email.
            </p>
          </div>

          {/* RIGHT COLUMN: YOUR IMPACT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-gradient-to-br from-[#3A3556] to-[#2a2640] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Subtle background graphic inside the impact card */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
              
              <h2 className="font-display text-2xl font-bold mb-6 text-[#EFAEC3]">Your Impact</h2>
              
              <div className="space-y-6">
                <ImpactItem 
                  amount="$25" 
                  desc="One wellness circle session" 
                  isActive={selectedAmount === 25} 
                />
                <ImpactItem 
                  amount="$50" 
                  desc="Workshop materials & resources" 
                  isActive={selectedAmount === 50} 
                />
                <ImpactItem 
                  amount="$100" 
                  desc="Community dinner for 20 people" 
                  isActive={selectedAmount === 100} 
                />
                <ImpactItem 
                  amount="$250" 
                  desc="Monthly transportation support" 
                  isActive={selectedAmount === 250} 
                />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-300 leading-relaxed">
                  "Every contribution, big or small, helps create a safe and welcoming space for those who need it most."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-component for Impact List
function ImpactItem({ amount, desc, isActive }) {
  return (
    <div className={`flex items-start transition-all duration-300 ${isActive ? 'scale-105 transform' : 'opacity-80'}`}>
      <div className={`flex-shrink-0 font-bold px-3 py-1 rounded-lg mr-4 ${
        isActive ? 'bg-[#EFAEC3] text-[#3A3556]' : 'bg-white/10 text-white'
      }`}>
        {amount}
      </div>
      <p className={`mt-1 font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
        {desc}
      </p>
    </div>
  );
}

// Sub-component for decorative circles (Reused from VolunteerHero)
function Circle({ size, color, className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none blur-3xl ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}