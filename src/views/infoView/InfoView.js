import React,{useEffect} from 'react'
import { useLocation,useHistory } from 'react-router'
import axios from 'axios'

export const InfoView = () => {
    const location = useLocation()
    const history = useHistory()
    console.log(location.state);

    const displaySummary = () =>{
        let tempString = location.state.summary;
        return tempString.replace(/<[^&>]*>/g, ' ')
    }

    return (
        <div>
            <h1>{location.state.name}</h1>
            <h3>{location.state.name}</h3>
            <img src={location.state.image?.original} alt="Movie Poster" />
            <h4>{location.state.premiered ? location.state.premiered.substring(0, 4) : "-"}</h4>
            <h2>{displaySummary()}</h2>
            <button onClick={()=>history.goBack()} >Go Back</button>
        </div>
    )
}
