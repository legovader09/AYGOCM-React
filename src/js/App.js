import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './navigation/NavBar';
import * as Pages from './pages/index';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/cardmaker" element={<Pages.CardMaker />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  </Router>
);

export default App;
