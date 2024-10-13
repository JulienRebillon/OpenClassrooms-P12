import React from "react";
import './profile.css';

import SideBar from "../../Components/sidebar/sidebar"
import Aside from "../../Components/aside/aside"

import Header from "../../Components/header/header";
import Welcome from "../../Components/welcome/welcome";
import MainChart from "../../Components/mainChart/mainChart";
import Graphs from "../../Components/graphs/graphs";



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

                        <Welcome />

                    </div>


                    <div className="mainChart_container">

                        <MainChart />

                    </div>

                    <div className="charts_container">

                        <Graphs />

                    </div>

                </div>

                <aside className="aside_container">
                    
                    <Aside />

                </aside>


            </main>
            
            
            
        </>

    </div>;
};
  
 export default Profile;