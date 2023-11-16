export async function getGif() {
    const apiKey2 = process.env.API_KEY2;
    const offset = Math.floor(Math.random() * 10);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey2}&q=chief+wiggum&limit=1&offset=${offset}&rating=r&lang=en&bundle=messaging_non_clips`;

    try {
        const response = await fetch(url);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        const gif = result.data[0].images.original.url;
        return gif;
    } catch (error) {
        return error;
    }
}