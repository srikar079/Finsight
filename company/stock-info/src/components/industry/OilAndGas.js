import React from 'react';
import { useNavigate } from 'react-router-dom';

const companies = ["Reliance+Industries", "Oil+and+Natural+Gas+Corporation", "Indian+Oil+Corporation", "Bharat+Petroleum+Corporation", "Hindustan+Petroleum+Corporation"];

const OilAndGas = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Top Oil and Gas Companies</h1>
      <div className="grid grid-cols-1 gap-4">
        {companies.map((company, index) => (
          <button
            key={index}
            className="p-4 bg-green-500 text-white rounded"
            onClick={() => navigate(`/industry/OilAndGas/${company.toLowerCase()}`)}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OilAndGas;
