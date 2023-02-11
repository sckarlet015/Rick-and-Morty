import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error404(){

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/Home')
      }

    return(
        <div>
            <h1>Error 404</h1>
            <p>Page not found</p>
            <button onClick={backToHome}>Home</button>
        </div>
    )
}