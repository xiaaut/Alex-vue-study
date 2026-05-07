export async function getSportNews () {
    const response = await fetch('https://www.mxnzp.com/api/news/list/v2?typeId=534&page=1&app_id=olpiqhhnmkcvurhh&app_secret=foBKB2xqeWKRZRoDsGzYZaMcLMD9Ugw2');

    const data = await response.json();
    return data;
}