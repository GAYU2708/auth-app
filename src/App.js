import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [details, setDetails] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            } 
          />
          <Route path='/login' element={<Login setDetails={setDetails} />} />
          <Route
            path='/home'
            element={
              <PrivateRoute>
                {details ? <Home details={details} /> : <Navigate to="/login" />}
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
