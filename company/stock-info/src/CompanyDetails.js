// src/CompanyDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

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

const CompanyDetails = () => {
  const { company } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://stock.indianapi.in/stock?name=${company}`;
    const options = {
      method: 'GET',
      headers: {
        'x-api-key': 'sk-live-V2ChUuxoU33fN9zrWszRipWFAr16OovDR3a7DEIC',
        'authDomain': 'https://stock.indianapi.in/'
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();

        const { financials, stockFinancialData, initialStockFinancialData, ...restData } = result;
        setData(restData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [company]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Stock Information for {data?.companyName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Basic Information */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><span className="font-medium">Company Name:</span> {data?.companyName}</p>
                  <p><span className="font-medium">Industry:</span> {data?.industry}</p>
                  <p><span className="font-medium">Year High:</span> ₹{data?.yearHigh}</p>
                  <p><span className="font-medium">Year Low:</span> ₹{data?.yearLow}</p>
                </div>
                <div>
                  <p><span className="font-medium">Current Price (NSE):</span> ₹{data?.currentPrice?.NSE}</p>
                  <p><span className="font-medium">Current Price (BSE):</span> ₹{data?.currentPrice?.BSE}</p>
                  <p><span className="font-medium">Percent Change:</span> {data?.percentChange}%</p>
                </div>
              </div>
            </section>

            {/* Company Profile */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Company Profile</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>{data?.companyProfile?.companyDescription}</p>
              </div>
            </section>

            {/* Risk Meter */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Risk Assessment</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><span className="font-medium">Category:</span> {data?.riskMeter?.categoryName}</p>
                <p><span className="font-medium">Standard Deviation:</span> {data?.riskMeter?.stdDev?.toFixed(2) || 'N/A'}</p>
              </div>
            </section>

            {/* Shareholding Pattern */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Shareholding Pattern</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <RenderArray data={data?.shareholding} />
              </div>
            </section>

            {/* Future Expiry Dates */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Future Expiry Dates</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                {data?.futureExpiryDates?.join(', ') || 'No data available'}
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyDetails;
