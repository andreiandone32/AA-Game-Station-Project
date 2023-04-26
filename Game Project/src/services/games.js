import {
    fetchAndParse
} from "./utils"


const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api/games"


export const headers = {
    'X-RapidAPI-Key': '2f9583e53amsh68274c0c36d38c0p1bdbe3jsn25932b49ec5f',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
}


export function getGames() {
    return fetchAndParse(`${BASE_URL}`, {
        headers
    })
}

export function getGamesById(id) {
    return fetchAndParse(`${BASE_URL}/${id}`,
        headers)
}