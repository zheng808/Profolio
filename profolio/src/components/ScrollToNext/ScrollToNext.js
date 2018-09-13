import React, { Component } from 'react';

import './style.scss';

class ScrollToNext extends Component {

  render() {
    return (
      <div className="scroll-to-next">
        <div className="arrow">
          <button className="fas fa-chevron-down fa-2x" href="#" />
        </div>
      </div>
    );
  }
}


export default ScrollToNext;
