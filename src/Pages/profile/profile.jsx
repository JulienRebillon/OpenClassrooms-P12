

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import './profile.css';

// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../../Data/data'; // Mock data
// import userPerformanceData from '../../Data/userPerformance.json'; // Import the new JSON data
// import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../../API/api';

// import SideBar from "../../Components/sidebar/sidebar";
// import Aside from "../../Components/aside/aside";
// import Header from "../../Components/header/header";
// import Welcome from "../../Components/welcome/welcome";
// import MainChart from "../../Components/mainChart/mainChart";
// import SimpleLineChart from "../../Components/lineChart/lineChart";
// import SimpleRadarChart from "../../Components/radarChart/radarChart";
// import SimpleRadialChart from "../../Components/radialChart/radialChart";

// // Helper function to extract data safely
// const extractData = (data) => {
//     return data.data ? data.data : data;
// };

// // Helper function to transform performance data safely
// const transformPerformanceData = (performance) => {
//     if (
//         !performance || 
//         !Array.isArray(performance.data) || 
//         performance.data.some(item => item.kind === undefined || item.value === undefined)
//     ) {
//         console.error("Performance data is missing or incomplete:", performance);
//         return { userId: performance.userId || null, kind: performance.kind || {}, data: [] }; // Return empty structure if data is missing
//     }

//     return {
//         userId: performance.userId, // Keep the userId
//         kind: performance.kind,     // Keep the kind mapping
//         data: performance.data.map(item => ({
//             kind: item.kind,
//             value: item.value
//         }))
//     };
// };

// const Profile = ({ isMock }) => {
//     const { id: userId } = useParams();
//     const [userData, setUserData] = useState(null);
//     const [activityData, setActivityData] = useState(null);
//     const [averageSessionsData, setAverageSessionsData] = useState(null);
//     const [performanceData, setPerformanceData] = useState(null);
//     const [useMock, setUseMock] = useState(isMock);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (userId) {
//             if (useMock) {
//                 // Mock data fetching logic
//                 const userData = extractData(USER_MAIN_DATA.find(user => user.id === parseInt(userId)));
//                 setUserData(userData);

//                 const activity = extractData(USER_ACTIVITY.find(user => user.userId === parseInt(userId)));
//                 setActivityData(activity);

//                 const averageSessions = extractData(USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId)));
//                 setAverageSessionsData(averageSessions);

//                 // Extract performance data from the JSON file
//                 const performance = userPerformanceData.find(user => user.userId === parseInt(userId));
//                 console.log("Performance Mock Before Transformation:", performance); // Log raw performance data
//                 const transformedPerformanceData = transformPerformanceData(performance);
//                 console.log("Transformed Mock Performance Data:", transformedPerformanceData); // Log transformed data
//                 setPerformanceData(transformedPerformanceData);

//             } else {
//                 // Fetching data from API logic
//                 const fetchData = async () => {
//                     try {
//                         const user = await fetchUserData(userId);
//                         setUserData(extractData(user));

//                         const activity = await fetchUserActivity(userId);
//                         setActivityData(extractData(activity));

//                         const averageSessions = await fetchUserAverageSessions(userId);
//                         setAverageSessionsData(extractData(averageSessions));

//                         const performance = await fetchUserPerformance(userId);
//                         setPerformanceData(transformPerformanceData(extractData(performance)));
//                     } catch (err) {
//                         setError("Failed to load data. Please try again later.");
//                     }
//                 };
//                 fetchData();
//             }
//         }
//     }, [userId, useMock]);

//     if (error) {
//         return <div className="error-message">{error}</div>;
//     }

//     if (!userData || !activityData || !averageSessionsData || !performanceData) {
//         return <div>Loading...</div>;
//     }

//     // Transform activity data for MainChart
//     const transformedActivityData = activityData && activityData.sessions 
//         ? activityData.sessions.map(session => ({
//             day: session.day.split('-')[2] % 10, 
//             kilogram: session.kilogram,
//             calories: session.calories,
//         })) 
//         : [];

//     // Transform average sessions data for SimpleLineChart
//     const sessionsData = averageSessionsData && averageSessionsData.sessions 
//         ? averageSessionsData.sessions.map(session => ({
//             day: session.day,
//             sessionLength: session.sessionLength,
//         })) 
//         : [];

