import React from "react";
import './aside.css';

import Calories from '../../images/Calories.png';
import Proteins from '../../images/Proteins.png';
import Glucids from '../../images/Glucids.png';
import Lipids from '../../images/Lipids.png';

const Aside = ({ calories, protein, carbohydrates, lipids }) => {
    return (
        <div className="aside_content">
            <div className="aside_card">
                <img src={Calories} alt="Icone Calories" className="caloriesIcon"/>
                <div className="aside_desc">
                    <p className="aside_desc_Value">{calories}kCal</p>
                    <p className="aside_desc_Unit">Calories</p>
                </div>
            </div>

            <div className="aside_card">
                <img src={Proteins} alt="Icone Proteines" className="proteinsIcon"/>
                <div className="aside_desc">
                    <p className="aside_desc_Value">{protein}g</p>
                    <p className="aside_desc_Unit">Proteines</p>
                </div>
            </div>

            <div className="aside_card">
                <img src={Glucids} alt="Icone Glucides" className="glucidsIcon"/>
                <div className="aside_desc">
                    <p className="aside_desc_Value">{carbohydrates}g</p>
                    <p className="aside_desc_Unit">Glucides</p>
                </div>
            </div>

            <div className="aside_card">
                <img src={Lipids} alt="Icone Lipides" className="LipidsIcon"/>
                <div className="aside_desc">
                    <p className="aside_desc_Value">{lipids}g</p>
                    <p className="aside_desc_Unit">Lipides</p>
                </div>
            </div>
        </div>
    );
};

export default Aside;
