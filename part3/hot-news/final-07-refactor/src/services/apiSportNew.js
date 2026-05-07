import { getNews } from "./apiNew.js";

export async function getSportNews () {
    const data = await getNews(534)

    return data
}