import React, { useState } from "react";
import './aside.css';

import Calories from '../../images/Calories.png';
import Proteins from '../../images/Proteins.png';
import Glucids from '../../images/Glucids.png';
import Lipids from '../../images/Lipids.png';

// import calorieCount from '../../API/api';
// import proteinCount from '../../API/api';
// import carbohydrateCount from '../../API/api';
// import lipidCount from '../../API/api';

const Aside = () => {
    return (
        <div className="aside_content">

            <div className="aside_card">
                <img src={Calories} alt="Icone Calories" className="caloriesIcon"/>
                <div className="aside_desc">
                    {/* <p className="aside_desc_Value">{calorieCount}kCal</p> */}

                    <p className="aside_desc_Value">1930kCal</p>

                    <p className="aside_desc_Unit">Calories</p>
                </div>
            </div>

            <div className="aside_card">
                <img src={Proteins} alt="Icone Proteines" className="proteinsIcon"/>
                <div className="aside_desc">
                    {/* <p className="aside_desc_Value">{proteinCount}g</p> */}
                    
                    <p className="aside_desc_Value">155g</p>

                    <p className="aside_desc_Unit">Proteines</p>
                </div>
            </div>

            <div className="aside_card">
                <img src={Glucids} alt="Icone Glucides" className="glucidsIcon"/>
                <div className="aside_desc">
                    {/* <p className="aside_desc_Value">{carbohydrateCount}g</p> */}

                    <p className="aside_desc_Value">290g</p>

                    <p className="aside_desc_Unit">Glucides</p>
                </div>
            </div>

            <div className="aside_card">
                <img src={Lipids} alt="Icone Lipides" className="LipidsIcon"/>
                <div className="aside_desc">
                    {/* <p className="aside_desc_Value">{lipidCount}g</p> */}

                    <p className="aside_desc_Value">50g</p>

                    <p className="aside_desc_Unit">Lipides</p>
                </div>
            </div>

        </div>
    );
};



export default Aside;
