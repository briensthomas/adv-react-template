import React from 'react';
import { BrowserRouter as Router, 
  Routes, 
  Route, 
  NavLink } from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route element={<Layout />}>

            <Route />
        </Routes>
    </Router>
  );
}
