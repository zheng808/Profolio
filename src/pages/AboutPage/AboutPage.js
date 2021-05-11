import React from 'react';
import './style.css';
import ScrollToNext from '../../components/ScrollToNext';

const AboutPage = (props, context) => {

  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About Myself</h1>
        <div className="about-wrapper">
          <div className="about-content">
          	<p>
          	I am currently working at Allscripts as Software Engineer. I love doing web development, IOS, and automation testing. 
          	I built this site for demostrating any projects that I have done previously, and tell little bit backgroud for myself. 
          	</p>
          	<p>
          	My favourite technologies are C#, Python, Javascript, NodeJS, and Swift. I love cooking, snowboarding, playing League of Legends and PS4 games.
          	I am obsessed with making the web look awsome with CSS,foundation,and Bootstrap. 
          	</p>
          	<p>
          	I am currently learning React. This profolio website is done by React, and I had so much fun learning and keeping myself updated.I would like to pursue my career and spend time exploring the corners of BC.
          	</p>
          </div>
        </div>
      </div>
       <ScrollToNext/>
    </div>
    
  );

}

export default AboutPage;