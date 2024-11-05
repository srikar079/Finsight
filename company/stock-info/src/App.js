import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import IndustryButtons from './IndustryButtons';
import CompanyDetails from './CompanyDetails';
import AutoComponent from './components/industry/AutoComponent';
import Chemical from './components/industry/Chemical';
import Automobile from './components/industry/AutoMobile';
import OilAndGas from './components/industry/OilAndGas';
import Cement from './components/industry/Cement';
import BusinessProcessManagementAndIT from './components/industry/BusinessProcessManagementAndIT';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndustryButtons />} />
        <Route path="/industry/:industry/:company" element={<CompanyDetails />} />
        <Route path="/industry/AutoComponent" element={<AutoComponent />} />
        <Route path="/industry/Chemical" element={<Chemical />} />
        <Route path="/industry/Automobile" element={<Automobile />} />
        <Route path="/industry/OilAndGas" element={<OilAndGas />} />
        <Route path="/industry/Cement" element={<Cement />} />
        <Route path="/industry/business_process_management_companies_and_IT" element={<BusinessProcessManagementAndIT />} />
      </Routes>
    </Router>
  );
}

export default App;
