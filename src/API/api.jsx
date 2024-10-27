
import axios from 'axios';

const fetchUserData = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data");
    }
};

const fetchUserActivity = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user activity data:", error);
        throw new Error("Failed to fetch user activity data");
    }
};

const fetchUserAverageSessions = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user average sessions data:", error);
        throw new Error("Failed to fetch user average sessions data");
    }
};

const fetchUserPerformance = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user performance data:", error);
        throw new Error("Failed to fetch user performance data");
    }
};

export { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance };

