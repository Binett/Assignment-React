import { useLocation } from "react-router-dom"
import { ResultCard } from "../../components/showcard/ResultCard"
import './ShowsView.css'

export const ShowsView = () => {
    const location = useLocation()
    return (
        <div>            
             <h1>Shows Page</h1>
            {(location.state) && <h4>{location.state.user}</h4>}
            <ResultCard />
        </div>
    )
}