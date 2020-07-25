import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
    </div>
  );
}

export default App;
