// src/CompanyDetails.js
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// //import { useStockContext } from './StockContext';
// import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

// const CompanyDetails = () => {
//   const { company } = useParams();
//   const { stockData, fetchCompanyData } = useStockContext();

//   useEffect(() => {
//     fetchCompanyData(company);
//   }, [company, fetchCompanyData]);

//   if (!stockData) return <p>Loading company data...</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Stock Information for {stockData.companyName}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-6">
//             {/* Basic Information */}
//             <section>
//               <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <p><span className="font-medium">Company Name:</span> {stockData.companyName}</p>
//                   <p><span className="font-medium">Industry:</span> {stockData.industry}</p>
//                   <p><span className="font-medium">Year High:</span> ₹{stockData.yearHigh}</p>
//                   <p><span className="font-medium">Year Low:</span> ₹{stockData.yearLow}</p>
//                 </div>
//                 <div>
//                   <p><span className="font-medium">Current Price (NSE):</span> ₹{stockData.currentPrice?.NSE}</p>
//                   <p><span className="font-medium">Current Price (BSE):</span> ₹{stockData.currentPrice?.BSE}</p>
//                   <p><span className="font-medium">Percent Change:</span> {stockData.percentChange}%</p>
//                 </div>
//               </div>
//             </section>

//             {/* Company Profile */}
//             <section>
//               <h2 className="text-xl font-semibold mb-2">Company Profile</h2>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <p>{stockData.companyProfile?.companyDescription}</p>
//               </div>
//             </section>

//             {/* Risk Meter */}
//             <section>
//               <h2 className="text-xl font-semibold mb-2">Risk Assessment</h2>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <p><span className="font-medium">Category:</span> {stockData.riskMeter?.categoryName}</p>
//                 <p><span className="font-medium">Standard Deviation:</span> {stockData.riskMeter?.stdDev.toFixed(2)}</p>
//               </div>
//             </section>

//             {/* Shareholding */}
//             <section>
//               <h2 className="text-xl font-semibold mb-2">Shareholding Pattern</h2>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 {stockData.shareholding?.map((holder, index) => (
//                   <div key={index}>{holder}</div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default CompanyDetails;
