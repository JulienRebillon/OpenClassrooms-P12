import React from "react";
import './profile.css';

import SideBar from "../../Components/sidebar/sidebar"

import Header from "../../Components/header/header";



const Profile = () => {
    return <div>
        <>
            <Header />

            <main>

                <div className="sideBar_container">

                    <SideBar />

                </div>

                <div className="center_container">

                    <div className="welcome_container">


                    </div>


                    <div className="mainChart_container">

                    </div>

                    <div className="charts_container">

                    </div>

                </div>

                <aside className="aside_container">

                </aside>


            </main>
            
            
            
        </>

    </div>;
};
  
 export default Profile;