import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentContext } from './utils/ContentContext';
import Consent from './utils/Consent';
import Loader from './utils/Loader';
import NavBar from './navigation/NavBar';
import * as Pages from './pages/index';

const jsonURL = 'https://api.jsonbin.io/v3/b/62d317cc5ecb581b56c0897d/latest';

const App = () => {
  const [jsonData, setData] = useState();
  useEffect(() => {
    fetch(jsonURL)
      .then((res) => res.json())
      .then((data) => setData(data.record))
      .catch(setData(''));
  }, []);

  return (jsonData
    ? (
      <ContentContext.Provider value={jsonData}>
        <Consent />
        <Router>
          <NavBar />
          <Routes>
            {Pages.allRoutes.map((route) => (
              <Route key={route.key} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </ContentContext.Provider>
    )
    : <Loader />
  );
};

export default App;
