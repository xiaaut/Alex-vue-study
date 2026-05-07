import { getNews } from "./apiNew.js";

export async function getEntertainmentNews () {
    const data = await getNews(533)

    return data
}