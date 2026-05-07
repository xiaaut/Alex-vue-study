import { getNews } from "./apiNew.js";

export async function getHotNews () {
    const data = await getNews(532)

    return data
}