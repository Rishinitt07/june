import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Landing';
import Quiz from './Quiz';
import Timeline from './Timeline';
import ProposalPage from './ProposalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/proposal" element={<ProposalPage />} />
      </Routes>
    </Router>
  );
}

export default App;

