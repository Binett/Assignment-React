import React from 'react'
import { useLocation,useHistory } from 'react-router'
import RoutingPath from '../../routes/RoutingPath'


export const InfoView = () => {
    const location = useLocation()
    const history = useHistory()
    console.log(location.state);

    const displayStateData = () =>{
        return location.state ? (
            <div>
                <h1>{location.state.name}</h1>
                <h3>{location.state.name}</h3>
                <img src={location.state.image?.original} alt="Movie Poster" />
                <h4>{location.state.premiered ? location.state.premiered.substring(0, 4) : "-"}</h4>
                <h2>{location.state.summary.replace(/<[^&>]*>/g, ' ')}</h2>
                <button onClick={()=>history.goBack()} >Go Back</button>
            </div>
        ) : (
            <div>{history.push(RoutingPath.homeView)}</div>
        )
    }


    return (
        <div>
            {displayStateData()}
        </div>
    )
}
