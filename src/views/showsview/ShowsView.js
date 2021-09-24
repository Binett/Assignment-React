import { useLocation } from "react-router-dom"
import { ResultCard } from "../../components/showcard/ResultCard"
import './ShowsView.css'

export const ShowsView = () => {
    const location = useLocation()
    return (
        <div>            
            {(location.state) ? <h1>{location.state.user}</h1> : <h1>Shows Page</h1>}
            <ResultCard />
        </div>
    )
}