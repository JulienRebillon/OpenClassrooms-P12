import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './profile.css';

import { fetchAllData } from "../../Service/service";

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
        const loadData = async () => {
            try {
                const { userData, activityData, averageSessionsData, performanceData } = await fetchAllData(userId, useMock);
                setUserData(userData);
                setActivityData(activityData);
                setAverageSessionsData(averageSessionsData);
                setPerformanceData(performanceData);
            } catch (err) {
                setError(err.message);
            }
        };

        if (userId) {
            loadData();
        }
    }, [userId, useMock]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!userData || !activityData || !averageSessionsData || !performanceData) {
        return <div>Loading...</div>;
    }

    const transformedActivityData = activityData.sessions?.map(session => ({
        day: session.day.split('-')[2] % 10,
        kilogram: session.kilogram,
        calories: session.calories,
    })) || [];

    const sessionsData = averageSessionsData.sessions?.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength,
    })) || [];

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
                        {userData && <Welcome firstName={userData.userInfos.firstName} />}
                    </div>
                    <div className="mainChart_container">
                        <MainChart data={transformedActivityData} />
                    </div>
                    <div className="charts_container">
                        <SimpleLineChart sessions={sessionsData} />
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
