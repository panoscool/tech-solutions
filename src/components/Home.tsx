import React from 'react';
import CardGrid from './CardGrid';

function Home() {
  return (
    <div>
      <section className="hero-img" id="home">
        <h1>Welcome To My Site</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
      </section>
      <section className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <CardGrid />
      </section>
      <section className="technologies" id="tech">
        <h1>Technologies</h1>
      </section>
    </div>
  );
}

export default Home;
