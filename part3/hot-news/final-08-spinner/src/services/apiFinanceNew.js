import { getNews } from "./apiNew.js";

export async function getFinanceNews () {
    const data = await getNews(535)

    return data
}