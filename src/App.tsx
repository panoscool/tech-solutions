import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Footer />
    </div>
  );
}

export default App;
