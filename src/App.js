import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookAppointment from './components/BookAppointment/BookAppointment';
import DoctorList from './components/DoctorDetails/DoctorList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookAppointment />} />
        <Route path="/doctors" element={<DoctorList />} />
      </Routes>
    </Router>
  );
};

export default App;
