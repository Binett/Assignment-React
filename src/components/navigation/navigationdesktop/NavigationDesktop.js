import { useHistory } from "react-router"
import RoutingPath from '../../../routes/RoutingPath' 

export const NavigationDesktop = () => {
    const history = useHistory()
    
    return (
        <div>
            <div className="navbar">
                <ul className="navbar__ul">
                    <li onClick={()=>history.push(RoutingPath.homeView)} >Home</li>
                    <li onClick={()=>history.push(RoutingPath.favouriteView)}>Favourites</li>
                </ul>
            </div>
        </div>
    )
}
