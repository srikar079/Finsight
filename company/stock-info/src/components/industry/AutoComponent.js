import React from 'react';
import { useNavigate } from 'react-router-dom';

const companies = ["Bosch", "TVS", "Mahindra", "Honda", "Kinetic"];

const AutoComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Top AutoComponent Companies</h1>
      <div className="grid grid-cols-1 gap-4">
        {companies.map((company, index) => (
          <button
            key={index}
            className="p-4 bg-green-500 text-white rounded"
            onClick={() => navigate(`/industry/AutoComponent/${company.toLowerCase()}`)}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AutoComponent;
