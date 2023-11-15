export async function getPhoto(gender) {
    const url = `https://randomuser.me/api/?gender=${gender}`;
    const response = await fetch(url);
    const result = await response.json();
    const picture = result.results[0].picture.large;
    return picture;
}
