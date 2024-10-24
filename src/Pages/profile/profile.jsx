import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Bring back useParams for getting the userId
import axios from "axios";
import './profile.css';

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../Data/data'; // Mock data

import SideBar from "../../Components/sidebar/sidebar";
import Aside from "../../Components/aside/aside";
import Header from "../../Components/header/header";
import Welcome from "../../Components/welcome/welcome";
import MainChart from "../../Components/mainChart/mainChart";
import SimpleLineChart from "../../Components/lineChart/lineChart";
import SimpleRadarChart from "../../Components/radarChart/radarChart";
import SimpleRadialChart from "../../Components/radialChart/radialChart";

// Helper function to extract data safely
const extractData = (data) => {
    return data.data ? data.data : data;
};

const Profile = ({ isMock }) => {
    const { id: userId } = useParams();  // Use useParams to get the userId from the URL
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [averageSessionsData, setAverageSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [useMock, setUseMock] = useState(isMock);

    useEffect(() => {
        if (userId) {  // Ensure userId is defined
            if (useMock) {
                const userData = extractData(USER_MAIN_DATA.find(user => user.id === parseInt(userId)));
                setUserData(userData);
                const activity = extractData(USER_ACTIVITY.find(user => user.userId === parseInt(userId)));
                setActivityData(activity);
                const averageSessions = extractData(USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId)));
                setAverageSessionsData(averageSessions);
                const performance = extractData(USER_PERFORMANCE.find(user => user.userId === parseInt(userId)));
                setPerformanceData(performance);
                console.log('Test récupération Performance Data:', performance);
            } else {
                axios.get(`http://localhost:3000/user/${userId}`)
                    .then((response) => {
                        setUserData(extractData(response.data));
                    });
                
                axios.get(`http://localhost:3000/user/${userId}/activity`)
                    .then((response) => {
                        setActivityData(extractData(response.data));
                    });
                
                axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
                    .then((response) => {
                        setAverageSessionsData(extractData(response.data));
                    });
                
                axios.get(`http://localhost:3000/user/${userId}/performance`)
                    .then((response) => {
                        setPerformanceData(extractData(response.data));
                    });
            }
        }
    }, [userId, useMock]);

    if (!userData || !activityData || !averageSessionsData || !performanceData) {
        return <div>Loading...</div>;
    }

    // Transform activity data for MainChart
    console.log('Activity Data:', activityData);
    const transformedActivityData = activityData && activityData.sessions 
        ? activityData.sessions.map(session => ({
            day: session.day.split('-')[2] % 10, // Extract day from date and take last digit
            kilogram: session.kilogram,
            calories: session.calories,
        })) 
        : [];

    // Transform average sessions data for SimpleLineChart
    console.log('Average Sessions Data:', averageSessionsData);
    const sessionsData = averageSessionsData && averageSessionsData.sessions 
        ? averageSessionsData.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength,
        })) 
        : [];

    // Transform performance data for SimpleRadarChart
    console.log('Performance Data:', performanceData);
    const transformedPerformanceData = performanceData && performanceData.data
        ? performanceData.data.map((item) => ({
            value: item.value,
            kind: performanceData.kind[item.kind],  // Map `kind` using `item.kind`
        }))
        : [];

    // Transform todayScore for SimpleRadialChart
    console.log('User Data:', userData);
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
                        <MainChart data={transformedActivityData} /> {/* Pass transformed activity data */}
                    </div>
                    <div className="charts_container">
                        <SimpleLineChart sessions={sessionsData} /> {/* Pass transformed session data */}
                        <SimpleRadarChart performanceData={transformedPerformanceData} /> {/* Pass transformed performance data */}
                        <SimpleRadialChart todayScore={todayScore} /> {/* Pass transformed todayScore */}
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
