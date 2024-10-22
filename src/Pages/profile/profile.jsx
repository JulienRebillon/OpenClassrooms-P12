// import React from "react";
// import './profile.css';


// import SideBar from "../../Components/sidebar/sidebar"
// import Aside from "../../Components/aside/aside"

// import Header from "../../Components/header/header";
// import Welcome from "../../Components/welcome/welcome";
// import MainChart from "../../Components/mainChart/mainChart";
// import SimpleLineChart from "../../Components/lineChart/lineChart";
// import SimpleRadarChart from "../../Components/radarChart/radarChart";
// import SimpleRadialChart from "../../Components/radialChart/radialChart";



// const Profile = () => {
//     return <div>
//         <>
//             <Header />

//             <main>

//                 <div className="sideBar_container">

//                     <SideBar />

//                 </div>

//                 <div className="center_container">

//                     <div className="welcome_container">

//                         <Welcome />

//                     </div>


//                     <div className="mainChart_container">

//                         <MainChart />

//                     </div>

//                     <div className="charts_container">

//                         <SimpleLineChart />

//                         <SimpleRadarChart />

//                         <SimpleRadialChart />

//                     </div>

//                 </div>

//                 <aside className="aside_container">
                    
//                     <Aside />

//                 </aside>


//             </main>
            
            
            
//         </>

//     </div>;
// };
  
//  export default Profile;


// -----------------------------

// import React, { useEffect, useState } from "react";
// import './profile.css';
// import axios from 'axios';

// // Import mock data from the Data folder
// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../Data/data';

// import SideBar from "../../Components/sidebar/sidebar";
// import Aside from "../../Components/aside/aside";
// import Header from "../../Components/header/header";
// import Welcome from "../../Components/welcome/welcome";
// import MainChart from "../../Components/mainChart/mainChart";
// import SimpleLineChart from "../../Components/lineChart/lineChart";
// import SimpleRadarChart from "../../Components/radarChart/radarChart";
// import SimpleRadialChart from "../../Components/radialChart/radialChart";

// const Profile = () => {
//     const [useMock, setUseMock] = useState(true); // State to switch between mock and API data
//     const [data, setData] = useState({}); // Object to hold all fetched data

//     useEffect(() => {
//         const fetchData = async () => {
//             if (useMock) {
//                 // Use mock data
//                 console.log("Using mock data:");
//                 console.log("User Main Data:", USER_MAIN_DATA);
//                 console.log("User Activity:", USER_ACTIVITY);
//                 console.log("User Average Sessions:", USER_AVERAGE_SESSIONS);
//                 console.log("User Performance:", USER_PERFORMANCE);
                
//                 setData({
//                     userData: USER_MAIN_DATA[0], // Assuming user ID 12 for mock
//                     activityData: USER_ACTIVITY[0], // Assuming user ID 12 for mock
//                     averageSessionsData: USER_AVERAGE_SESSIONS[0], // Assuming user ID 12 for mock
//                     performanceData: USER_PERFORMANCE[0] // Assuming user ID 12 for mock
//                 });
//             } else {

//                 // Fetch data from API
//                 try {
//                     const userId = 12; // Replace with dynamic user ID as needed
//                     const [userData, activityData, averageSessionsData, performanceData] = await Promise.all([
//                         axios.get(`http://localhost:3000/user/${userId}`),
//                         axios.get(`http://localhost:3000/user/${userId}/activity`),
//                         axios.get(`http://localhost:3000/user/${userId}/average-sessions`),
//                         axios.get(`http://localhost:3000/user/${userId}/performance`)
//                     ]);

//                     // Log the fetched data
//                     console.log("Fetched User Data:", userData.data);
//                     console.log("Fetched Activity Data:", activityData.data);
//                     console.log("Fetched Average Sessions Data:", averageSessionsData.data);
//                     console.log("Fetched Performance Data:", performanceData.data);

//                     // Set the fetched data in the state
//                     setData({
//                         userData: userData.data,
//                         activityData: activityData.data,
//                         averageSessionsData: averageSessionsData.data,
//                         performanceData: performanceData.data,
//                     });
//                 } catch (error) {
//                     console.error('Error fetching data:', error);
//                 }
//             }
//         };

//         fetchData();
//     }, [useMock]); // Fetch data whenever `useMock` changes

//     return (
//         <div>
//             <Header />
            
