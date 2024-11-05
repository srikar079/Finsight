import React from 'react';
import { useNavigate } from 'react-router-dom';

const industries = [
  'Automobile', 'Chemical', 'OilAndGas', 'AutoComponent', 'cement', 'hi', 'business_process_management_companies_and_IT', 'Metals'
];

const IndustryButtons = () => {
  const navigate = useNavigate();

  const handleButtonClick = (industry) => {
    navigate(`/industry/${industry}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-semibold mb-6">Select an Industry</h1>
      <div className="grid grid-cols-2 gap-4 max-w-md">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => handleButtonClick(industry)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {industry}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndustryButtons;
