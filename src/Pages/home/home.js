import React from "react";
// import '../home.css';
import Header from '../../Components/header/header';
import Welcome from '../../Components/welcome/welcome';
import Sidebar from '../../Components/sidebar/sidebar';
import MainChart from '../../Components/mainChart/mainChart';
import Graphs from '../../Components/graphs/graphs';
import Aside from '../../Components/aside/aside';


const Home = () => {
    return <div>Home Page
        <>
            <Header />
            <Welcome />
            <Sidebar />
            <MainChart />
            <Graphs />
            <Aside />
            
        </>

    </div>;
};
  
 export default Home;