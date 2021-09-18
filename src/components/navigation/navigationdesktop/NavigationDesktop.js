import { useHistory } from "react-router"
import RoutingPath from '../../../routes/RoutingPath' 
import './NavigationDesktop.css'

export const NavigationDesktop = () => {
    const history = useHistory()
    
    return (
        <div className="container">
            <div className="navbar">
                <ul className="navbar__ul">
                    <li onClick={()=>history.push(RoutingPath.homeView)} >Home</li>
                    <li onClick={()=>history.push(RoutingPath.signInView)} >Sign Up</li>
                    <li onClick={()=>history.push(RoutingPath.favouriteView)}>Favourites</li>
                </ul>
            </div>
        </div>
    )
}
