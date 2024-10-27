import React from "react";
import { Link } from "react-router-dom";
import './error.css';
import Header from "../../Components/header/header";



const Error = () => {
    return <div>
        <>
            <Header />
            <div className="error_container">
                <h1 className="error_h1">404</h1>
                <p className="error_p">Erreur au chargement de la page</p>
                <Link to="/">Retour à la page d'acceuil</Link>
            </div>
            
            
        </>

    </div>;
};
  
 export default Error;