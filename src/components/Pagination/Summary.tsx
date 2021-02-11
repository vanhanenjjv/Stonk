import React from 'react';


interface SummaryProps {
  text?: string;
}

const Summary: React.FC<SummaryProps> = () => {
  return (
    <div>
      <p className="text-sm text-gray-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">10</span>
        of
        <span className="font-medium">97</span>
        results
      </p>
    </div>
  );
};


export default Summary;
