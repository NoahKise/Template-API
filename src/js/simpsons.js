export async function getQuote() {
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=chief+wiggum`;
    const response = await fetch(url);
    const result = await response.json();
    const quote = result[0].quote;
    return quote;
}