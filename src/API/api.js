import * as axios from "axios";

const instance = axios.create({
    method: "GET",
    baseURL: "https://api-football-v1.p.rapidapi.com/v2/leagueTable/8",
    headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "d345025205msh37e4267543ffcaap1ae228jsnd488f984db22"
    }
});

export const getHomePageData = () => {
    return instance.get().then(response => response.data);
};
