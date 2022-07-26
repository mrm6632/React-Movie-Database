import React from "react";
import {useLocation} from 'react-router-dom';
 
const Movie = () => {
    const location = useLocation();
    return (
        <>
        <div>
            {/* <h1>{location.data.title}</h1>        */}
        </div>
        </>
    )
}

export default Movie;