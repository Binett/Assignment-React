import axios from "axios";

const TvMazeAPI = axios.create({
    baseURL: 'https://api.tvmaze.com/'
})

export default TvMazeAPI