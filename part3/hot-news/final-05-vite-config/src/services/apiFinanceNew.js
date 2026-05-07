import { getConfig } from "@/utils/configHelp.js";


export async function getFinanceNews () {
    const API_URL = getConfig('API_URL');
    const APP_ID = getConfig('APP_ID');
    const APP_SECRET = getConfig('APP_SECRET');

    const response = await fetch(`${API_URL}?typeId=535&page=1&app_id=${APP_ID}&app_secret=${APP_SECRET}`);

    const data = await response.json();

    return data.data
}