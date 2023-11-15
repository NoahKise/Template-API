const gender = "male";
const age = "33";

const url = `https://random-identity-generator.p.rapidapi.com/identity?gender=${gender}&nameSet=american&country=us&minAge=${age}&maxAge=${age}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'random-identity-generator.p.rapidapi.com'
    }
};

try {
    const response = fetch(url, options);
    const result = response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}

