import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetails/MovieDetail';

import Login from './containers/Login';
import Register from './containers/Register';
import LandingPage from './containers/LandingPage';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <div className="App">
        <Router>
          <div className='container'>  
            <Routes>
              <Route exact path='/' element={<LandingPage/>}/>
              <Route exact path='/Login' element={<Login/>}/>
              <Route exact path='Register' element={<Register/>}/>
              <Route exact path='/Home' element={<Home/>}/>
              <Route exact path='/movie/:imdbID' element={<MovieDetail/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
