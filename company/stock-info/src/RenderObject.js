import React from 'react';
import RenderArray from './RenderArray';

const RenderObject = ({ data }) => {
  if (!data || typeof data !== 'object') return null;

  return (
    <div className="ml-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-medium">{key}: </span>
          {typeof value === 'object' ? (
            Array.isArray(value) ? (
              <RenderArray data={value} />
            ) : (
              <RenderObject data={value} />
            )
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default RenderObject;
