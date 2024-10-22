import React from 'react';
import './welcome.css';

import clap from '../../images/Clap.png';

const Welcome = ({ firstName }) => { // Accept firstName as a prop
  return (
    <div className="welcome_content">
        <h1>Bonjour <span>{firstName}</span></h1>
        
        <p>Félicitation ! Vous avez explosé vos objectifs hier<span><img src={clap} alt="Icone Clapping hands" className="clapIcon"/></span></p>
    </div>
  );
};

export default Welcome;
