import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FeedbackForm from './components/feedback';


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<FeedbackForm />} />
       
      </Routes>
    </Router>
  );
};

export default App;