//     // Transform todayScore for SimpleRadialChart
//     const todayScore = userData?.todayScore || userData?.score || 0;

//     return (
//         <div>
//             <Header />
//             <main>
//                 <div className="sideBar_container">
//                     <SideBar />
//                 </div>
//                 <div className="center_container">
//                     <div className="welcome_container">
//                         {userData && (
//                             <Welcome firstName={userData.userInfos.firstName} />
//                         )}
//                     </div>
//                     <div className="mainChart_container">
//                         <MainChart data={transformedActivityData} /> 
//                     </div>
//                     <div className="charts_container">
//                         <SimpleLineChart sessions={sessionsData} /> 
//                         <SimpleRadarChart performanceData={performanceData} /> 
//                         <SimpleRadialChart todayScore={todayScore} /> 
//                     </div>
//                 </div>
//                 <aside className="aside_container">
//                     <button onClick={() => setUseMock(!useMock)}>
//                         Switch to {useMock ? 'API' : 'Mock'} Data
//                     </button>
//                     {userData && (
//                         <Aside 
//                             calories={userData.keyData.calorieCount}
//                             protein={userData.keyData.proteinCount}
//                             carbohydrates={userData.keyData.carbohydrateCount}
//                             lipids={userData.keyData.lipidCount}
//                         />
//                     )}
//                 </aside>
//             </main>
//         </div>
//     );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './profile.css';

import { getUserData, getActivityData, getAverageSessionsData, getPerformanceData } from '../../Service/service';

import SideBar from "../../Components/sidebar/sidebar";
import Aside from "../../Components/aside/aside";
import Header from "../../Components/header/header";
import Welcome from "../../Components/welcome/welcome";
import MainChart from "../../Components/mainChart/mainChart";
import SimpleLineChart from "../../Components/lineChart/lineChart";
import SimpleRadarChart from "../../Components/radarChart/radarChart";
import SimpleRadialChart from "../../Components/radialChart/radialChart";

const Profile = ({ isMock }) => {
    const { id: userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [averageSessionsData, setAverageSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [useMock, setUseMock] = useState(isMock);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userId) {
            const fetchData = async () => {
                try {
                    const user = await getUserData(userId, useMock);
                    setUserData(user);
    
                    const activity = await getActivityData(userId, useMock);
                    setActivityData(activity);
    
                    const averageSessions = await getAverageSessionsData(userId, useMock);
                    setAverageSessionsData(averageSessions);
    
                    const performance = await getPerformanceData(userId, useMock);
                    setPerformanceData(performance);
                } catch (err) {
                    console.error("Error fetching data:", err);  // Log the error details
                    setError("Failed to load data. Please try again later.");
                }
            };
            fetchData();
        }
    }, [userId, useMock]);
    

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!userData || !activityData || !averageSessionsData || !performanceData) {
        return <div>Loading...</div>;
    }

    // Transform todayScore for SimpleRadialChart
    const todayScore = userData?.todayScore || userData?.score || 0;

    return (
        <div>
            <Header />
            <main>
                <div className="sideBar_container">
                    <SideBar />
                </div>
                <div className="center_container">
                    <div className="welcome_container">
                        {userData && (
                            <Welcome firstName={userData.userInfos.firstName} />
                        )}
                    </div>
                    <div className="mainChart_container">
                        <MainChart data={activityData} />
                    </div>
                    <div className="charts_container">
                        <SimpleLineChart sessions={averageSessionsData} />
                        <SimpleRadarChart performanceData={performanceData} />
                        <SimpleRadialChart todayScore={todayScore} />
                    </div>
                </div>
                <aside className="aside_container">
                    <button onClick={() => setUseMock(!useMock)}>
                        Switch to {useMock ? 'API' : 'Mock'} Data
                    </button>
                    {userData && (
                        <Aside 
                            calories={userData.keyData.calorieCount}
                            protein={userData.keyData.proteinCount}
                            carbohydrates={userData.keyData.carbohydrateCount}
                            lipids={userData.keyData.lipidCount}
                        />
                    )}
                </aside>
            </main>
        </div>
    );
};

export default Profile;
