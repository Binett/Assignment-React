import http from '../TvMazeAPI'

const searhShow = (show) =>{
    return http.get(`search/shows?q=:${show}`)
}

export default {searhShow}