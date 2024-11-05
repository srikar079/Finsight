import React from 'react';
import { useNavigate } from 'react-router-dom';

const companies = ["Tata+Motors", "Maruti+Suzuki", "Hero+Motocorp", "Ashok+Leyland", "Bajaj+Auto"];

const Automobile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Top Automobile Companies</h1>
      <div className="grid grid-cols-1 gap-4">
        {companies.map((company, index) => (
          <button
            key={index}
            className="p-4 bg-green-500 text-white rounded"
            onClick={() => navigate(`/industry/Automobile/${company.toLowerCase()}`)}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Automobile;
