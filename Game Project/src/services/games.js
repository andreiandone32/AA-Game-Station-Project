import {
    fetchAndParse
} from "./utils"


const BASE_URL = " https://free-to-play-games-database.p.rapidapi.com/api/games"


export const headers = {
    'X-RapidAPI-Key': '8553a11824mshbe71cfec189cd37p17ce5bjsned1ab3206df3',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
}


export function getGames() {
    return fetchAndParse(`${BASE_URL}`, {
        headers
    })
}
export function getGameByGenre(genre) {
    return fetchAndParse(`${BASE_URL}?${genre}`,
        headers)
}


export function getGamesById(id) {
    return fetchAndParse(`${BASE_URL}?${id}`,
        headers)
}