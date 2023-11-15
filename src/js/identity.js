export async function getId(gender, age) {
    const apiKey = process.env.API_KEY;
    const url = `https://random-identity-generator.p.rapidapi.com/identity?gender=${gender}&nameSet=american&country=us&minAge=${age}&maxAge=${age}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'random-identity-generator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const resultText = await response.text();
        const result = JSON.parse(resultText);
        return result;
    } catch (error) {
        return error;
    }
}

