import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../Data/data';
import userPerformanceData from '../Data/userPerformance.json';
import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../API/api';

// Helper function to extract data safely
const extractData = (data) => {
    return data.data ? data.data : data;
};

// Helper function to transform performance data safely
const transformPerformanceData = (performance) => {
    if (
        !performance || 
        !Array.isArray(performance.data) || 
        performance.data.some(item => item.kind === undefined || item.value === undefined)
    ) {
        console.error("Performance data is missing or incomplete:", performance);
        return { userId: performance.userId || null, kind: performance.kind || {}, data: [] }; // Return empty structure if data is missing
    }

    return {
        userId: performance.userId,
        kind: performance.kind,
        data: performance.data.map(item => ({
            kind: item.kind,
            value: item.value
        }))
    };
};

// Data fetching functions
export const getUserData = async (userId, useMock) => {
    if (useMock) {
        const userData = extractData(USER_MAIN_DATA.find(user => user.id === parseInt(userId)));
        return userData;
    }
    const user = await fetchUserData(userId);
    return extractData(user);
};

export const getActivityData = async (userId, useMock) => {
    if (useMock) {
        const activity = USER_ACTIVITY.find(user => user.userId === parseInt(userId));
        console.log("Mock activity data:", activity); // Log mock data for debugging
        return activity ? activity.sessions : []; // Return empty array if undefined
    } else {
        try {
            const response = await fetchUserActivity(userId);
            const activity = response.data?.sessions;
            console.log("API activity data:", activity); // Log API data for debugging

            // Check if the data exists and is an array before returning it
            return activity && Array.isArray(activity) ? activity : [];
        } catch (error) {
            console.error("Error in getActivityData:", error); // Log any API errors
            throw error; // Re-throw to be caught in the calling function
        }
    }
};


export const getAverageSessionsData = async (userId, useMock) => {
    if (useMock) {
        const averageSessions = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId));
        console.log("Mock average sessions data:", averageSessions); // Log mock data for debugging
        return averageSessions ? averageSessions.sessions : []; // Return empty array if undefined
    } else {
        try {
            const response = await fetchUserAverageSessions(userId);
            const sessions = response.data?.sessions;
            console.log("API average sessions data:", sessions); // Log API data for debugging

            // Check if the data exists and is an array before returning it
            return sessions && Array.isArray(sessions) ? sessions : [];
        } catch (error) {
            console.error("Error in getAverageSessionsData:", error); // Log any API errors
            throw error; // Re-throw to be caught in the calling function
        }
    }
};


export const getPerformanceData = async (userId, useMock) => {
    if (useMock) {
        const performance = userPerformanceData.find(user => user.userId === parseInt(userId));
        return transformPerformanceData(performance);
    }
    const performance = await fetchUserPerformance(userId);
    return transformPerformanceData(extractData(performance));
};
