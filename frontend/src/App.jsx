import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          {/* Add more routes here as your app grows */}
        </Route>
        <Route path="/" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
