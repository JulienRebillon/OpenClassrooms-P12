const BASE_URL = 'http://localhost:3000';

/**
 * Fetch user main data by userId.
 * @param {number} userId - The user's ID.
 * @returns {Promise<Object>} - A promise that resolves to the user data.
 */
export async function fetchUserData(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user data for ID ${userId}`);
        }
        const data = await response.json();
        console.log('User Data:', data); 
        return data;        
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetch user activity by userId.
 * @param {number} userId 
 * @returns {Promise<Object>} - A promise that resolves to the user activity data.
 */
export async function fetchUserActivity(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user activity for ID ${userId}`);
        }
        const data = await response.json();
        console.log('User Activity:', data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetch user average sessions by userId.
 * @param {number} userId 
 * @returns {Promise<Object>} - A promise that resolves to the user average session data.
 */
export async function fetchUserAverageSessions(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`Failed to fetch average sessions for ID ${userId}`);
        }
        const data = await response.json();
        console.log('User Average Sessions:', data); 
        return data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetch user performance data by userId.
 * @param {number} userId 
 * @returns {Promise<Object>} - A promise that resolves to the user performance data.
 */
export async function fetchUserPerformance(userId) {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`Failed to fetch performance data for ID ${userId}`);
        }
        const data = await response.json();
        console.log('User Performance:', data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
