import http from '../TvMazeAPI'

const getFirstData = () =>{
    return http.get("shows?page=0")
}

const searhShow = (show) =>{
    return http.get(`search/shows?q=:${show}`)
}

const TvMazeAPIService = {
    searhShow, 
    getFirstData
}

export default TvMazeAPIService