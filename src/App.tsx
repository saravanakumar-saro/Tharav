import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutePage from './Route/route';

const App: React.FC = () => (
  <Router>
    <RoutePage />
  </Router>
);

export default App;

