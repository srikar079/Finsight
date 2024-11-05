import React from 'react';
import RenderObject from './RenderObject';

const RenderArray = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="ml-4">
      {data.map((item, index) => (
        <div key={index} className="mb-2">
          {typeof item === 'object' ? <RenderObject data={item} /> : item}
        </div>
      ))}
    </div>
  );
};

export default RenderArray;
