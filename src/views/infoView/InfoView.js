import React,{useEffect} from 'react'
import { useLocation,useHistory } from 'react-router'
import axios from 'axios'

export const InfoView = () => {
    const location = useLocation()
    const history = useHistory()
    console.log(location.state);

    const fetchData = async () =>{
        await axios.get(location.state.url)
        .then((response) => console.log(response))
    }


    // useEffect(()=>{
    //     fetchData()
    // },[])

    return (
        <div>
            <h1>{location.state.name}</h1>
            <button onClick={()=>history.goBack()} >Go Back</button>
        </div>
    )
}
