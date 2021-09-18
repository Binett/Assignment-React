import {createContext,useState,useEffect} from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchFirstData =async () =>{
        setIsLoading(true)
        const {data} = await axios.get(`https://api.tvmaze.com/shows`)
        setData(data)
        setIsLoading(false)
    }
    

    useEffect(() => {
        fetchFirstData()
    }, [])


    return (
        <AppContext.Provider value={{data ,isLoading}} >
            {children}
        </AppContext.Provider>
    )
}
