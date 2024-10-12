

import React from 'react';
import './sidebar.css';

import yoga from '../../images/Yoga.png';
import swimming from '../../images/Swimming.png';
import biking from '../../images/Biking.png';
import weights from '../../images/Weights.png';

const SideBar = () => {
  return (
    <div className="sideBar_content">
        <div className="sideBar_icons">
            <img src={yoga} alt="Icone Yoga" className="yogaIcon"/>
            <img src={swimming} alt="Icone Swimming" className="swimmingIcon"/>
            <img src={biking} alt="Icone Biking" className="bikingIcon"/>
            <img src={weights} alt="Icone Weights" className="weightsIcon"/>
        </div>
        <p>Copyright SportSee2020</p>
    </div>
  );
};

export default SideBar;