//             <main>
//                 <div className="sideBar_container">
//                     <SideBar />
//                 </div>
//                 <div className="center_container">
//                     <div className="welcome_container">
//                         <Welcome />
//                     </div>
//                     <div className="mainChart_container">
//                         <MainChart data={data.activityData || []} /> {/* Pass data as needed */}
//                     </div>
//                     <div className="charts_container">
//                         <SimpleLineChart data={data.averageSessionsData || []} /> {/* Pass data as needed */}
//                         <SimpleRadarChart data={data.performanceData || []} /> {/* Pass data as needed */}
//                         <SimpleRadialChart data={data.userData || {}} /> {/* Pass data as needed */}
//                     </div>
//                 </div>
//                 <aside className="aside_container">
//                     <button id="switch" onClick={() => setUseMock(!useMock)}>
//                         Switch to {useMock ? 'API' : 'Mock'} Data
//                     </button>
//                     <Aside />
//                 </aside>
//             </main>
//         </div>
//     );
// };

// export default Profile;


// ------------------------------------------

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters
import axios from "axios";
import './profile.css';

// Import mock data
import { 
    USER_MAIN_DATA, 
    USER_ACTIVITY, 
    USER_AVERAGE_SESSIONS, 
    USER_PERFORMANCE 
} from '../../Data/data'; // Adjust the import path as needed

import SideBar from "../../Components/sidebar/sidebar";
import Aside from "../../Components/aside/aside";
import Header from "../../Components/header/header";
import Welcome from "../../Components/welcome/welcome";
import MainChart from "../../Components/mainChart/mainChart";
import SimpleLineChart from "../../Components/lineChart/lineChart";
import SimpleRadarChart from "../../Components/radarChart/radarChart";
import SimpleRadialChart from "../../Components/radialChart/radialChart";

const Profile = () => {
    const [useMock, setUseMock] = useState(true);
    const [data, setData] = useState({}); // Initialize as an empty object
    const { id } = useParams(); // Get user ID from URL parameters

    useEffect(() => {
        const fetchData = async () => {
            if (useMock) {
                // Use mock data
                console.log("Using mock data:");
                const mockData = {
                    userData: USER_MAIN_DATA.find(user => user.id === parseInt(id)),
                    activityData: USER_ACTIVITY.find(user => user.userId === parseInt(id)),
                    averageSessionsData: USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(id)),
                    performanceData: USER_PERFORMANCE.find(user => user.userId === parseInt(id)),
                };
                console.log("Mock User Data:", mockData.userData);
                setData(mockData); // Set mock data to state
            } else {
                try {
                    const userId = id; // Use the dynamic userId from the URL
                    const [userData, activityData, averageSessionsData, performanceData] = await Promise.all([
                        axios.get(`http://localhost:3000/user/${userId}`),
                        axios.get(`http://localhost:3000/user/${userId}/activity`),
                        axios.get(`http://localhost:3000/user/${userId}/average-sessions`),
                        axios.get(`http://localhost:3000/user/${userId}/performance`),
                    ]);
                    console.log("Fetched User Data:", userData.data);
                    setData({
                        userData: userData.data,
                        activityData: activityData.data,
                        averageSessionsData: averageSessionsData.data,
                        performanceData: performanceData.data,
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, [useMock, id]);

    return (
        <div>
            <>
                <Header />
                <main>
                    <div className="sideBar_container">
                        <SideBar />
                    </div>
                    <div className="center_container">
                        <div className="welcome_container">
                            {data.userData && ( // Check if userData exists
                                <Welcome firstName={data.userData.userInfos.firstName} /> // Pass the firstName prop
                            )}
                        </div>
                        <div className="mainChart_container">
                            <MainChart />
                        </div>
                        <div className="charts_container">
                            <SimpleLineChart />
                            <SimpleRadarChart />
                            <SimpleRadialChart />
                        </div>
                    </div>
                    <aside className="aside_container">
                        <button id="switch" onClick={() => setUseMock(!useMock)}>
                            Switch to {useMock ? 'API' : 'Mock'} Data
                        </button>
                        {data.userData && (
                            <Aside 
                                calories={data.userData.keyData.calorieCount}
                                protein={data.userData.keyData.proteinCount}
                                carbohydrates={data.userData.keyData.carbohydrateCount}
                                lipids={data.userData.keyData.lipidCount}
                            />
                        )}
                    </aside>
                </main>
            </>
        </div>
    );
};

export default Profile;
