import {
    fetchAndParse
} from "./utils"

const BASE_URL = "https://www.cheapshark.com/api/1.0";


export function getDeals() {
    return fetchAndParse(`${BASE_URL}/deals?`);
}




export function getDealByDealId(dealID) {
    const url = new URL(`${BASE_URL}/deals`);
    url.search = new URLSearchParams({
        id: dealID
    }).toString()
    return fetchAndParse(url)
}