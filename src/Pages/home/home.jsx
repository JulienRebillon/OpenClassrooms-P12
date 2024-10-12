import React from "react";
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../../API/api';
import './home.css';
import Header from "../../Components/header/header";



const Home = () => {

    const navigate = useNavigate(); // Initialize the navigate function

    const goToProfile = (id) => {
        navigate(`/profile/${id}`); // Redirect to the profile page with the selected user ID
    };
    // const goToProfile = async (userId) => {
    //     try {
    //       const userData = await fetchUserData(userId);
          
    //       // Store the fetched data in sessionStorage
    //       sessionStorage.setItem('selectedUserData', JSON.stringify(userData));
    
    //       // Navigate to the Profile page
    //       navigate(`/profile`);

    //     } catch (error) {
    //       console.error('Error fetching user data:', error);
    //     }
    //   };

    return <div>
        <>
            <Header />

            <div>
                <h1>Choisissez un utilisateur</h1>
                <button onClick={() => goToProfile(12)}>Karl (ID 12)</button>
                <button onClick={() => goToProfile(18)}>Cecilia (ID 18) </button>
            </div>       
        </>

    </div>;
};
  
 export default Home;