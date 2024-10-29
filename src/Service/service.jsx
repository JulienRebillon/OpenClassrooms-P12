
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../Data/data';
import userPerformanceData from '../Data/userPerformance.json';
import { fetchUserData, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../API/api';

const extractData = (data) => data?.data || data;

const transformPerformanceData = (performance) => {
    if (!performance || !Array.isArray(performance.data) || performance.data.some(item => item.kind === undefined || item.value === undefined)) {
        console.error("Performance data is missing or incomplete:", performance);
        return { userId: performance.userId || null, kind: performance.kind || {}, data: [] };
    }
    return {
        userId: performance.userId,
        kind: performance.kind,
        data: performance.data.map(item => ({ kind: item.kind, value: item.value }))
    };
};

export const fetchAllData = async (userId, useMock) => {
    try {
        if (useMock) {
            const userData = extractData(USER_MAIN_DATA.find(user => user.id === parseInt(userId)));
            const activityData = extractData(USER_ACTIVITY.find(user => user.userId === parseInt(userId)));
            const averageSessionsData = extractData(USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId)));
            const performanceData = transformPerformanceData(userPerformanceData.find(user => user.userId === parseInt(userId)));
            return { userData, activityData, averageSessionsData, performanceData };
        } else {
            const user = await fetchUserData(userId);
            const activity = await fetchUserActivity(userId);
            const averageSessions = await fetchUserAverageSessions(userId);
            const performance = await fetchUserPerformance(userId);

            return {
                userData: extractData(user),
                activityData: extractData(activity),
                averageSessionsData: extractData(averageSessions),
                performanceData: transformPerformanceData(extractData(performance))
            };
        }
    } catch (err) {
        console.error("Error fetching data:", err);
        throw new Error("Failed to load data. Please try again later.");
    }
};
