import React from 'react';
import './style.scss';

const PortfolioPage = (props, context) => {

  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          {/* <PortfolioItem /> */}
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
         Drive With Friends 
      </div>
      <div className='portfolio-item__desc'>
        A multi-player car racing game done by Swift and NodeJS. It is my final graduation design project that will be released to App Store soon. 
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-node"></i>
        <i className="fab fa-app-store-ios"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://kennethio.com/dwf">Learn More</a>
      </div>
    </div>
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
         Lux Online Photo Editor
      </div>
      <div className='portfolio-item__desc'>
        An Online Photo Editor can do filters, crop, reisze, rotate, flip. This project is done by AngularJS 2, CanmanJS and Jquery library.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-node-js"></i>
        <i className="fab fa-angular"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://lux.acdsee.com/">Try me</a>
      </div>
    </div>
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
         Duck Data Collector Web App
      </div>
      <div className='portfolio-item__desc'>
        A duck data feeding collector app that can record users' feeding hisotry and food type. Only using NodeJS and Mysql, and deployed to Heroku
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-node"></i>
        <i className="fas fa-database"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://duckdatacollector.herokuapp.com/">Try me</a>
      </div>
    </div>
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
         Subsaddit Twitter App
      </div>
      <div className='portfolio-item__desc'>
        A blog post twitter app that users can submit a blog, write comments and give upvotes and downvotes to a blog. Using PHP and MySQL
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-php"></i>
        <i className="fas fa-database"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zheng808/CSC370Project--Subsaiddit">Try me</a>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};


export default PortfolioPage;