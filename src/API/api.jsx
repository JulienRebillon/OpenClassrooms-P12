import { useEffect, useState } from 'react';
import axios from 'axios';

// Example of making a GET request
axios.get('http://localhost:3000')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



// fetch('../Data/userMainData.json')
//     .then(res => {
//         if (res.ok) {
//             console.log('Fetch success');
//             return res.json();  // Parse the response as JSON
//         } else {
//             console.log('Fetch failure');
//         }
//     })
//     .then(data => {
//         console.log('Fetched Data:', data);  // Log the actual data
//     })
//     .catch(error => console.log('ERROR TEST FETCH', error));







// import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../Data/data.jsx';

// const api = (() => {
//     const getUserById = (id) => {
//         return USER_MAIN_DATA.find(user => user.id === id);
//     };

//     const getUserActivityById = (id) => {
//         return USER_ACTIVITY.find(userActivity => userActivity.userId === id);
//     };

//     const getUserAverageSession = (id) => {
//         return USER_AVERAGE_SESSIONS.find(userAverage => userAverage.userId === id);
//     };

//     const getUserPerformance = (id) => {
//         return USER_PERFORMANCE.find(userPerformance => userPerformance.userId === id);
//     };

//     const getUserData = (id) => {
//         const user = getUserById(id);
//         const activity = getUserActivityById(id);
//         const averageSession = getUserAverageSession(id);
//         const performance = getUserPerformance(id);

//         // Combine the data into a single object
//         const userData = {
//             user,
//             activity,
//             averageSession,
//             performance,
//         };

//         // Store the data in sessionStorage
//         sessionStorage.setItem('userData', JSON.stringify(userData));
//         return userData;
//     };

//     return {
//         getUserData,
//     };
// })();

// Usage example: replace 'userId' with the actual user ID
// const userId = 1; // or whichever ID you want to fetch
// api.getUserData(userId)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));





// const BASE_URL = 'http://localhost:3000';

// /**
//  * Fetch user main data by userId.
//  * @param {number} userId - The user's ID.
//  * @returns {Promise<Object>} - A promise that resolves to the user data.
//  */
// export async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`${BASE_URL}/user/${userId}`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch user data for ID ${userId}`);
//         }
//         const data = await response.json();
//         console.log('User Data:', data); 
//         return data;        
//     } catch (error) {
//         console.error(error);
//     }
// }

// /**
//  * Fetch user activity by userId.
//  * @param {number} userId 
//  * @returns {Promise<Object>} - A promise that resolves to the user activity data.
//  */
// export async function fetchUserActivity(userId) {
//     try {
//         const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch user activity for ID ${userId}`);
//         }
//         const data = await response.json();
//         console.log('User Activity:', data);
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// /**
//  * Fetch user average sessions by userId.
//  * @param {number} userId 
//  * @returns {Promise<Object>} - A promise that resolves to the user average session data.
//  */
// export async function fetchUserAverageSessions(userId) {
//     try {
//         const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch average sessions for ID ${userId}`);
//         }
//         const data = await response.json();
//         console.log('User Average Sessions:', data); 
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }

// /**
//  * Fetch user performance data by userId.
//  * @param {number} userId 
//  * @returns {Promise<Object>} - A promise that resolves to the user performance data.
//  */
// export async function fetchUserPerformance(userId) {
//     try {
//         const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
//         if (!response.ok) {
//             throw new Error(`Failed to fetch performance data for ID ${userId}`);
//         }
//         const data = await response.json();
//         console.log('User Performance:', data);
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }
