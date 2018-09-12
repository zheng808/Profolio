import React from 'react';
import './style.css';
import '../../libs/fontawesome/fontawesome-all.min.js'

const LandingPage = (props, context) => {
  //const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div className="landing-page">
      <main>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I am Zheng Li</div>
          <div className="tagline">
            Recent Graduate Student | Full Stack Web Dev | IOS Swift Developer
          </div>
        </div>
       <div className="social-icons animate-icons">
         <a target="_blank" href="https://github.com/zheng808"><i className="fab fa-github"></i></a>
         <a target="_blank" href="https://www.linkedin.com/in/zhengli808/"><i className="fab fa-linkedin"></i></a>
      </div>
      </main>
     
    </div>
    
  );
};


export default LandingPage;
