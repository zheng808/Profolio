import React from 'react';
import './style.css';

const AboutPage = (props, context) => {

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About Myself</h1>
        <div className="about-wrapper">
          <div className="about-content">
          	<p>
          	I am a recent graduate student from University of Victoria. I love doing web, iOS, and automation testing. 
          	I built this site for demostrating any projects that I have done previously, and tell little bit backgroud for myself. 
          	</p>
          	<p>
          	My favourite technologies are Java, Python, Javascript, NodeJS, and Swift. I love cooking, snowboarding, playing League of Legends and PS4 games.
          	I am obsessed with making the web look awsome with CSS,foundation,and Bootstrap. 
          	</p>
          	<p>
          	I am currently learning React, and Django. This profolio website is done by React, and I had so much fun learning and keeping myself updated.
          	</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AboutPage;