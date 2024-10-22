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

    // Transform activity data for MainChart
    const activityData = data.activityData ? data.activityData.sessions.map(session => ({
        day: session.day.split('-')[2], // Extract day from date
        kilogram: session.kilogram,
        calories: session.calories,
    })) : [];

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
                            {data.userData && (
                                <Welcome firstName={data.userData.userInfos.firstName} />
                            )}
                        </div>
                        <div className="mainChart_container">
                            <MainChart data={activityData} /> {/* Pass transformed activity data */}
                        </div>
                        <div className="charts_container">
                            <SimpleLineChart />
                            <SimpleRadarChart />
                            <SimpleRadialChart />
                        </div>
                    </div>
                    <aside className="aside_container">
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
